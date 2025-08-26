import { Suspense, type JSX } from "react";
import { Model } from "../../../../../shared/lib/models/laptop";

export default function Laptop(props: JSX.IntrinsicElements['group']) {
  return (
    <Suspense fallback={null}>
      <Model {...props} />
    </Suspense>
  )
}