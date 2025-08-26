import { Wall } from "../components";

export default function Walls() {
  return (
    <group scale={3}
      position={[10.5, 10, 17.5]}
    >
      <Wall
        geometryProps={{
          args: [1, 11, 15],

        }}
        position={[-3, 0.5, 0]}
      />
      <Wall
        position={[4.5, 0.5, -7]}
        geometryProps={{ args: [1, 11, 15] }}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Wall
        position={[4.5, -4.5, 0]}
        geometryProps={{ args: [1, 15, 15] }}
        rotation={[0, 0, Math.PI / 2]}
      />
    </group>
  )
}