import { Suspense, type JSX } from "react";
import { Model } from "../../../../../shared/lib/models/table";

export default function Table(props: JSX.IntrinsicElements['group']) {
  return (
    <Suspense fallback={null}>
      <Model {...props} />
    </Suspense>
  )
}