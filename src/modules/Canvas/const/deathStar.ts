import { IShipData } from "../types/types"

interface IDeathStarData extends IShipData {
    rateOfYRotation: number
    jumpDelay: number
}

export const hyperSpaceStart = [[1050, 200, -3000], 200]

export const deathStar: IDeathStarData = {
    journey: [[[500, 50, -1500], 0.01], [[200, 50, -1400]]],
    rateOfYRotation: 0.002,
    jumpDelay: 1500,
}
