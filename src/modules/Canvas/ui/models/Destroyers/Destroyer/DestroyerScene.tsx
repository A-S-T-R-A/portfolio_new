import { useGLTF } from "@react-three/drei"
import { Position, Ref, Rotation, Scale } from "../../../../types/types"
import { GLTF } from "three-stdlib"

interface IDestroyerScene {
    destroyerRef: any
    position: Position
    rotation: Rotation
    scale: Scale
}

type GLTFResult = GLTF & {
    nodes: {
        Object_4: THREE.Mesh
        Object_6: THREE.Mesh
        Object_8: THREE.Mesh
        Object_10: THREE.Mesh
        Object_12: THREE.Mesh
        Object_14: THREE.Mesh
        Object_16: THREE.Mesh
        Object_18: THREE.Mesh
        Object_20: THREE.Mesh
        Object_22: THREE.Mesh
        Object_24: THREE.Mesh
        Object_26: THREE.Mesh
        Object_28: THREE.Mesh
        Object_30: THREE.Mesh
        Object_32: THREE.Mesh
        Object_34: THREE.Mesh
        Object_36: THREE.Mesh
        Object_38: THREE.Mesh
        Object_40: THREE.Mesh
        Object_42: THREE.Mesh
        Object_44: THREE.Mesh
        Object_46: THREE.Mesh
        Object_48: THREE.Mesh
        Object_50: THREE.Mesh
        Object_52: THREE.Mesh
        Object_54: THREE.Mesh
        Object_56: THREE.Mesh
        Object_58: THREE.Mesh
        Object_60: THREE.Mesh
        Object_62: THREE.Mesh
        Object_64: THREE.Mesh
        Object_66: THREE.Mesh
        Object_68: THREE.Mesh
        Object_70: THREE.Mesh
        Object_72: THREE.Mesh
        Object_74: THREE.Mesh
        Object_76: THREE.Mesh
        Object_78: THREE.Mesh
        Object_80: THREE.Mesh
        Object_82: THREE.Mesh
        Object_84: THREE.Mesh
        Object_86: THREE.Mesh
        Object_88: THREE.Mesh
        Object_90: THREE.Mesh
        Object_92: THREE.Mesh
        Object_94: THREE.Mesh
        Object_96: THREE.Mesh
        Object_98: THREE.Mesh
        Object_100: THREE.Mesh
        Object_102: THREE.Mesh
        Object_104: THREE.Mesh
        Object_106: THREE.Mesh
        Object_108: THREE.Mesh
        Object_110: THREE.Mesh
        Object_112: THREE.Mesh
        Object_114: THREE.Mesh
        Object_116: THREE.Mesh
        Object_118: THREE.Mesh
        Object_120: THREE.Mesh
        Object_122: THREE.Mesh
        Object_124: THREE.Mesh
        Object_126: THREE.Mesh
        Object_128: THREE.Mesh
        Object_130: THREE.Mesh
        Object_132: THREE.Mesh
        Object_134: THREE.Mesh
        Object_136: THREE.Mesh
    }
    materials: {
        Body: THREE.MeshStandardMaterial
        Body_Top: THREE.MeshStandardMaterial
        ["Material.004"]: THREE.MeshStandardMaterial
        Turret_Bed: THREE.MeshStandardMaterial
        ["Material.003"]: THREE.MeshStandardMaterial
        Engines: THREE.MeshStandardMaterial
        Details: THREE.MeshStandardMaterial
        Bridge_Thing: THREE.MeshStandardMaterial
        Turret: THREE.MeshStandardMaterial
    }
}

export function DestroyerScene(props: IDestroyerScene) {
    const { destroyerRef, position, rotation, scale } = props
    const { nodes, materials } = useGLTF("./destroyer/scene.gltf") as GLTFResult

    return (
        <group
            ref={destroyerRef}
            scale={scale}
            position={position}
            rotation={rotation}
            dispose={null}
        >
            <mesh geometry={nodes.Object_4.geometry} material={materials.Body} />
            <mesh
                geometry={nodes.Object_6.geometry}
                material={materials.Body_Top}
                position={[-6.63, 1.34, 0]}
                scale={[1, 1, 2.87]}
            />
            <mesh
                geometry={nodes.Object_8.geometry}
                material={materials["Material.004"]}
                position={[-7.78, -0.61, 0]}
                scale={0.72}
            />
            <mesh
                geometry={nodes.Object_10.geometry}
                material={materials["Material.004"]}
                position={[-7.78, -0.61, -2.8]}
                scale={0.72}
            />
            <mesh
                geometry={nodes.Object_12.geometry}
                material={materials["Material.004"]}
                position={[-6.59, -0.61, -2.8]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0.58}
            />
            <mesh
                geometry={nodes.Object_14.geometry}
                material={materials["Material.004"]}
                position={[-6.59, -0.61, 0]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0.58}
            />
            <mesh
                geometry={nodes.Object_16.geometry}
                material={materials["Material.004"]}
                position={[-7.68, -0.26, -1.59]}
                scale={0.28}
            />
            <mesh
                geometry={nodes.Object_18.geometry}
                material={materials["Material.004"]}
                position={[-7.22, -0.26, -1.59]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0.26}
            />
            <mesh
                geometry={nodes.Object_20.geometry}
                material={materials["Material.004"]}
                position={[-7.68, -0.91, -1.59]}
                scale={0.28}
            />
            <mesh
                geometry={nodes.Object_22.geometry}
                material={materials["Material.004"]}
                position={[-7.22, -0.91, -1.59]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0.26}
            />
            <mesh
                geometry={nodes.Object_24.geometry}
                material={materials.Turret_Bed}
                position={[-4.24, 0.32, -2.8]}
                rotation={[-0.19, 0, -0.08]}
                scale={[1, 0.99, 1.02]}
            />
            <mesh
                geometry={nodes.Object_26.geometry}
                material={materials["Material.003"]}
                position={[-5.58, 2.98, 0]}
                rotation={[0, 0, -0.09]}
                scale={[0.72, 0.35, 1.68]}
            />
            <mesh
                geometry={nodes.Object_28.geometry}
                material={materials["Material.004"]}
                position={[2.47, -1.1, 0.84]}
                rotation={[0.02, 0.03, -1.49]}
                scale={[0.18, 0.11, 0.11]}
            />
            <mesh
                geometry={nodes.Object_30.geometry}
                material={materials.Engines}
                position={[-7.27, -0.61, -2.77]}
                scale={0.28}
            />
            <mesh
                geometry={nodes.Object_32.geometry}
                material={materials.Engines}
                position={[-7.27, -0.61, 0]}
                scale={0.28}
            />
            <mesh
                geometry={nodes.Object_34.geometry}
                material={materials.Engines}
                position={[-7.47, -0.26, -1.59]}
                scale={0.05}
            />
            <mesh
                geometry={nodes.Object_36.geometry}
                material={materials.Details}
                position={[-6.06, 1.46, -1.66]}
                rotation={[Math.PI / 2, 1.48, -3.13]}
                scale={[-0.02, 0.05, 0.5]}
            />
            <mesh
                geometry={nodes.Object_38.geometry}
                material={materials.Engines}
                position={[-7.47, -0.92, -1.59]}
                scale={0.05}
            />
            <mesh
                geometry={nodes.Object_40.geometry}
                material={materials.Details}
                position={[-4.82, 3.14, 0]}
                rotation={[0, 0, -0.09]}
                scale={[-0.02, 0.2, 0.06]}
            />
            <mesh
                geometry={nodes.Object_42.geometry}
                material={materials.Details}
                position={[-4.89, 2.71, -0.49]}
                rotation={[Math.PI / 2, 1.48, 0.14]}
                scale={[-0.04, 0.38, 0.06]}
            />
            <mesh
                geometry={nodes.Object_44.geometry}
                material={materials.Details}
                position={[-4.88, 2.94, -0.68]}
                rotation={[Math.PI / 2, 1.48, -3.13]}
                scale={[-0.03, 0.09, 0.06]}
            />
            <mesh
                geometry={nodes.Object_46.geometry}
                material={materials.Details}
                position={[-4.81, 3.24, -0.1]}
                rotation={[-Math.PI, 0, -3.04]}
                scale={[-0.01, 0.09, 0.06]}
            />
            <mesh
                geometry={nodes.Object_48.geometry}
                material={materials.Details}
                position={[-4.92, 2.63, -1.3]}
                rotation={[1.71, Math.PI / 2, 0]}
                scale={[-0.02, 0.35, 0.06]}
            />
            <mesh
                geometry={nodes.Object_50.geometry}
                material={materials.Details}
                position={[-3.53, 1.45, -1.63]}
                rotation={[Math.PI / 2, 1.48, -3.13]}
                scale={[-0.03, 0.09, 0.43]}
            />
            <mesh
                geometry={nodes.Object_52.geometry}
                material={materials.Details}
                position={[-4.32, 1.41, -1.7]}
                rotation={[Math.PI / 2, 1.48, -3.13]}
                scale={[-0.04, 0.09, 0.98]}
            />
            <mesh
                geometry={nodes.Object_54.geometry}
                material={materials.Details}
                position={[-1.81, 1.35, -1.47]}
                rotation={[Math.PI / 2, 1.48, -3.13]}
                scale={[-0.02, 0.09, 0.43]}
            />
            <mesh
                geometry={nodes.Object_56.geometry}
                material={materials.Details}
                position={[-1.81, 1.25, -1.48]}
                rotation={[Math.PI / 2, 1.48, -3.13]}
                scale={[-0.02, 0.09, 0.43]}
            />
            <mesh
                geometry={nodes.Object_58.geometry}
                material={materials.Details}
                position={[-5.64, 1.72, -1.7]}
                rotation={[Math.PI / 2, 1.48, -3.13]}
                scale={[-0.02, 0.05, 0.5]}
            />
            <mesh
                geometry={nodes.Object_60.geometry}
                material={materials.Details}
                position={[-3.61, 0.9, -2.11]}
                rotation={[1.57, 1.52, -3.13]}
                scale={[-0.04, 0.09, 0.98]}
            />
            <mesh
                geometry={nodes.Object_62.geometry}
                material={materials.Details}
                position={[-1.98, 0.59, -1.95]}
                rotation={[1.57, 1.52, -3.13]}
                scale={[-0.04, 0.2, 0.98]}
            />
            <mesh
                geometry={nodes.Object_64.geometry}
                material={materials.Details}
                position={[-3.03, 0.52, -2.06]}
                rotation={[1.57, 1.52, -3.13]}
                scale={[-0.04, 0.09, 0.98]}
            />
            <mesh
                geometry={nodes.Object_66.geometry}
                material={materials.Details}
                position={[-1.93, 1.06, -0.46]}
                rotation={[1.4, 1.52, -3.13]}
                scale={[-0.04, 0.38, 0.98]}
            />
            <mesh
                geometry={nodes.Object_68.geometry}
                material={materials.Details}
                position={[-1.69, 0.97, -1.21]}
                rotation={[1.4, 1.52, -3.13]}
                scale={[-0.03, 0.28, 0.71]}
            />
            <mesh
                geometry={nodes.Object_70.geometry}
                material={materials.Details}
                position={[-2.17, 1.29, -1.08]}
                rotation={[1.4, 1.52, -3.13]}
                scale={[-0.04, 0.38, 0.98]}
            />
            <mesh
                geometry={nodes.Object_72.geometry}
                material={materials.Details}
                position={[-2.17, 1.6, -0.33]}
                rotation={[1.4, 1.52, -3.13]}
                scale={[-0.02, 0.3, 0.98]}
            />
            <mesh
                geometry={nodes.Object_74.geometry}
                material={materials.Details}
                position={[-2.14, 1.46, -0.31]}
                rotation={[1.4, 1.52, -3.13]}
                scale={[-0.02, 0.3, 0.98]}
            />
            <mesh
                geometry={nodes.Object_76.geometry}
                material={materials.Bridge_Thing}
                position={[-4.85, 2.91, 0]}
                rotation={[-Math.PI, 0, -3.05]}
                scale={0.13}
            />
            <mesh
                geometry={nodes.Object_78.geometry}
                material={materials.Body}
                position={[-7.31, -1.48, -0.48]}
                rotation={[0, 0, -1.13]}
                scale={[0.14, 0.23, 0.14]}
            />
            <mesh
                geometry={nodes.Object_80.geometry}
                material={materials.Body}
                position={[-3.39, 2.03, 0]}
                rotation={[0, 0, -0.09]}
                scale={0.29}
            />
            <mesh
                geometry={nodes.Object_82.geometry}
                material={materials.Body}
                position={[-1.81, 1.66, -0.79]}
                rotation={[-0.17, 0.02, -0.09]}
                scale={0.16}
            />
            <mesh
                geometry={nodes.Object_84.geometry}
                material={materials.Body}
                position={[1.01, -0.01, -2.32]}
                rotation={[-0.23, -0.26, -0.08]}
                scale={[0.64, 0.64, 0.55]}
            />
            <mesh
                geometry={nodes.Object_86.geometry}
                material={materials["Material.004"]}
                position={[-5.18, 3.44, 0]}
                rotation={[0, 0, -0.09]}
                scale={[0.28, 0.03, 0.38]}
            />
            <mesh
                geometry={nodes.Object_88.geometry}
                material={materials["Material.004"]}
                position={[-5.18, 3.34, -1.23]}
                rotation={[0, 0.01, 0]}
                scale={0.15}
            />
            <mesh
                geometry={nodes.Object_90.geometry}
                material={materials["Material.004"]}
                position={[-5.39, 3.7, 0]}
                rotation={[Math.PI / 2, -0.19, 0]}
                scale={[0.48, 0.64, 0.48]}
            />
            <mesh
                geometry={nodes.Object_92.geometry}
                material={materials["Material.004"]}
                position={[-5.18, 3.62, -1.23]}
                scale={0.24}
            />
            <mesh
                geometry={nodes.Object_94.geometry}
                material={materials["Material.004"]}
                position={[-5.16, 3.74, 0]}
                rotation={[0, 0, -0.09]}
                scale={[0.2, 0.14, 0.36]}
            />
            <mesh
                geometry={nodes.Object_96.geometry}
                material={materials["Material.004"]}
                position={[-2.45, 0.34, -2.53]}
                rotation={[-0.17, 0.02, -0.09]}
                scale={[0.07, 0.09, 0.14]}
            />
            <mesh
                geometry={nodes.Object_98.geometry}
                material={materials["Material.004"]}
                position={[-3.16, 0.4, -2.53]}
                rotation={[-0.17, 0.02, -0.09]}
                scale={[0.07, 0.09, 0.14]}
            />
            <mesh
                geometry={nodes.Object_100.geometry}
                material={materials["Material.004"]}
                position={[-3.86, 0.46, -2.53]}
                rotation={[-0.17, 0.02, -0.09]}
                scale={[0.07, 0.09, 0.14]}
            />
            <mesh
                geometry={nodes.Object_102.geometry}
                material={materials["Material.004"]}
                position={[-4.56, 0.52, -2.53]}
                rotation={[-0.17, 0.02, -0.09]}
                scale={[0.07, 0.09, 0.14]}
            />
            <mesh
                geometry={nodes.Object_104.geometry}
                material={materials["Material.004"]}
                position={[4.56, 0.01, -1.3]}
                rotation={[-0.17, 0.02, -0.09]}
                scale={[0.07, 0.09, 0.14]}
            />
            <mesh
                geometry={nodes.Object_106.geometry}
                material={materials["Material.004"]}
                position={[-2.25, 0.32, -2.69]}
                rotation={[-1.37, 0.09, 3.12]}
                scale={[-0.01, 0.09, 0.01]}
            />
            <mesh
                geometry={nodes.Object_108.geometry}
                material={materials["Material.004"]}
                position={[-2.96, 0.38, -2.69]}
                rotation={[-1.37, 0.09, 3.12]}
                scale={[-0.01, 0.09, 0.01]}
            />
            <mesh
                geometry={nodes.Object_110.geometry}
                material={materials["Material.004"]}
                position={[-3.67, 0.44, -2.69]}
                rotation={[-1.37, 0.09, 3.12]}
                scale={[-0.01, 0.09, 0.01]}
            />
            <mesh
                geometry={nodes.Object_112.geometry}
                material={materials["Material.004"]}
                position={[-4.36, 0.5, -2.69]}
                rotation={[-1.37, 0.09, 3.12]}
                scale={[-0.01, 0.09, 0.01]}
            />
            <mesh
                geometry={nodes.Object_114.geometry}
                material={materials["Material.004"]}
                position={[4.76, -0.01, -1.46]}
                rotation={[-1.37, 0.09, 3.12]}
                scale={[-0.01, 0.09, 0.01]}
            />
            <mesh
                geometry={nodes.Object_116.geometry}
                material={materials["Material.004"]}
                position={[-2.46, 0.23, -2.56]}
                rotation={[-0.17, 0.02, -0.09]}
                scale={[0.28, 0.02, 0.28]}
            />
            <mesh
                geometry={nodes.Object_118.geometry}
                material={materials["Material.004"]}
                position={[-3.17, 0.29, -2.56]}
                rotation={[-0.17, 0.02, -0.09]}
                scale={[0.28, 0.02, 0.28]}
            />
            <mesh
                geometry={nodes.Object_120.geometry}
                material={materials["Material.004"]}
                position={[-3.87, 0.35, -2.56]}
                rotation={[-0.17, 0.02, -0.09]}
                scale={[0.28, 0.02, 0.28]}
            />
            <mesh
                geometry={nodes.Object_122.geometry}
                material={materials["Material.004"]}
                position={[-4.57, 0.41, -2.56]}
                rotation={[-0.17, 0.02, -0.09]}
                scale={[0.28, 0.02, 0.28]}
            />
            <mesh
                geometry={nodes.Object_124.geometry}
                material={materials["Material.004"]}
                position={[4.55, -0.1, -1.33]}
                rotation={[-0.17, 0.02, -0.09]}
                scale={[0.28, 0.02, 0.28]}
            />
            <mesh
                geometry={nodes.Object_126.geometry}
                material={materials.Turret}
                position={[0.93, 0.65, 0]}
                rotation={[0.93, 0, 0]}
                scale={0.12}
            />
            <mesh
                geometry={nodes.Object_128.geometry}
                material={materials.Turret}
                position={[1.27, 0.62, 0]}
                rotation={[-0.96, -0.48, -0.59]}
                scale={0.12}
            />
            <mesh
                geometry={nodes.Object_130.geometry}
                material={materials.Turret}
                position={[0.6, 0.68, 0]}
                rotation={[-0.01, 0, -0.74]}
                scale={0.12}
            />
            <mesh
                geometry={nodes.Object_132.geometry}
                material={materials.Turret}
                position={[3.6, -1.39, -0.39]}
                rotation={[-2.39, 0, -1.36]}
                scale={0.12}
            />
            <mesh
                geometry={nodes.Object_134.geometry}
                material={materials.Turret}
                position={[-0.44, -1.53, -1.06]}
                rotation={[-1.8, 0.18, -0.65]}
                scale={0.12}
            />
            <mesh
                geometry={nodes.Object_136.geometry}
                material={materials.Turret}
                position={[-5.02, -1.13, -4.39]}
                rotation={[-1.75, -0.07, 0.39]}
                scale={0.12}
            />
        </group>
    )
}
