import { Box, Cylinder, RoundedBox, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const ShowroomObjects = () => {
  const barrierGroupRef = useRef<THREE.Group>(null);
  const infoDisplayRef = useRef<THREE.Group>(null);
  const conesRef = useRef<THREE.Group>(null);

  // Subtle animation for info displays
  useFrame((state) => {
    if (infoDisplayRef.current) {
      infoDisplayRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    // Subtle floating animation for cones
    if (conesRef.current) {
      conesRef.current.children.forEach((cone, index) => {
        cone.position.y = Math.sin(state.clock.elapsedTime * 2 + index) * 0.1;
      });
    }
  });

  // Traffic cone for automotive theme
  const TrafficCone = ({ position }: { position: [number, number, number] }) => (
    <group position={position}>
      {/* Cone body */}
      <Cylinder
        args={[0.3, 0.8, 2]}
        position={[0, 1, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#ff4500" roughness={0.8} />
      </Cylinder>
      {/* White stripes */}
      <Cylinder
        args={[0.32, 0.82, 0.2]}
        position={[0, 1.4, 0]}
        castShadow
      >
        <meshStandardMaterial color="#ffffff" />
      </Cylinder>
      <Cylinder
        args={[0.45, 0.75, 0.2]}
        position={[0, 0.6, 0]}
        castShadow
      >
        <meshStandardMaterial color="#ffffff" />
      </Cylinder>
      {/* Base */}
      <Cylinder
        args={[1, 1, 0.2]}
        position={[0, 0.1, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#333333" />
      </Cylinder>
    </group>
  );

  // Directional arrow signs
  const DirectionalSign = ({ position, rotation, text }: { 
    position: [number, number, number], 
    rotation?: [number, number, number],
    text: string 
  }) => (
    <group position={position} rotation={rotation}>
      {/* Sign post */}
      <Cylinder
        args={[0.1, 0.1, 3]}
        position={[0, 1.5, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#888888" metalness={0.8} roughness={0.2} />
      </Cylinder>
      {/* Sign board */}
      <RoundedBox
        args={[3, 0.8, 0.1]}
        position={[0, 2.5, 0]}
        radius={0.05}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#1e40af" metalness={0.3} roughness={0.7} />
      </RoundedBox>
      {/* Arrow */}
      <Box
        args={[1, 0.2, 0.05]}
        position={[-0.5, 2.5, 0.06]}
        castShadow
      >
        <meshStandardMaterial color="#ffffff" />
      </Box>
      <Box
        args={[0.3, 0.3, 0.05]}
        position={[0.2, 2.5, 0.06]}
        rotation={[0, 0, Math.PI / 4]}
        castShadow
      >
        <meshStandardMaterial color="#ffffff" />
      </Box>
      {/* Text */}
      <Text
        position={[0.5, 2.3, 0.1]}
        fontSize={0.12}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Poppins-Regular.ttf"
      >
        {text}
      </Text>
    </group>
  );

  // Barrier posts around the showroom perimeter
  const BarrierPost = ({ position }: { position: [number, number, number] }) => (
    <group position={position}>
      {/* Post */}
      <Cylinder
        args={[0.15, 0.15, 3]}
        position={[0, 1.5, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
      </Cylinder>
      {/* Base */}
      <Cylinder
        args={[0.4, 0.4, 0.3]}
        position={[0, 0.15, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#444444" />
      </Cylinder>
      {/* Chain connection point */}
      <Box
        args={[0.1, 0.1, 0.1]}
        position={[0, 2.5, 0]}
        castShadow
      >
        <meshStandardMaterial color="#888888" metalness={1} roughness={0.1} />
      </Box>
    </group>
  );

  // Information display pedestals
  const InfoDisplay = ({ position, text }: { position: [number, number, number], text: string }) => (
    <group position={position} ref={infoDisplayRef}>
      {/* Pedestal base */}
      <Cylinder
        args={[1.2, 1.5, 0.8]}
        position={[0, 0.4, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#2c3e50" metalness={0.3} roughness={0.7} />
      </Cylinder>
      {/* Display screen */}
      <RoundedBox
        args={[2, 1.2, 0.1]}
        position={[0, 1.5, 0]}
        radius={0.05}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
      </RoundedBox>
      {/* Screen glow */}
      <RoundedBox
        args={[1.8, 1, 0.05]}
        position={[0, 1.55, 0.06]}
        radius={0.02}
      >
        <meshStandardMaterial 
          color="#00ff88" 
          emissive="#00ff88" 
          emissiveIntensity={0.3}
          transparent
          opacity={0.8}
        />
      </RoundedBox>
      {/* Text */}
      <Text
        position={[0, 1.55, 0.1]}
        fontSize={0.15}
        color="#00ff88"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Poppins-Regular.ttf"
      >
        {text}
      </Text>
    </group>
  );

  // Decorative ceiling beams
  const CeilingBeam = ({ position, rotation }: { 
    position: [number, number, number], 
    rotation?: [number, number, number] 
  }) => (
    <Box
      args={[30, 0.5, 1]}
      position={position}
      rotation={rotation}
      castShadow
      receiveShadow
    >
      <meshStandardMaterial color="#34495e" metalness={0.4} roughness={0.6} />
    </Box>
  );

  // Wall panels for showroom atmosphere
  const WallPanel = ({ position, rotation }: { 
    position: [number, number, number], 
    rotation?: [number, number, number] 
  }) => (
    <Box
      args={[15, 8, 0.5]}
      position={position}
      rotation={rotation}
      receiveShadow
    >
      <meshStandardMaterial 
        color="#ecf0f1" 
        roughness={0.8}
        metalness={0.1}
      />
    </Box>
  );

  return (
    <group name="showroom-objects">
      {/* Traffic cones for automotive atmosphere */}
      <group ref={conesRef}>
        <TrafficCone position={[12, 0, 25]} />
        <TrafficCone position={[-12, 0, 25]} />
        <TrafficCone position={[25, 0, 12]} />
        <TrafficCone position={[-25, 0, 12]} />
      </group>

      {/* Directional signs */}
      <DirectionalSign position={[18, 0, -25]} text="ENTRANCE" />
      <DirectionalSign position={[-18, 0, -25]} rotation={[0, Math.PI, 0]} text="EXIT" />
      <DirectionalSign position={[25, 0, -8]} rotation={[0, -Math.PI/2, 0]} text="PARKING" />
      <DirectionalSign position={[-25, 0, -8]} rotation={[0, Math.PI/2, 0]} text="SERVICE" />

      {/* Barrier posts around the perimeter */}
      <group ref={barrierGroupRef}>
        <BarrierPost position={[25, 0, 25]} />
        <BarrierPost position={[-25, 0, 25]} />
        <BarrierPost position={[25, 0, -25]} />
        <BarrierPost position={[-25, 0, -25]} />
        <BarrierPost position={[0, 0, 30]} />
        <BarrierPost position={[0, 0, -30]} />
        <BarrierPost position={[30, 0, 0]} />
        <BarrierPost position={[-30, 0, 0]} />
      </group>

      {/* Information displays */}
      <InfoDisplay position={[15, 0, -20]} text="PREMIUM VEHICLES" />
      <InfoDisplay position={[-15, 0, -20]} text="LUXURY COLLECTION" />
      <InfoDisplay position={[20, 0, 15]} text="SPECIFICATIONS" />
      <InfoDisplay position={[-20, 0, 15]} text="FEATURES" />

      {/* Ceiling beams for industrial showroom feel */}
      <CeilingBeam position={[0, 12, 0]} />
      <CeilingBeam position={[0, 12, 15]} />
      <CeilingBeam position={[0, 12, -15]} />
      <CeilingBeam position={[15, 12, 0]} rotation={[0, Math.PI / 2, 0]} />
      <CeilingBeam position={[-15, 12, 0]} rotation={[0, Math.PI / 2, 0]} />

      {/* Wall panels for showroom backdrop */}
      <WallPanel position={[0, 4, -40]} />
      <WallPanel position={[40, 4, 0]} rotation={[0, Math.PI / 2, 0]} />
      <WallPanel position={[-40, 4, 0]} rotation={[0, Math.PI / 2, 0]} />
    </group>
  );
};

export default ShowroomObjects; 