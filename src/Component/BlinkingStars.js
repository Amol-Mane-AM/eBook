import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const BlinkingStars = ({ count = 300 }) => {
  const group = useRef();

  // Generate random star positions
  const stars = useMemo(() => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      positions.push([
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        Math.random() * 0.5 + 0.5 // base opacity
      ]);
    }
    return positions;
  }, [count]);

  // Animate star blinking
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.children.forEach((star, i) => {
      const blinkSpeed = 2 + Math.random(); // random blink frequency
      star.material.opacity = 0.3 + Math.sin(t * blinkSpeed + i) * 0.3;
    });
  });

  return (
    <group ref={group}>
      {stars.map(([x, y, z], i) => (
        <mesh key={i} position={[x, y, z]}>
          <sphereGeometry args={[0.1, 6, 6]} />
          <meshBasicMaterial color="white" transparent />
        </mesh>
      ))}
    </group>
  );
};

export default BlinkingStars;
