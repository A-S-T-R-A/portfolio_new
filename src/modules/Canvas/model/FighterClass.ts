import { Journey } from "../types/types"
import { ShipClass } from "./ShipClass"

export class FighterClass extends ShipClass {
    constructor(journey: Journey) {
        const inertia = 0.05 //absolute
        const rateOfTurn = 0.008 //absolute
        const maxSpeed = 5 // absolute
        const turnDeceleration = 0.9 // percentage

        super(journey, { inertia, rateOfTurn, maxSpeed, turnDeceleration })
    }
}
