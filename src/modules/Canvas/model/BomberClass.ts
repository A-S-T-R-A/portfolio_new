import { PI } from "../lib/math/basics"
import { Journey } from "../types/types"
import { ShipClass } from "./ShipClass"

export class BomberClass extends ShipClass {
    constructor(journey: Journey) {
        const inertia = 0.08
        const rateOfTurn = 0.001
        const maxSpeed = 6
        const turnDeceleration = 0.8
        const rateOfTurningList = 0.02 //positive
        const rateOfStabilizingList = 0.005 //positive
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
