import { Box, Cylinder, RoundedBox, Text, SpotLight } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const ShowroomObjects = () => {
  const infoDisplayRef = useRef<THREE.Group>(null);
  const trafficConeRefs = useRef<THREE.Group[]>([]);
  const directionalSignRefs = useRef<THREE.Group[]>([]);
  const barrierPostRefs = useRef<THREE.Group[]>([]);
  const spotlightRef = useRef<THREE.Group>(null);

  // Animation for spotlight
  useFrame((state) => {
    if (spotlightRef.current) {
      // Rotate the spotlight around the car
      const radius = 15;
      const speed = 0.2;
      const time = state.clock.elapsedTime * speed;
      
      spotlightRef.current.position.x = Math.cos(time) * radius;
      spotlightRef.current.position.z = Math.sin(time) * radius;
      spotlightRef.current.position.y = 8; // Height of the spotlight
      
      // Make the spotlight always point at the center (car)
      spotlightRef.current.lookAt(0, 0, 0);
    }
  });

  // Animation for info displays
  useFrame((state) => {
    if (infoDisplayRef.current) {
      infoDisplayRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
      // Add pulsing effect to the display
      const scale = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
      infoDisplayRef.current.scale.set(scale, scale, scale);
    }
  });

  // Animation for traffic cones
  useFrame((state) => {
    trafficConeRefs.current.forEach((cone) => {
      if (cone) {
        // More pronounced swaying motion
        cone.rotation.z = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
      }
    });
  });

  // Animation for directional signs
  useFrame((state) => {
    directionalSignRefs.current.forEach((sign) => {
      if (sign) {
        // More noticeable rotation
        sign.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
      }
    });
  });

  // Animation for barrier posts
  useFrame((state) => {
    barrierPostRefs.current.forEach((post) => {
      if (post) {
        // More noticeable floating motion
        post.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.2;
      }
    });
  });

  // Simplified traffic cone
  const TrafficCone = ({ position }: { position: [number, number, number] }) => (
    <group 
      position={position}
      ref={(el) => {
        if (el) trafficConeRefs.current.push(el);
      }}
    >
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
    <group 
      position={position} 
      rotation={rotation}
      ref={(el) => {
        if (el) directionalSignRefs.current.push(el);
      }}
    >
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
    <group 
      position={position}
      ref={(el) => {
        if (el) barrierPostRefs.current.push(el);
      }}
    >
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
    <group 
      position={position}
      ref={infoDisplayRef}
    >
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

  // Add Spotlight component
  const ShowroomSpotlight = () => (
    <group ref={spotlightRef}>
      <SpotLight
        position={[0, 0, 0]}
        distance={20}
        angle={0.5}
        attenuation={5}
        anglePower={5}
        intensity={2}
        color="#ffffff"
      />
      {/* Add a visible light fixture */}
      <Cylinder
        args={[0.2, 0.2, 0.5]}
        position={[0, -0.25, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color="#444444" />
      </Cylinder>
    </group>
  );

  return (
    <group name="showroom-objects">
      {/* Add the spotlight */}
      <ShowroomSpotlight />

      {/* Existing objects */}
      <TrafficCone position={[15, 0, 20]} />
      <TrafficCone position={[-15, 0, 20]} />

      <DirectionalSign position={[18, 0, -22]} text="ENTRANCE" />
      <DirectionalSign position={[-18, 0, -22]} rotation={[0, Math.PI, 0]} text="EXIT" />

      <BarrierPost position={[20, 0, 20]} />
      <BarrierPost position={[-20, 0, 20]} />
      <BarrierPost position={[20, 0, -20]} />
      <BarrierPost position={[-20, 0, -20]} />
      <BarrierPost position={[0, 0, 25]} />
      <BarrierPost position={[0, 0, -25]} />

      <InfoDisplay position={[12, 0, -15]} text="PREMIUM" />
      <InfoDisplay position={[-12, 0, -15]} text="LUXURY" />

      <CeilingBeam position={[0, 11, 0]} />
      <CeilingBeam position={[12, 11, 0]} rotation={[0, Math.PI / 2, 0]} />
      <CeilingBeam position={[-12, 11, 0]} rotation={[0, Math.PI / 2, 0]} />
    </group>
  );
};

export default ShowroomObjects; 