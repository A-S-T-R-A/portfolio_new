import { IShipData } from "../types/types"

interface IDeathStarData extends IShipData {
    rateOfYRotation: number
}

export const deathStar: IDeathStarData = {
    journey: [[[200, 100, -1000], 0.1], [[-10, 50, -700], 0.1], [[100, 30, 100]]],
    rateOfYRotation: 0.002,
}
