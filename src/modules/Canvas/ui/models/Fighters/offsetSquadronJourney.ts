import { Journey, Position } from "../../../types/types"

export function offsetSquadronJourney(journey: Journey, index: number): Journey {
    if (index === 0) return journey
    const SPREAD_X = 8
    const SPREAD_Y = 1
    const SPREAD_Z = 15

    function offsetCoordinates(psn: Position): Position {
        const [x, y, z] = psn

        const isOdd = index && index % 2 !== 0
        const newX = isOdd ? x - SPREAD_X * (index + 1) : x + SPREAD_X * index
        const newY = isOdd ? y + SPREAD_Y * (index + 1) : y + SPREAD_Y * index
        const newZ = isOdd ? z - SPREAD_Z * (index + 1) : z - SPREAD_Z * index

        return [newX, newY, newZ]
    }

    const arr = journey.map(item => {
        const newItem = [...item]

        // @ts-ignore
        newItem[0] = offsetCoordinates(newItem[0])
        return newItem
    })

    // @ts-ignore
    return arr
}
