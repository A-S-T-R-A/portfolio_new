import { PI } from "../lib/math/basics"
import { Journey } from "../types/types"
import { ShipClass } from "./ShipClass"

export class DestroyerClass extends ShipClass {
    constructor(journey: Journey) {
        const inertia = 0.1
        const rateOfTurn = 0.003
        const maxSpeed = 4
        const turnDeceleration = 0.7
        const rateOfTurningList = 0.007 //positive
        const rateOfStabilizingList = 0.005 //positive
        const maxList = PI / 4 - 0.2 //radians

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
