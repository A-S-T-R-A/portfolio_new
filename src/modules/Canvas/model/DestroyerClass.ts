import { IDestroyersData, IShipData, Journey, Position } from "../types/types"
import { ShipClass } from "./ShipClass"

export class DestroyerClass extends ShipClass {
    private shuttles: IShipData[] | null

    constructor(data: IDestroyersData) {
        const inertia = 500 // the more the harder to gain/lose speed
        const rateOfTurn = 0.003
        const maxSpeed = 4
        const turnDeceleration = 0.7
        const rateOfTurningList = 0.007 //positive
        const rateOfStabilizingList = 0.004 //positive
        const maxList = 0.4 //radians

        const { journey, shuttles } = data
        const newJourney = [[[0, 0, -3000], 500], ...journey] as Journey

        const isJumpFromHyperSpace = true

        super(
            newJourney,
            {
                inertia,
                rateOfTurn,
                maxSpeed,
                turnDeceleration,
                rateOfTurningList,
                rateOfStabilizingList,
                maxList,
            },
            isJumpFromHyperSpace
        )

        this.shuttles = shuttles || null
    }

    public generateShuttlesJourneys(currentPosition: Position): Journey[] | null {
        const [x0, y0, z0] = currentPosition
        const journeysArray = this.shuttles?.map(item => [
            [[x0, y0 - 3, z0], 0.2],
            [[x0, y0 - 10, z0], 2],
            ...item.journey,
        ])

        return journeysArray as Journey[]
    }
}
