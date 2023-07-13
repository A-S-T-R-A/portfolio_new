import { DeviceType } from "shared/data"
import { IShipData } from "../types/types"

interface IDeathStarData extends IShipData {
    rateOfYRotation: number
    jumpDelay: number
}

type DeathStarAdaptiveDataType = {
    [key in DeviceType]: IDeathStarData
}

export const hyperSpaceStart = [[1050, 200, -3000], 200]

export const deathStar: DeathStarAdaptiveDataType = {
    mobile: {
        journey: [[[100, 200, -1500], 0.01], [[0, -100, 0]]],
        rateOfYRotation: 0.002,
        jumpDelay: 1500,
    },
    tablet: {
        journey: [[[250, 200, -1500], 0.01], [[0, -100, 0]]],
        rateOfYRotation: 0.002,
        jumpDelay: 1500,
    },
    laptop: {
        journey: [[[300, 100, -1500], 0.01], [[200, 50, -1400]]],
        rateOfYRotation: 0.002,
        jumpDelay: 1500,
    },
    desktop: {
        journey: [[[500, 50, -1500], 0.01], [[200, 50, -1400]]],
        rateOfYRotation: 0.002,
        jumpDelay: 1500,
    },
    desktop4K: {
        journey: [[[500, 50, -1500], 0.01], [[200, 50, -1400]]],
        rateOfYRotation: 0.002,
        jumpDelay: 1500,
    },
}
