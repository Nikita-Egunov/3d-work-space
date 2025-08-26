import { useHelper } from "@react-three/drei"
import { useRef } from "react"
import { RectAreaLight } from "three"
import { RectAreaLightHelper } from "three/examples/jsm/Addons.js"

export default function Light() {
  const rectAreaLight = useRef<RectAreaLight>(null!)
  const rectAreaLight2 = useRef<RectAreaLight>(null!)

  // useHelper(rectAreaLight, RectAreaLightHelper, 'red')
  // useHelper(rectAreaLight2, RectAreaLightHelper, 'pink')

  return (
    <>
      <ambientLight
        color={"#fff"}
        intensity={0.2}
      />
      {/* <pointLight
        ref={pointLight}
        color={"#fff"}
        position={[20, 20, 20]}
        power={2000}
        castShadow
        shadow-mapSize={[1024, 1024]} // Размер shadow map
        shadow-bias={-0.0001} // Корректировка bias для устранения артефактов
        shadow-radius={2} // Размытие теней
        shadow-camera-near={0.5}
        shadow-camera-far={50}
      /> */}
      <rectAreaLight
        ref={rectAreaLight}
        color="#31C950"
        intensity={300}
        width={44}
        height={0.2}
        position={[2.999, 32, 24]}
        rotation={[0, Math.PI / 180 * -90, 0]}
      />
      <rectAreaLight
        ref={rectAreaLight2}
        color="#31C950"
        intensity={300}
        width={42}
        height={0.2}
        position={[23, 32, 2.999]}
        rotation={[0, Math.PI / 180 * -180, 0]}
      />
      <directionalLight
        color={"#fff"}
        intensity={0.3}
      />
    </>
  )
}