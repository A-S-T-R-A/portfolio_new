type Position = [number, number, number]

export function getMoveCoef(start: Position, finish: Position) {
    const [x1, y1, z1] = start
    const [x2, y2, z2] = finish

    const [x, y, z] = [x2 - x1, y2 - y1, z2 - z1]
    const limits = [x2, y2, z2]
    const magnitude = Math.sqrt(x ** 2 + y ** 2 + z ** 2)
    const direction = [x / magnitude, y / magnitude, z / magnitude]

    return { direction, limits, vector: [x, y, z] }
}
