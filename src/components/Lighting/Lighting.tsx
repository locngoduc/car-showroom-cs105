import { SpotLight } from "@react-three/drei";

const Lighting = () => {
  const white = "#DCDCDC";
  const lightIntensity = 2500;
  const lightIntensityOffset = 200;
  const lightDistance = 60;
  const shadowResolution = 1024;
  const shadowBias = -0.0009;
  const shadowBiasOffset = -0.00035;
  const spotlightHeight = 8;
  const spotlightPenumbra = 1;
  const spotlightAngle = 1;

  const spotlightParams = {
    topSpotlightColor: white,
    topSpotlightIntensity: lightIntensity - lightIntensityOffset,
    topSpotlightAngle: 2.5,
    topSpotlightPenumbra: spotlightPenumbra,
    topSpotlightDistance: 45,
    topSpotlightX: 0,
    topSpotlightY: 15,
    topSpotlightZ: 0,

    frontSpotlightColor: white,
    frontSpotlightIntensity: lightIntensity,
    frontSpotlightAngle: spotlightAngle,
    frontSpotlightPenumbra: spotlightPenumbra,
    frontSpotlightDistance: lightDistance,
    frontSpotlightX: 0,
    frontSpotlightY: spotlightHeight,
    frontSpotlightZ: 34,

    rearSpotlightColor: white,
    rearSpotlightIntensity: lightIntensity,
    rearSpotlightAngle: spotlightAngle,
    rearSpotlightPenumbra: spotlightPenumbra,
    rearSpotlightDistance: lightDistance,
    rearSpotlightX: 0,
    rearSpotlightY: spotlightHeight,
    rearSpotlightZ: -34,

    rightSpotlightColor: white,
    rightSpotlightIntensity: lightIntensity,
    rightSpotlightAngle: spotlightAngle,
    rightSpotlightPenumbra: spotlightPenumbra,
    rightSpotlightDistance: lightDistance,
    rightSpotlightX: -34,
    rightSpotlightY: spotlightHeight,
    rightSpotlightZ: 0,

    leftSpotlightColor: white,
    leftSpotlightIntensity: lightIntensity,
    leftSpotlightAngle: spotlightAngle,
    leftSpotlightPenumbra: spotlightPenumbra,
    leftSpotlightDistance: lightDistance,
    leftSpotlightX: 34,
    leftSpotlightY: spotlightHeight,
    leftSpotlightZ: 0,
  };

  return (
    <>
      <group name="lights">
        <SpotLight
          color={spotlightParams.topSpotlightColor}
          intensity={spotlightParams.topSpotlightIntensity}
          distance={spotlightParams.topSpotlightDistance}
          angle={spotlightParams.topSpotlightAngle}
          penumbra={spotlightParams.topSpotlightPenumbra}
          position={[
            spotlightParams.topSpotlightX,
            spotlightParams.topSpotlightY,
            spotlightParams.topSpotlightZ,
          ]}
          shadow-bias={shadowBias - shadowBiasOffset}
          shadow-mapSize={[shadowResolution, shadowResolution]}
        />

        <SpotLight
          color={spotlightParams.frontSpotlightColor}
          intensity={spotlightParams.frontSpotlightIntensity}
          distance={spotlightParams.frontSpotlightDistance}
          angle={spotlightParams.frontSpotlightAngle}
          penumbra={spotlightParams.frontSpotlightPenumbra}
          position={[
            spotlightParams.frontSpotlightX,
            spotlightParams.frontSpotlightY,
            spotlightParams.frontSpotlightZ,
          ]}
          shadow-bias={shadowBias}
          shadow-mapSize={[shadowResolution, shadowResolution]}
        />

        <SpotLight
          color={spotlightParams.rearSpotlightColor}
          intensity={spotlightParams.rearSpotlightIntensity}
          distance={spotlightParams.rearSpotlightDistance}
          angle={spotlightParams.rearSpotlightAngle}
          penumbra={spotlightParams.rearSpotlightPenumbra}
          position={[
            spotlightParams.rearSpotlightX,
            spotlightParams.rearSpotlightY,
            spotlightParams.rearSpotlightZ,
          ]}
          shadow-bias={shadowBias}
          shadow-mapSize={[shadowResolution, shadowResolution]}
        />

        <SpotLight
          color={spotlightParams.leftSpotlightColor}
          intensity={spotlightParams.leftSpotlightIntensity}
          distance={spotlightParams.leftSpotlightDistance}
          angle={spotlightParams.leftSpotlightAngle}
          penumbra={spotlightParams.leftSpotlightPenumbra}
          position={[
            spotlightParams.leftSpotlightX,
            spotlightParams.leftSpotlightY,
            spotlightParams.leftSpotlightZ,
          ]}
          shadow-bias={shadowBias}
          shadow-mapSize={[shadowResolution, shadowResolution]}
        />

        <SpotLight
          color={spotlightParams.rightSpotlightColor}
          intensity={spotlightParams.rightSpotlightIntensity}
          distance={spotlightParams.rightSpotlightDistance}
          angle={spotlightParams.rightSpotlightAngle}
          penumbra={spotlightParams.rightSpotlightPenumbra}
          position={[
            spotlightParams.rightSpotlightX,
            spotlightParams.rightSpotlightY,
            spotlightParams.rightSpotlightZ,
          ]}
          shadow-bias={shadowBias}
          shadow-mapSize={[shadowResolution, shadowResolution]}
        />
      </group>
    </>
  );
};

export default Lighting;
