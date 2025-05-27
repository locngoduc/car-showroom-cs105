import { Box, Cylinder, RoundedBox, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const ShowroomObjects = () => {
  const infoDisplayRef = useRef<THREE.Group>(null);

  // Reduced animation for better performance
  useFrame((state) => {
    if (infoDisplayRef.current) {
      infoDisplayRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  // Simplified traffic cone
  const TrafficCone = ({ position }: { position: [number, number, number] }) => (
    <group position={position}>
      <Cylinder
        args={[0.3, 0.6, 1.5]}
        position={[0, 0.75, 0]}
        castShadow={false}
        receiveShadow
      >
        <meshStandardMaterial color="#ff4500" roughness={0.8} />
      </Cylinder>
      <Cylinder
        args={[0.8, 0.8, 0.1]}
        position={[0, 0.05, 0]}
        castShadow={false}
        receiveShadow
      >
        <meshStandardMaterial color="#333333" />
      </Cylinder>
    </group>
  );

  // Simplified directional sign
  const DirectionalSign = ({ position, rotation, text }: { 
    position: [number, number, number], 
    rotation?: [number, number, number],
    text: string 
  }) => (
    <group position={position} rotation={rotation}>
      <Cylinder
        args={[0.08, 0.08, 2.5]}
        position={[0, 1.25, 0]}
        castShadow={false}
        receiveShadow
      >
        <meshStandardMaterial color="#888888" />
      </Cylinder>
      <Box
        args={[2.5, 0.6, 0.08]}
        position={[0, 2.2, 0]}
        castShadow={false}
        receiveShadow
      >
        <meshStandardMaterial color="#1e40af" />
      </Box>
      <Text
        position={[0, 2.2, 0.05]}
        fontSize={0.1}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Poppins-Regular.ttf"
      >
        {text}
      </Text>
    </group>
  );

  // Simplified barrier post
  const BarrierPost = ({ position }: { position: [number, number, number] }) => (
    <group position={position}>
      <Cylinder
        args={[0.12, 0.12, 2.5]}
        position={[0, 1.25, 0]}
        castShadow={false}
        receiveShadow
      >
        <meshStandardMaterial color="#333333" />
      </Cylinder>
      <Cylinder
        args={[0.3, 0.3, 0.2]}
        position={[0, 0.1, 0]}
        castShadow={false}
        receiveShadow
      >
        <meshStandardMaterial color="#444444" />
      </Cylinder>
    </group>
  );

  // Simplified information display
  const InfoDisplay = ({ position, text }: { position: [number, number, number], text: string }) => (
    <group position={position}>
      <Cylinder
        args={[1.0, 1.2, 0.6]}
        position={[0, 0.3, 0]}
        castShadow={false}
        receiveShadow
      >
        <meshStandardMaterial color="#2c3e50" />
      </Cylinder>
      <Box
        args={[1.6, 1.0, 0.08]}
        position={[0, 1.2, 0]}
        castShadow={false}
        receiveShadow
      >
        <meshStandardMaterial color="#1a1a1a" />
      </Box>
      <Box
        args={[1.4, 0.8, 0.04]}
        position={[0, 1.22, 0.05]}
      >
        <meshStandardMaterial 
          color="#00ff88" 
          emissive="#00ff88" 
          emissiveIntensity={0.2}
        />
      </Box>
      <Text
        position={[0, 1.22, 0.08]}
        fontSize={0.08}
        color="#00ff88"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Poppins-Regular.ttf"
      >
        {text}
      </Text>
    </group>
  );

  // Simplified ceiling beam
  const CeilingBeam = ({ position, rotation }: { 
    position: [number, number, number], 
    rotation?: [number, number, number] 
  }) => (
    <Box
      args={[25, 0.4, 0.8]}
      position={position}
      rotation={rotation}
      castShadow={false}
      receiveShadow
    >
      <meshStandardMaterial color="#34495e" />
    </Box>
  );

  return (
    <group name="showroom-objects">
      {/* Reduced traffic cones */}
      <TrafficCone position={[15, 0, 20]} />
      <TrafficCone position={[-15, 0, 20]} />

      {/* Reduced directional signs */}
      <DirectionalSign position={[18, 0, -22]} text="ENTRANCE" />
      <DirectionalSign position={[-18, 0, -22]} rotation={[0, Math.PI, 0]} text="EXIT" />

      {/* Reduced barrier posts */}
      <BarrierPost position={[20, 0, 20]} />
      <BarrierPost position={[-20, 0, 20]} />
      <BarrierPost position={[20, 0, -20]} />
      <BarrierPost position={[-20, 0, -20]} />
      <BarrierPost position={[0, 0, 25]} />
      <BarrierPost position={[0, 0, -25]} />

      {/* Reduced information displays */}
      <InfoDisplay position={[12, 0, -15]} text="PREMIUM" />
      <InfoDisplay position={[-12, 0, -15]} text="LUXURY" />

      {/* Simplified ceiling beams */}
      <CeilingBeam position={[0, 11, 0]} />
      <CeilingBeam position={[12, 11, 0]} rotation={[0, Math.PI / 2, 0]} />
      <CeilingBeam position={[-12, 11, 0]} rotation={[0, Math.PI / 2, 0]} />
    </group>
  );
};

export default ShowroomObjects; 