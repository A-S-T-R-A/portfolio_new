import { PI } from "../lib/math/basics"
import { Journey } from "../types/types"
import { ShipClass } from "./ShipClass"

export class FighterClass extends ShipClass {
    constructor(journey: Journey) {
        const inertia = 5 //positive
        const rateOfTurn = 0.008 //positive
        const maxSpeed = 8 //positive
        const turnDeceleration = 0.9 // percentage
        const rateOfTurningList = 0.07 //positive
        const rateOfStabilizingList = 0.005 //positive
        const maxList = PI / 2 - 0.2 //radians

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
