import type { ThreeElement } from "@react-three/fiber";
import type { Group } from "three";
import { Walls } from "../components";
import { Table } from "../components/table";
import Laptop2 from "../components/laptop/ui/laptop_2";
import { UltraWideMonitor } from "../components/ultrawide_monitor";
import { Shelf } from "../components/shelf";
import { Books } from "../components/books";
import { Sanservieria } from "../components/sanservieria";
import { Chair } from "../components/chair";

export default function Room(props: ThreeElement<typeof Group>) {
  return (
    <group {...props}>
      <Walls />
      <group
        position={[3, 0, 0]}
      >
        <Table
          position={[20, 3.9, 5]}
          scale={15}
        />
        <Sanservieria
          position={[31, 10, 2]}
          scale={0.7}
        />
        {/* <Laptop
        position={[20, 10, 5]}
      /> */}
        <Laptop2
          position={[20, 10, 5]}
        />
        <UltraWideMonitor
          position={[20, 15.5, 4]}
        />
        <Chair 
          scale={0.05}
          position={[15, -3.7, 22]}
          rotation={[0, Math.PI / 180 * 150, 0]}
        />
      </group>
      <group position={[0, -1, 0]}>
        <Shelf
          position={[13, 22, 0]}
          scale={[5, 1, 3]}
        />
        <Books
          position={[5, 23.5, 0]}
          scale={2}
        />
        <Books
          position={[9, 23.5, 0]}
          scale={2}
          rotation={[0, 1, 0]}
        />
        <Books
          position={[13, 23.5, 0]}
          scale={2}
        />
        <Sanservieria
          position={[20, 22, 1]}
          scale={0.7}
        />
      </group>
    </group>
  )
}