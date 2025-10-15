"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { createNoise3D } from "simplex-noise";

export default function WebGLBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // EXACT COPY FROM demo3.js - adapted for modern Three.js
    const canvas = canvasRef.current;
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // Transparent

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(100, width / height, 0.1, 10000);
    camera.position.set(120, 0, 300);

    const ambientLight = new THREE.HemisphereLight(0xffffff, 0xf0b90b, 0.6);
    scene.add(ambientLight);

    // Dynamic directional lights
    const light1 = new THREE.DirectionalLight(0xffd700, 0.8);
    light1.position.set(200, 300, 400);
    scene.add(light1);
    
    const light2 = new THREE.DirectionalLight(0xf0b90b, 0.6);
    light2.position.set(-200, 300, 400);
    scene.add(light2);

    // Add a moving point light for extra dynamism
    const pointLight = new THREE.PointLight(0xffffff, 1.5, 800);
    pointLight.position.set(0, 0, 200);
    scene.add(pointLight);

    // Create 5 blobs at random non-overlapping positions
    const blobs: Array<{
      mesh: THREE.Mesh;
      geometry: THREE.IcosahedronGeometry;
      originals: any[];
      offset: { x: number; y: number; z: number };
    }> = [];

    const positions: Array<{ x: number; y: number; z: number }> = [];
    const minDistance = 300; // Minimum distance between blobs

    for (let b = 0; b < 5; b++) {
      const size = 120; // Consistent size
      const geometry = new THREE.SphereGeometry(size, 128, 128);
      
      // Store original vertices
      const posAttr = geometry.attributes.position;
      const originals: any[] = [];
      for (let i = 0; i < posAttr.count; i++) {
        originals.push({
          x: posAttr.getX(i),
          y: posAttr.getY(i),
          z: posAttr.getZ(i)
        });
      }

      const material = new THREE.MeshPhongMaterial({
        emissive: 0xf0b90b, // Binance gold
        emissiveIntensity: 0.4, // Match demo3.js exactly
        shininess: 0,
        flatShading: false // Ensure smooth shading
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      
      // Find a non-overlapping random position
      let offset;
      let attempts = 0;
      do {
        offset = {
          x: (Math.random() - 0.5) * 1000,
          y: (Math.random() - 0.5) * 700,
          z: (Math.random() - 0.5) * 600
        };
        attempts++;
      } while (
        attempts < 100 &&
        positions.some(pos => {
          const dx = pos.x - offset.x;
          const dy = pos.y - offset.y;
          const dz = pos.z - offset.z;
          return Math.sqrt(dx * dx + dy * dy + dz * dz) < minDistance;
        })
      );
      
      positions.push(offset);
      mesh.position.set(offset.x, offset.y, offset.z);
      scene.add(mesh);
      
      blobs.push({ mesh, geometry, originals, offset });
    }

    const noise = createNoise3D();
    const mouse = new THREE.Vector2(0.8, 0.5);

    function updateVertices(a: number) {
      // Update each blob
      blobs.forEach((blob, blobIndex) => {
        const position = blob.geometry.attributes.position;
        for (let i = 0; i < blob.originals.length; i++) {
          const orig = blob.originals[i];
          const perlin = noise(
            (orig.x * 0.006) + (a * 0.0002) + (blobIndex * 0.5),
            (orig.y * 0.006) + (a * 0.0003) + (blobIndex * 0.3),
            (orig.z * 0.006) + (blobIndex * 0.2)
          );
          const ratio = ((perlin * 0.4 * (mouse.y + 0.1)) + 0.8);
          position.setXYZ(i, orig.x * ratio, orig.y * ratio, orig.z * ratio);
        }
        position.needsUpdate = true;
        blob.geometry.computeVertexNormals(); // Recompute normals for smooth edges
      });
    }

    let animationId: number;
    function render(a: number) {
      animationId = requestAnimationFrame(render);
      updateVertices(a);
      
      // Animate lights for dynamic lighting
      const time = a * 0.001;
      light1.position.x = Math.sin(time * 0.5) * 300;
      light1.position.y = Math.cos(time * 0.3) * 200 + 300;
      light1.intensity = 0.6 + Math.sin(time * 0.7) * 0.2;
      
      light2.position.x = Math.cos(time * 0.4) * 300;
      light2.position.y = Math.sin(time * 0.5) * 200 + 300;
      light2.intensity = 0.5 + Math.cos(time * 0.6) * 0.2;
      
      // Move point light in a circular pattern
      pointLight.position.x = Math.sin(time * 0.8) * 250;
      pointLight.position.y = Math.cos(time * 0.8) * 250;
      pointLight.intensity = 1.2 + Math.sin(time * 1.2) * 0.5;
      
      renderer.render(scene, camera);
    }

    function onResize() {
      canvas.style.width = '';
      canvas.style.height = '';
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }

    function onMouseMove(e: MouseEvent) {
      gsap.to(mouse, {
        duration: 0.8,
        y: (e.clientY / height),
        x: (e.clientX / width),
        ease: "power1.out"
      });
    }

    animationId = requestAnimationFrame(render);
    window.addEventListener("mousemove", onMouseMove);
    let resizeTm: any;
    window.addEventListener("resize", function () {
      resizeTm = clearTimeout(resizeTm);
      resizeTm = setTimeout(onResize, 200);
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      
      // Dispose all blobs
      blobs.forEach(blob => {
        blob.geometry.dispose();
        if (blob.mesh.material instanceof THREE.Material) {
          blob.mesh.material.dispose();
        }
      });
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="scene"
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

