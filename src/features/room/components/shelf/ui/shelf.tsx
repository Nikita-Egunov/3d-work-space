import { Suspense, type JSX } from "react";
// import { Model } from "../../../../../shared/lib/models/shelf";

export default function Shelf(props: JSX.IntrinsicElements['mesh']) {
  return (
    <Suspense fallback={null}>
      <mesh {...props}>
        <boxGeometry 
          args={[4, 0.5, 3]}
        />
        <meshStandardMaterial 
          color={'#fff'}
        />
      </mesh>
    </Suspense>
  )
}