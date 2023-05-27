import { IShipData, Journey } from "../types/types"

interface IDestroyersData extends IShipData {
    shuttles?: { id: number; journey: Journey }[]
    jumpDelay: number
}

export const hyperSpaceStart = [[1050, 200, -3000], 200]

export const destroyers: IDestroyersData[] = [
    /* {
        id: 0,
        journey: [[[200, 0, -800], 1], [[0, 0, 0]]],
        shuttles: [
            {
                id: 0.1,
                journey: [[[10, 2, 300], 2], [[40, -10, 600]]],
            },
            {
                id: 0.2,
                journey: [[[20, 2, 250], 2], [[30, -5, 600]]],
            },
        ],
    }, */
    {
        id: 1,
        journey: [[[250, 0, -790], 0], [[10, 0, 10]]],
        jumpDelay: 0,
    },
    {
        id: 2,
        journey: [[[240, 14, -850], 0], [[20, 25, 500]]],
        jumpDelay: 700,
    },
    {
        id: 3,
        journey: [[[305, -3, -810], 0], [[12, -5, 500]]],
        jumpDelay: 950,
    },
    {
        id: 4,
        journey: [[[300, 10, -890], 0], [[-40, 10, 500]]],
        jumpDelay: 1000,
    },
    {
        id: 5,
        journey: [[[350, 17, -865], 0], [[-30, 20, 500]]],
        jumpDelay: 1050,
    },
]

/* shuttles: [
            {
                id: 0.1,
                journey: [[[10, 2, 300], 2], [[40, -10, 600]]],
            },
            {
                id: 0.2,
                journey: [[[20, 2, 250], 2], [[30, -5, 600]]],
            },
        ], */
