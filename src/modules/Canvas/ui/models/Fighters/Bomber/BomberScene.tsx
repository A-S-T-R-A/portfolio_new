import * as THREE from "three"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three-stdlib"

type GLTFResult = GLTF & {
    nodes: {
        Engines_0: THREE.Mesh
        Engines_1: THREE.Mesh
        Engines_2: THREE.Mesh
        ArmGreebles_0: THREE.Mesh
        Arms_0: THREE.Mesh
        Arms_1: THREE.Mesh
        CockpitHullPlates_0: THREE.Mesh
        MainSection_0: THREE.Mesh
        MainSection_1: THREE.Mesh
        MainSectionGreebles_0: THREE.Mesh
        MainSectionGreebles_1: THREE.Mesh
        MidSection_0: THREE.Mesh
        MidSection_1: THREE.Mesh
        MidSectionGreebles_0: THREE.Mesh
        MissilePort_0: THREE.Mesh
        TargetingSensorAndBombChute_0: THREE.Mesh
        TargetingSensorAndBombChute_1: THREE.Mesh
        WingBeams_0: THREE.Mesh
        WingGreebles_0: THREE.Mesh
        Wings_0: THREE.Mesh
        Wings_1: THREE.Mesh
        Window_0: THREE.Mesh
        Window_1: THREE.Mesh
    }
    materials: {
        ScratchedMetal: THREE.MeshStandardMaterial
        RedEngineGlow: THREE.MeshStandardMaterial
        ScratchedMetalDark: THREE.MeshStandardMaterial
        TieWingMesh: THREE.MeshStandardMaterial
        ReflectiveGlass: THREE.MeshStandardMaterial
    }
}

export function BomberScene(props: JSX.IntrinsicElements["group"]) {
    const { nodes, materials } = useGLTF("/scene.gltf") as GLTFResult
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={10}>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
                    <mesh geometry={nodes.Engines_0.geometry} material={materials.ScratchedMetal} />
                    <mesh geometry={nodes.Engines_1.geometry} material={materials.RedEngineGlow} />
                    <mesh
                        geometry={nodes.Engines_2.geometry}
                        material={materials.ScratchedMetalDark}
                    />
                </group>
                <group position={[0, -0.05, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.13}>
                    <mesh
                        geometry={nodes.MainSection_0.geometry}
                        material={materials.ScratchedMetal}
                    />
                    <mesh
                        geometry={nodes.MainSection_1.geometry}
                        material={materials.ScratchedMetalDark}
                    />
                </group>
                <group scale={0.06}>
                    <mesh
                        geometry={nodes.MainSectionGreebles_0.geometry}
                        material={materials.ScratchedMetal}
                    />
                    <mesh
                        geometry={nodes.MainSectionGreebles_1.geometry}
                        material={materials.ScratchedMetalDark}
                    />
                </group>
                <group position={[0, 0.02, -0.01]} scale={[0.06, 0.06, 0.09]}>
                    <mesh
                        geometry={nodes.MidSection_0.geometry}
                        material={materials.ScratchedMetal}
                    />
                    <mesh
                        geometry={nodes.MidSection_1.geometry}
                        material={materials.ScratchedMetalDark}
                    />
                </group>
                <group position={[0.06, 0.1, -0.19]}>
                    <mesh
                        geometry={nodes.TargetingSensorAndBombChute_0.geometry}
                        material={materials.ScratchedMetal}
                    />
                    <mesh
                        geometry={nodes.TargetingSensorAndBombChute_1.geometry}
                        material={materials.ScratchedMetalDark}
                    />
                </group>
                <group position={[-0.16, -0.17, 0]}>
                    <mesh geometry={nodes.Window_0.geometry} material={materials.ReflectiveGlass} />
                    <mesh
                        geometry={nodes.Window_1.geometry}
                        material={materials.ScratchedMetalDark}
                    />
                </group>
                <mesh
                    geometry={nodes.ArmGreebles_0.geometry}
                    material={materials.ScratchedMetal}
                    scale={0.08}
                />
                <mesh geometry={nodes.Arms_0.geometry} material={materials.ScratchedMetal} />
                <mesh geometry={nodes.Arms_1.geometry} material={materials.ScratchedMetalDark} />
                <mesh
                    geometry={nodes.CockpitHullPlates_0.geometry}
                    material={materials.ScratchedMetal}
                    position={[0, -0.05, 0]}
                />
                <mesh
                    geometry={nodes.MidSectionGreebles_0.geometry}
                    material={materials.ScratchedMetal}
                    position={[0.02, -0.04, 0.01]}
                    scale={0.02}
                />
                <mesh
                    geometry={nodes.MissilePort_0.geometry}
                    material={materials.ScratchedMetal}
                    position={[0.16, -0.14, 0]}
                    scale={0.01}
                />
                <mesh geometry={nodes.WingBeams_0.geometry} material={materials.ScratchedMetal} />
                <mesh
                    geometry={nodes.WingGreebles_0.geometry}
                    material={materials.ScratchedMetal}
                />
                <mesh geometry={nodes.Wings_0.geometry} material={materials.ScratchedMetal} />
                <mesh geometry={nodes.Wings_1.geometry} material={materials.TieWingMesh} />
            </group>
        </group>
    )
}

useGLTF.preload("/scene.gltf")
