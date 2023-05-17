import * as THREE from "three"
import { useEffect, useRef, useState } from "react"
import { Canvas, Vector3, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import styles from "./DeathStarCanvas.module.scss"
import { Trajectory } from "./Trajectory"

function Stars() {
    const [cont, setCont] = useState<THREE.InstancedMesh | null>(null)
    const count = 2000
    const temp = new THREE.Object3D()

    function rend() {
        if (!cont) return
        for (let i = 0; i < count; i++) {
            const x = Math.floor(Math.random() * 599) + 1 - 320
            const y = Math.floor(Math.random() * 499) + 1 - 250
            const z = Math.floor(Math.random() * -599) - 300
            temp.position.set(x, y, z)

            temp.updateMatrix()
            cont.setMatrixAt(i, temp.matrix)
        }

        cont.instanceMatrix.needsUpdate = true
    }

    rend()

    useFrame(() => {
        const matrix = new THREE.Matrix4()
        if (!cont) return
        for (let i = 0; i < 1000; i++) {
            cont.getMatrixAt(i, matrix)

            const position = new THREE.Vector3()
            const rotation = new THREE.Quaternion()
            const scale = new THREE.Vector3()
            matrix.decompose(position, rotation, scale)

            const scaleRange = 0.6
            const minScale = 0.1
            const time = performance.now() / 3000
            const newScale = ((Math.sin(time * 2) + 1) / 2) * scaleRange + minScale

            const star = new THREE.Object3D()
            star.position.copy(position)
            star.scale.set(newScale, newScale, newScale)

            star.updateMatrix()
            cont.setMatrixAt(i, star.matrix)
        }

        cont.instanceMatrix.needsUpdate = true
    })

    return (
        <instancedMesh
            ref={node => {
                setCont(node)
            }}
            position={[0, 0, 0]}
            args={[
                null as unknown as THREE.BufferGeometry,
                null as unknown as THREE.Material | THREE.Material[],
                count,
            ]}
        >
            <sphereGeometry args={[0.5, 64, 32, 1]} />
            <meshBasicMaterial />
        </instancedMesh>
    )
}

function DeathStar() {
    const deathStar = useGLTF("./death_star/scene.gltf")
    const sphereRef = useRef<THREE.Group>(null)
    const [position, setPosition] = useState<Vector3 | undefined>()
    const [scale, setScale] = useState(0)
    //let scrollPosRef = useRef(0)
    const trajectoryRef = useRef(
        new Trajectory(document.body.clientHeight - window.innerHeight, 20, 0)
    )
    //const directionXRef = useRef(1)

    useEffect(() => {
        if (window.innerWidth < 481) {
            setPosition([0, 20, 0])
            setScale(0.4)
        } else if (window.innerWidth < 768) {
            setPosition([0, 20, 0])
            setScale(0.5)
        } else if (window.innerWidth < 961) {
            setPosition([0, 20, 0])
            setScale(0.6)
        } else if (window.innerWidth < 1200) {
            setPosition([40, 0, 0])
            setScale(0.6)
        } else if (window.innerWidth > 1200) {
            setPosition([60, 0, -50])
            setScale(0.8)
        }

        trajectoryRef.current.buildTrajectory()
    }, [])

    const { camera, size } = useThree()

    function handleScroll() {
        if (!sphereRef.current) return
        const t = document.body.getBoundingClientRect().top

        sphereRef.current.position.x = trajectoryRef.current.getX(t)
        sphereRef.current.position.y = t * 0.01

        const pixelPosition = sphereRef.current.position
            .clone() // Create a clone of the position vector
            .project(camera) // Project the position to normalized device coordinates (NDC)
            .unproject(camera) // Unproject the NDC coordinates back to world coordinates
            .multiplyScalar(size.width / 2) // Scale the coordinates based on the renderer size
            .add(new THREE.Vector3(size.width / 2, size.height / 2, 0)) // Offset the coordinates to the center of the screen

        console.log(pixelPosition.x, pixelPosition.y)

        //console.log(sphereRef.current.position.clone().project(camera))
        // console.log(sphereRef.current.position)
        // console.log(t)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [])

    // useFrame(() => {
    //     if (!sphereRef.current) return
    //     sphereRef.current.rotation.x += 0.0002 * directionXRef.current
    //     if (sphereRef.current.rotation.x >= Math.PI / 20) {
    //         directionXRef.current = -1
    //     } else if (sphereRef.current.rotation.x <= -Math.PI / 20) {
    //         directionXRef.current = 1
    //     }
    //     sphereRef.current.rotation.y += 0.001
    // })

    return (
        <group ref={sphereRef} scale={scale} position={position} rotation-x={0}>
            <primitive object={deathStar.scene} />
        </group>
    )
}

export function DeathStarCanvas() {
    return (
        <div className={styles.deathStar}>
            <Canvas
                frameloop="always"
                dpr={window.devicePixelRatio}
                gl={{ preserveDrawingBuffer: true }}
                camera={{
                    fov: 20,
                    near: 0.1,
                    far: 1000,
                    position: [0, 0, 400],
                }}
            >
                <directionalLight position={[-20, 20, 10]} color={0xffffff} intensity={4} />
                <DeathStar />
                <Stars />
                <Preload all />
            </Canvas>
        </div>
    )
}
