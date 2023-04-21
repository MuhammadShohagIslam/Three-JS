import { Canvas } from "@react-three/fiber"
const App = () => {
  return (
    <div>
      <Canvas>
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <sphereGeometry args={[15, 32, 16]} />
          <meshBasicMaterial />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App
