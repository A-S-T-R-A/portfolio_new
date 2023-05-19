import { Position } from "../../types/types"
import { atan2, sqrt } from "./basics"

export function findVector(a: Position, b: Position) {
    const [x1, y1, z1] = a
    const [x2, y2, z2] = b
    return [x2 - x1, y2 - y1, z2 - z1]
}

function calculateVector(vector: number[]) {
    const [x, y, z] = vector
    const magnitude = sqrt(x ** 2 + y ** 2 + z ** 2)
    const direction = [x / magnitude, y / magnitude, z / magnitude]
    const [xn, yn, zn] = direction
    const azimuth = atan2(zn, xn)
    const elevationXZ = atan2(yn, sqrt(xn ** 2 + zn ** 2))
    return { magnitude, azimuth, elevation: elevationXZ }
}

export function findOrientation(position: Position, target: Position) {
    const vector = findVector(position, target)
    const { azimuth, elevation } = calculateVector(vector)

    return [0, -azimuth, elevation]
}

/* export function getMoveCoef(start: Position, finish: Position) {
    const [x1, y1, z1] = start
    const [x2, y2, z2] = finish

    const [x, y, z] = [x2 - x1, y2 - y1, z2 - z1]
    const limits = [x2, y2, z2]
    const magnitude = Math.sqrt(x ** 2 + y ** 2 + z ** 2)
    const direction = [x / magnitude, y / magnitude, z / magnitude]

    return { direction, limits, vector: [x, y, z] }
} */
