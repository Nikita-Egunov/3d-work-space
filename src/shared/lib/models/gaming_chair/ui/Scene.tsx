import * as THREE from 'three'
import { useMemo, type JSX } from 'react'
import { useGLTF } from '@react-three/drei'
import { type GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Plane_Material_0: THREE.Mesh
    Plane_Material001_0: THREE.Mesh
    Circle_Material002_0: THREE.Mesh
    aseito_logo_aseito_logo_0: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    aseito_logo: THREE.MeshStandardMaterial
  }
  animations: THREE.AnimationClip[]
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/public/models/gaming_chair/scene-transformed.glb') as unknown as GLTFResult

  // Создаем модифицированный материал с белым цветом
  const whiteStripesMaterial = useMemo(() => {
    const material = materials['Material.001'].clone()
    material.color = new THREE.Color('#FFFFFF') // Белый цвет
    material.needsUpdate = true // Важно для обновления материала
    return material
  }, [materials])

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane_Material_0.geometry} material={materials.Material} position={[0.447, 347.716, -16.46]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Plane_Material001_0.geometry} material={whiteStripesMaterial} position={[0.447, 347.716, -16.46]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Circle_Material002_0.geometry} material={materials['Material.002']} position={[0.447, 148.165, 100.433]} rotation={[-Math.PI / 2, 0, 0]} scale={10.164} />
      <mesh geometry={nodes.aseito_logo_aseito_logo_0.geometry} material={materials.aseito_logo} position={[0.447, 368.437, -8.993]} scale={6.094} />
    </group>
  )
}

useGLTF.preload('/public/models/gaming_chair/scene-transformed.glb')