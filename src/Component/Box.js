import React from 'react';
import { Text } from '@react-three/drei';

const FaceText = ({ position, rotation }) => (
  <Text
    position={position}
    rotation={rotation}
    fontSize={0.4}
    color="white"
    anchorX="center"
    anchorY="middle"
  >
    AMOL
  </Text>
);

const Box = () => {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#00bfff" />

      {/* Text on all six faces */}
      <FaceText position={[0, 0, 1.01]} rotation={[0, 0, 0]} />            {/* Front */}
      <FaceText position={[0, 0, -1.01]} rotation={[0, Math.PI, 0]} />     {/* Back */}
      <FaceText position={[1.01, 0, 0]} rotation={[0, -Math.PI / 2, 0]} /> {/* Right */}
      <FaceText position={[-1.01, 0, 0]} rotation={[0, Math.PI / 2, 0]} /> {/* Left */}
      <FaceText position={[0, 1.01, 0]} rotation={[-Math.PI / 2, 0, 0]} /> {/* Top */}
      <FaceText position={[0, -1.01, 0]} rotation={[Math.PI / 2, 0, 0]} /> {/* Bottom */}
    </mesh>
  );
};

export default Box;
