import { Journey, Position, Speed } from "../../../types/types"

export function offsetSquadronJourney(journey: Journey, index: number): Journey {
    if (index === 0) return journey
    const SPREAD_X = 1.5
    const SPREAD_Y = 0.25
    const SPREAD_Z = 3.75

    function offsetCoordinates(psn: Position): Position {
        const [x, y, z] = psn

        const isOdd = index && index % 2 !== 0

        let newX = x + SPREAD_X * index
        let newY = y + SPREAD_Y * index
        let newZ = z - SPREAD_Z * index

        if (isOdd) {
            newX = x - SPREAD_X * (index + 1)
            newY = y + SPREAD_Y * (index + 1)
            newZ = z - SPREAD_Z * (index + 1)
        }

        return [newX, newY, newZ]
    }

    const arr = journey.map((item, wpIndex) => {
        const newItem = [...item]

        const [x, y, z] = offsetCoordinates(newItem[0] as Position)
        newItem[0] = [x, y, wpIndex > 0 ? z + 10 + index : z]
        return newItem as [Position] | [Position, Speed]
    })

    return arr
}
