import { OrbitControls } from "@react-three/drei";
import { AxesHelper } from "../../features/debug/axesHelper";
import { Light } from "../../features/light";
import { Room } from "../../features/room";
import { type ThreeElement } from "@react-three/fiber";
import { Group } from "three";
import { useRef } from "react";

export default function MainPage() {
  const room = useRef<ThreeElement<typeof Group>>(null!)
  return (
    <>
      {/* <AxesHelper /> */}
      <OrbitControls />
      <Light />
      <Room ref={room} position={[0, 5, 5]} />
    </>
  )
}