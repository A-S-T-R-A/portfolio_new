import * as THREE from "three"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three-stdlib"
import { Position, Rotation, Scale } from "../../../../types/types"

type GLTFResult = GLTF & {
    nodes: {
        Wings_TieWIng_0: THREE.Mesh
        Wings_Metal_0: THREE.Mesh
        Wings_Metal_0_1: THREE.Mesh
        Interior_PolishedMetalDark_0: THREE.Mesh
        Interior_BlankScreen_0: THREE.Mesh
        TIE_Avenger_Metal_0: THREE.Mesh
        TIE_Avenger_Metal_0_1: THREE.Mesh
        TIE_Avenger_MetalDark_0: THREE.Mesh
        TIE_Avenger_DarkWindow_0: THREE.Mesh
        TIE_Avenger_PolishedMetalDark_0: THREE.Mesh
        TIE_Avenger_MetalOrange_0: THREE.Mesh
        TIE_Avenger_RedEngineGlow_0: THREE.Mesh
    }
    materials: {
        TieWIng: THREE.MeshStandardMaterial
        Metal: THREE.MeshStandardMaterial
        PolishedMetalDark: THREE.MeshStandardMaterial
        BlankScreen: THREE.MeshStandardMaterial
        MetalDark: THREE.MeshStandardMaterial
        DarkWindow: THREE.MeshStandardMaterial
        MetalOrange: THREE.MeshStandardMaterial
        RedEngineGlow: THREE.MeshStandardMaterial
    }
}

interface IFighterScene {
    fighterRef: any
    position: Position
    rotation: Rotation
    scale: Scale
}

export function FighterScene(props: IFighterScene) {
    const { fighterRef, position, rotation, scale } = props
    const { nodes, materials } = useGLTF("/fighter/scene.gltf") as GLTFResult
    return (
        <group
            ref={fighterRef}
            position={position}
            rotation={rotation}
            scale={scale}
            dispose={null}
        >
            <group scale={0.01}>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                    <group position={[1.63, 0.81, 0]}>
                        <mesh
                            geometry={nodes.Interior_PolishedMetalDark_0.geometry}
                            material={materials.PolishedMetalDark}
                        />
                        <mesh
                            geometry={nodes.Interior_BlankScreen_0.geometry}
                            material={materials.BlankScreen}
                        />
                    </group>
                    <mesh
                        geometry={nodes.TIE_Avenger_Metal_0.geometry}
                        material={materials.Metal}
                    />
                    <mesh
                        geometry={nodes.TIE_Avenger_Metal_0_1.geometry}
                        material={materials.Metal}
                    />
                    <mesh
                        geometry={nodes.TIE_Avenger_MetalDark_0.geometry}
                        material={materials.MetalDark}
                    />
                    <mesh
                        geometry={nodes.TIE_Avenger_DarkWindow_0.geometry}
                        material={materials.DarkWindow}
                    />
                    <mesh
                        geometry={nodes.TIE_Avenger_PolishedMetalDark_0.geometry}
                        material={materials.PolishedMetalDark}
                    />
                    <mesh
                        geometry={nodes.TIE_Avenger_MetalOrange_0.geometry}
                        material={materials.MetalOrange}
                    />
                    <mesh
                        geometry={nodes.TIE_Avenger_RedEngineGlow_0.geometry}
                        material={materials.RedEngineGlow}
                    />
                    <mesh geometry={nodes.Wings_TieWIng_0.geometry} material={materials.TieWIng} />
                    <mesh geometry={nodes.Wings_Metal_0.geometry} material={materials.Metal} />
                    <mesh geometry={nodes.Wings_Metal_0_1.geometry} material={materials.Metal} />
                </group>
            </group>
        </group>
    )
}

//useGLTF.preload("/scene.gltf")
