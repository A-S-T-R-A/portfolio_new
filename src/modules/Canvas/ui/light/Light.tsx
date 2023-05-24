import { useRef } from "react"
import * as THREE from "three"

export function Light({ isTest }: { isTest?: boolean }) {
    const lightRef = useRef<THREE.DirectionalLight>(null!)
    /*  useHelper(lightRef, THREE.DirectionalLightHelper)
     */
    /* const { intensity, x1, y1, z1, x2, y2, z2 } = useControls({
        intensity: { value: 4, min: 0, max: 5 },
        x1: { value: 180, min: -1000, max: 1000 },
        y1: { value: -10, min: -1000, max: 1000 },
        z1: { value: -450, min: -5000, max: 5000 },
        x2: { value: -15, min: -1000, max: 1000 },
        y2: { value: 5, min: -1000, max: 1000 },
        z2: { value: 450, min: -5000, max: 5000 },
    }) */

    /*   if (isTest) {
        return (
            <directionalLight
                target-position={[x2, y2, z2]}
                ref={lightRef}
                position={[x1, y1, z1]}
                color={0xffffff}
                intensity={0}
            />
        )
    } */

    if (isTest) return null

    return (
        <directionalLight
            target-position={[200, 0, -300]}
            ref={lightRef}
            position={[-1000, 0, 0]}
            color={0xffffff}
            intensity={5}
        />
    )
}
