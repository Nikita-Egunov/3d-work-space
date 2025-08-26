import type { ThreeElement } from '@react-three/fiber';
import { Mesh, type BoxGeometry } from 'three';

interface WallProps extends ThreeElement<typeof Mesh> {
  geometryProps?: ThreeElement<typeof BoxGeometry>;
}

export default function Wall({ geometryProps, ...meshProps }: WallProps) {
  return (
    <mesh {...meshProps}>
      <boxGeometry {...geometryProps} />
      <meshStandardMaterial 
        color={'#fff'}
        roughness={0.9}
        metalness={0.2}
      />
    </mesh>
  );
}
