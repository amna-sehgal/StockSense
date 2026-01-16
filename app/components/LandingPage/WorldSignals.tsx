"use client";

import React, { useMemo, useRef, memo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

/* ---------- Helper: Lat/Lon → Vector3 ---------- */
const latLonToVector3 = (lat: number, lon: number, radius: number) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
};

/* ---------- Shader ---------- */
const GlobalArcShader = {
  uniforms: {
    uTime: { value: 0 },
    uColor: { value: new THREE.Color("#22c55e") },
    uSpeed: { value: 0.5 },
  },
  vertexShader: `
    varying float vProgress;
    void main() {
      vProgress = uv.x;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec3 uColor;
    uniform float uSpeed;
    varying float vProgress;

    void main() {
      float progress = mod(uTime * uSpeed, 1.0);
      float tailLength = 0.7;

      float strength = smoothstep(0.0, tailLength, progress - vProgress);

      if (vProgress > progress || strength <= 0.0) discard;

      float headFade = smoothstep(progress, progress - 0.01, vProgress);
      gl_FragColor = vec4(uColor, strength * headFade);
    }
  `,
};

/* ---------- Traveling Arc ---------- */
const TravelingArc = ({
  startLat,
  startLon,
  speed,
}: {
  startLat: number;
  startLon: number;
  speed: number;
}) => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const radius = 5;

  const geometry = useMemo(() => {
    const startVec = latLonToVector3(startLat, startLon, radius);
    const endVec = latLonToVector3(-startLat, startLon + 180, radius);

    const midVec = startVec
      .clone()
      .lerp(endVec, 0.5)
      .normalize()
      .multiplyScalar(radius * 2.5);

    const curve = new THREE.QuadraticBezierCurve3(startVec, midVec, endVec);
    return new THREE.TubeGeometry(curve, 128, 0.04, 8, false);
  }, [startLat, startLon]);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.elapsedTime;
    }
  });

  return (
    <mesh geometry={geometry}>
      <shaderMaterial
        ref={materialRef}
        {...GlobalArcShader}
        transparent
        depthWrite={false}
        uniforms-uSpeed-value={speed}
      />
    </mesh>
  );
};

/* ---------- Dotted Globe ---------- */
const DottedGlobe = () => {
  const radius = 5;

  const geometry = useMemo(() => {
    const points = [];
    const density = 15000;

    for (let i = 0; i < density; i++) {
      const phi = Math.acos(-1 + (2 * i) / density);
      const theta = Math.sqrt(density * Math.PI) * phi;
      points.push(
        new THREE.Vector3().setFromSphericalCoords(radius, phi, theta)
      );
    }

    return new THREE.BufferGeometry().setFromPoints(points);
  }, []);

  return (
    <points geometry={geometry}>
      <pointsMaterial color="#22c55e" size={0.04} transparent opacity={0.4} />
    </points>
  );
};

/* ---------- Main Scene ---------- */
const WorldSignals = memo(function WorldSignals() {
  return (
    <div className="canvasWrapper">
      <Canvas camera={{ position: [0, 0, 18], fov: 45 }}>
        <color attach="background" args={["#000"]} />

        <group scale={1.25}>
          <DottedGlobe />

          <TravelingArc startLat={40} startLon={-74} speed={0.4} />
          <TravelingArc startLat={-20} startLon={20} speed={0.5} />
          <TravelingArc startLat={0} startLon={100} speed={0.3} />
        </group>

        <OrbitControls enablePan={false} autoRotate autoRotateSpeed={0.3} />

        <EffectComposer>
          <Bloom
            luminanceThreshold={0}
            intensity={2.5}
            radius={0.5}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
});

export default WorldSignals;
