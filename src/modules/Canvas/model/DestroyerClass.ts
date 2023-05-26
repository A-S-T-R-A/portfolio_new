import { PI } from "../lib/math/basics"
import { IDestroyersData, IShipData, Journey, Position } from "../types/types"
import { ShipClass } from "./ShipClass"

export class DestroyerClass extends ShipClass {
    private shuttles: IShipData[] | null

    constructor(data: IDestroyersData) {
        const inertia = 0.1
        const rateOfTurn = 0.003
        const maxSpeed = 4
        const turnDeceleration = 0.7
        const rateOfTurningList = 0.007 //positive
        const rateOfStabilizingList = 0.005 //positive
        const maxList = PI / 4 - 0.2 //radians

        const { journey, shuttles } = data

        super(journey, {
            inertia,
            rateOfTurn,
            maxSpeed,
            turnDeceleration,
            rateOfTurningList,
            rateOfStabilizingList,
            maxList,
        })

        this.shuttles = shuttles || null
    }

    public generateShuttlesJourneys(currentPosition: Position): Journey[] | null {
        const [x0, y0, z0] = currentPosition
        const journeysArray = this.shuttles?.map(item => [
            [[x0, y0, z0], 0.3],
            [[x0, y0 - 10, z0], 2],
            ...item.journey,
        ])

        return journeysArray as Journey[]
    }
}
