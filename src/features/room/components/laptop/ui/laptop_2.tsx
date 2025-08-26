import { Suspense, type JSX } from "react";
import { Model } from "../../../../../shared/lib/models/laptop_2";

export default function Laptop2(props: JSX.IntrinsicElements['group']) {
  return (
    <Suspense fallback={null}>
      <Model {...props} />
    </Suspense>
  )
}