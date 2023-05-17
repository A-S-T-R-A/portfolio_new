import * as THREE from "three"
import { useEffect, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Preload, useGLTF } from "@react-three/drei"
import styles from "./DeathStarCanvas.module.scss"
import { Trajectory } from "./Trajectory"
import { getCurrentDevice } from "./getCurrentDevice"
import { getTrajectoryData } from "./data"

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
    const HEIGHT = document.body.clientHeight - window.innerHeight

    const [isInited, setIsInited] = useState(false)
    const [_, setForceRender] = useState(0)
    const [device, setDevice] = useState(() => getCurrentDevice(window.innerWidth))

    const deathStar = useGLTF("./death_star/scene.gltf")
    const sphereRef = useRef<THREE.Group>(null)
    const trajectoryRef = useRef<Trajectory | null>(getTrajectoryData(device, HEIGHT))
    const directionXRef = useRef(1)

    function handleScroll() {
        if (!sphereRef.current || !trajectoryRef.current) return
        const t = document.body.getBoundingClientRect().top
        sphereRef.current.position.set(...trajectoryRef.current.getCoordinates(t))
    }

    function handleResize() {
        setDevice(getCurrentDevice(window.innerWidth))
    }

    useEffect(() => {
        setIsInited(true)
        if (!isInited) return

        const HEIGHT = document.body.clientHeight - window.innerHeight
        trajectoryRef.current = getTrajectoryData(device, HEIGHT)
        trajectoryRef.current?.buildTrajectory()
        setForceRender(prev => prev + 1)
    }, [device])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    useFrame(() => {
        if (!sphereRef.current) return
        sphereRef.current.rotation.x += 0.0002 * directionXRef.current
        if (sphereRef.current.rotation.x >= Math.PI / 20) {
            directionXRef.current = -1
        } else if (sphereRef.current.rotation.x <= -Math.PI / 20) {
            directionXRef.current = 1
        }
        sphereRef.current.rotation.y += 0.001
    })

    return (
        <group
            ref={sphereRef}
            scale={trajectoryRef.current?.getInitialScale() || 1}
            position={trajectoryRef.current?.getInitialCoordinates() || [0, 0, 0]}
            rotation-x={0}
        >
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
                <directionalLight position={[-200, 200, 10]} color={0xffffff} intensity={3} />
                <DeathStar />
                <Stars />
                <Preload all />
            </Canvas>
        </div>
    )
}
