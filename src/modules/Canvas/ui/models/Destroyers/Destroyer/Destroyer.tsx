import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { DestroyerScene } from "./DestroyerScene"
import { IDestroyersData, Journey } from "../../../../types/types"
import { DestroyerClass } from "../../../../model/DestroyerClass"
import { alignToX } from "../../../../lib/alignToX"
import { Shuttle } from "../../Shuttle/Shuttle"

interface IDestroyer {
    data: IDestroyersData
}

export function Destroyer(props: IDestroyer) {
    const { data } = props
    const destroyerRef = useRef<THREE.Group>(null)
    const classRef = useRef(new DestroyerClass(data))
    const { position, rotation } = classRef.current.getInitialData()

    const [isDeploymentStarted, setIsDeploymentStarted] = useState(false)
    const [shuttlesJourney, setShuttlesJourney] = useState<Journey>([])
    const totalShuttles = data.shuttles?.length || 0

    useFrame(() => {
        const { speed, isReachedEnd } = classRef.current
        if (!destroyerRef.current || isReachedEnd || speed === 0) return
        const { position, rotation } = classRef.current.move(destroyerRef.current.position)
        destroyerRef.current.position.set(...position)
        rotation && destroyerRef.current.rotation.set(...alignToX(rotation))

        if (classRef.current.isReachedEnd && !isDeploymentStarted) {
            setIsDeploymentStarted(true)
            deployShuttle(position)
            setTimeout(() => deployShuttle(position), 1500)
        }
    })

    // @ts-ignore
    function deployShuttle(position: Position) {
        // @ts-ignore
        setShuttlesJourney(prev => [...prev, classRef.current.generateShuttleJourney(position)])
    }

    return (
        <>
            <DestroyerScene
                destroyerRef={destroyerRef}
                position={position}
                rotation={alignToX(rotation)}
            />
            {Array(totalShuttles)
                .fill("")
                .map((_, i) => {
                    console.log(i, shuttlesJourney[i])
                    // @ts-ignore
                    return shuttlesJourney[i] ? <Shuttle journey={shuttlesJourney[i]} /> : null
                })}
        </>
    )
}

//useGLTF.preload("/scene.gltf")
