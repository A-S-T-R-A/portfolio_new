import { IShipData } from "../types/types"

export const fightersSquadrons: IShipData[] = [
    {
        id: 1,
        type: "fighters",
        journey: [[[250, -5, -790], 2], [[0, 0, 350], 1], [[-50, -10, 500]]],
    },
    {
        id: 2,
        type: "fighters",
        journey: [[[240, 0, -850], 1.8], [[-5, 5, 400]]],
    },
    {
        id: 3,
        type: "bombers",
        journey: [[[300, 5, -890], 1.5], [[-5, -5, 400], 2], [[10, -20, 500]]],
    },
]
