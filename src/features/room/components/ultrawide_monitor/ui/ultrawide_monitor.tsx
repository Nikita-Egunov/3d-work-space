import { Suspense, type JSX } from "react";
import { Model } from "../../../../../shared/lib/models/ultrawide_monitor/";

export default function UltraWideMonitor(props: JSX.IntrinsicElements['group']) {
  return (
    <Suspense fallback={null}>
      <Model {...props} />
    </Suspense>
  )
}