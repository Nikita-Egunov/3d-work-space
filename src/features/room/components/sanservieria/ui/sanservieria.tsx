import { Suspense, type JSX } from "react";
import { Model } from "../../../../../shared/lib/models/sansevieria";

export default function Sanservieria(props: JSX.IntrinsicElements['group']) {
  return (
    <Suspense>
      <Model {...props} />
    </Suspense>
  )
}