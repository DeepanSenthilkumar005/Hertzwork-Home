/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/final.glb
*/
import React, { useEffect, useState, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Home(props) {
  const { nodes, materials } = useGLTF('/models/final.glb');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const groupRef = useRef();

  // Track mouse movement and normalize
  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1; // Normalize X
      const y = -(event.clientY / window.innerHeight) * 2 + 1; // Normalize Y
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  
  

  // Update the model's rotation to "look at" the mouse direction
  useFrame(() => {
    if (groupRef.current) {
      const { x, y } = mousePosition;

      // Adjust rotation to point at mouse direction
      const targetX = -y * Math.PI * 0.15; // Invert the Y-axis rotation
      const targetY = x * Math.PI * 0.3;  // Rotate normally on the X-axis

      // Smooth transition to target rotation
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.1;
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.1;
    }
  });



  return (
    <group ref={groupRef} {...props} dispose={null} position={[-0.3, -2.5, 0]} scale={[2, 2, 2]}>
      <mesh
        geometry={nodes.Circle.geometry}
        material={materials.whitee}
        position={[0.896, 1.245, -0.169]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.077, 0.077, 0.099]}
      />
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.whitee}
        position={[1.387, 1.302, -0.169]}
        scale={[0.028, 0.202, 0.117]}
      />
      <mesh
        geometry={nodes.T.geometry}
        material={materials.whitee}
        position={[0.085, 1.367, -0.169]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.024, 0.118, 0.031]}
      />
      <mesh
        geometry={nodes.E.geometry}
        material={materials.whitee}
        position={[-0.637, 1.327, -0.169]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.018, 0.095, 0.031]}
      />
      <mesh
        geometry={nodes.R.geometry}
        material={materials.whitee}
        position={[-0.459, 1.241, -0.169]}
        rotation={[0, 0, -Math.PI]}
        scale={[0.029, 0.146, 0.031]}
      />
      <mesh
        geometry={nodes.t.geometry}
        material={materials.whitee}
        position={[-0.204, 1.241, -0.169]}
        rotation={[0, 0, -Math.PI]}
        scale={[0.018, 0.239, 0.031]}
      />
      <mesh
        geometry={nodes.Cube006.geometry}
        material={materials.whitee}
        position={[0.45, 1.314, -0.169]}
        scale={[0.025, 0.078, 0.078]}
      />
      <mesh
        geometry={nodes.Cube007.geometry}
        material={materials.whitee}
        position={[0.522, 1.314, -0.169]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.025, 0.078, 0.078]}
      />
      <mesh
        geometry={nodes.R001.geometry}
        material={materials.whitee}
        position={[1.152, 1.241, -0.169]}
        rotation={[0, 0, -Math.PI]}
        scale={[0.029, 0.146, 0.031]}
      />
      <mesh
        geometry={nodes.T001.geometry}
        material={materials['Material.007']}
        position={[1.775, 1.367, -0.169]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.024, 0.118, 0.031]}
      />
      <mesh
        geometry={nodes.humann.geometry}
        material={materials['Material.005']}
        position={[-0.974, 1.288, -0.169]}
        scale={[0.031, 0.2, 0.031]}
      />
      <mesh
        geometry={nodes.H001.geometry}
        material={materials['Material.004']}
        position={[-0.974, 1.288, -0.169]}
        scale={[0.031, 0.2, 0.031]}
      />
      <mesh
        geometry={nodes.T003.geometry}
        material={materials['Material.003']}
        position={[1.775, 1.367, -0.169]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.024, 0.118, 0.031]}
      />
      <mesh
        geometry={nodes.T004.geometry}
        material={materials['Material.006']}
        position={[-1.037, 1.299, -0.169]}
        rotation={[0, 0, -Math.PI]}
        scale={[0.009, 0.085, 0.029]}
      />
      <mesh
        geometry={nodes.H002.geometry}
        material={materials['Material.008']}
        position={[-1.494, 1.483, -0.169]}
        scale={[0.031, 0.2, 0.031]}
      />
      <mesh
        geometry={nodes.H004.geometry}
        material={materials['Material.009']}
        position={[-1.454, 1.495, -0.169]}
        rotation={[Math.PI, 0, 2.238]}
        scale={[0.031, 0.2, 0.031]}
      />
      <mesh
        geometry={nodes.H005.geometry}
        material={materials['Material.001']}
        position={[-1.409, 1.49, -0.169]}
        rotation={[Math.PI, 0, 2.942]}
        scale={[0.031, 0.2, 0.031]}
      />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials.YELLOW}
        position={[0.456, 1.967, -0.169]}
        scale={[0.039, 0.307, 0.028]}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={materials.orange}
        position={[0.312, 1.974, -0.169]}
        scale={[0.039, 0.166, 0.028]}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials.BLUE}
        position={[0.013, 1.967, -0.169]}
        scale={[0.039, 0.276, 0.028]}
      />
      <mesh
        geometry={nodes.Cube005.geometry}
        material={materials['Material.002']}
        position={[-0.136, 1.967, -0.169]}
        scale={[0.039, 0.276, 0.028]}
      />
      <mesh
        geometry={nodes.Cube008.geometry}
        material={materials.YELLOW}
        position={[-0.136, 1.967, -0.169]}
        scale={[0.039, 0.276, 0.028]}
      />
      <mesh
        geometry={nodes.Cube003.geometry}
        material={materials.orange}
        position={[-0.282, 1.967, -0.169]}
        scale={[0.039, 0.276, 0.028]}
      />
      <mesh
        geometry={nodes.Cube009.geometry}
        material={materials['PINK.002']}
        position={[0.304, 1.967, -0.169]}
        scale={[0.039, 0.276, 0.028]}
      />
      <mesh
        geometry={nodes.Cube010.geometry}
        material={materials.BLUE}
        position={[0.891, 1.967, -0.169]}
        scale={[0.039, 0.276, 0.028]}
      />
      <mesh
        geometry={nodes.Cube011.geometry}
        material={materials['Material.002']}
        position={[0.597, 1.967, -0.169]}
        scale={[0.039, 0.307, 0.028]}
      />
    </group>
  );
}

useGLTF.preload('/models/final.glb');
