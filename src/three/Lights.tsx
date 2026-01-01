export default function Lights() {
  return (
    <>
      {/* Sun light */}
      <directionalLight
        position={[30, 10, 20]}
        intensity={2.2}
        color="#ffffff"
      />

      {/* Cold space fill */}
      <ambientLight intensity={0.15} />

      {/* Rim light for silhouette */}
      <pointLight
        position={[-30, -10, -20]}
        intensity={0.8}
        color="#4fa3ff"
      />
    </>
  );
}
