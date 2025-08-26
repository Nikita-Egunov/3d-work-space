import { Suspense, type JSX } from "react";
import { Model } from "../../../../../shared/lib/models/gaming_chair";

export default function Chair(props: JSX.IntrinsicElements['group']) {
  return (
    <Suspense fallback={null}>
      <Model {...props} />
    </Suspense>
  )
}