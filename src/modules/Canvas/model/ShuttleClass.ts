import { PI } from "../lib/math/basics"
import { Journey } from "../types/types"
import { ShipClass } from "./ShipClass"

export class ShuttleClass extends ShipClass {
    constructor(journey: Journey) {
        const inertia = 0.05 //positive
        const rateOfTurn = 0.008 //positive
        const maxSpeed = 4 //positive
        const turnDeceleration = 0.9 // percentage
        const rateOfTurningList = 0.07 //positive
        const rateOfStabilizingList = 0.07 //positive
        const maxList = PI / 3 - 0.2 //radians

        super(journey, {
            inertia,
            rateOfTurn,
            maxSpeed,
            turnDeceleration,
            rateOfTurningList,
            rateOfStabilizingList,
            maxList,
        })
    }
}
