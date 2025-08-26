import { Suspense, type JSX } from "react";
import { Model } from "../../../../../shared/lib/models/books";

export default function Books(props: JSX.IntrinsicElements['group']) {
  return (
    <Suspense fallback={null}>
      <Model {...props} />
    </Suspense>
  )
}