import { Canvas } from "@react-three/fiber"
import MainPage from "../pages/mainPage.tsx/mainPage"


function App() {
  return (
    <Canvas
      camera={{
        position: [0, 50, 100],
        rotation: [0, 0, 0],
      }}
      style={{ width: '100vw', height: '100vh' }}
    >
      <MainPage />
    </Canvas>
  )
}

export default App
