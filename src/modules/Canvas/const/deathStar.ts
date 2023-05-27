import { IShipData } from "../types/types"

interface IDeathStarData extends IShipData {
    rateOfYRotation: number
    jumpDelay: number
}

export const hyperSpaceStart = [[1050, 200, -3000], 200]

export const deathStar: IDeathStarData = {
    journey: [[[500, 50, -1500], 0], [[-10, 50, -700], 0.1], [[100, 30, 100]]],
    rateOfYRotation: 0.002,
    jumpDelay: 1500,
}
