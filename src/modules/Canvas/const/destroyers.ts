import { IShipData, Journey } from "../types/types"

interface IDestroyersData extends IShipData {
    shuttles?: { id: number; journey: Journey }[]
    jumpDelay: number
}

export const hyperSpaceStart = [[1050, 200, -3000], 200]

export const destroyers: IDestroyersData[] = [
    {
        id: 1,
        journey: [
            [[250, 0, -790], 0.2],
            [[170, -20, -569], 0.5],
            [[-10, -5, 0], 0.2],
            [[-50, 15, 150]],
        ],
        jumpDelay: 0,
        shuttles: [
            {
                id: 0.1,
                journey: [[[-70, -50, 400]]],
            },
            {
                id: 0.2,
                journey: [[[-100, -30, 400]]],
            },
        ],
    },
    {
        id: 2,
        journey: [[[240, 14, -850], 0.2], [[159, -10, -635], 0.4], [[0, -20, -200]]],
        jumpDelay: 700,
        shuttles: [
            {
                id: 0.1,
                journey: [[[10, 2, 300], 2], [[40, -10, 600]]],
            },
            {
                id: 0.2,
                journey: [[[20, 2, 250], 2], [[30, -5, 600]]],
            },
            {
                id: 0.1,
                journey: [[[10, 2, 300], 2], [[40, -10, 600]]],
            },
            {
                id: 0.2,
                journey: [[[20, 2, 250], 2], [[30, -5, 600]]],
            },
        ],
    },
    {
        id: 3,
        journey: [[[305, -3, -810], 0.2], [[223, -25.3, -569], 0.4], [[210, -44, -372]]],
        jumpDelay: 950,
        shuttles: [
            {
                id: 0.1,
                journey: [[[10, 2, 300], 2], [[40, -10, 600]]],
            },
            {
                id: 0.2,
                journey: [[[20, 2, 250], 2], [[30, -5, 600]]],
            },
            {
                id: 0.2,
                journey: [[[20, 2, 250], 2], [[30, -5, 600]]],
            },
        ],
    },
    {
        id: 4,
        journey: [[[300, 10, -890], 0.2], [[225, -9, -679], 0.5], [[75, -20, -257]]],
        jumpDelay: 1000,
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
    },
    {
        id: 5,
        journey: [[[350, 17, -865], 0.2], [[294, 2, -694], 0.4], [[110, 30, -250]]],
        jumpDelay: 1050,
        shuttles: [
            {
                id: 0.1,
                journey: [[[10, 2, 300], 2], [[40, -10, 600]]],
            },
            {
                id: 0.2,
                journey: [[[20, 2, 250], 2], [[30, -5, 600]]],
            },
            {
                id: 0.1,
                journey: [[[10, 2, 300], 2], [[40, -10, 600]]],
            },
            {
                id: 0.2,
                journey: [[[20, 2, 250], 2], [[30, -5, 600]]],
            },
        ],
    },
]
