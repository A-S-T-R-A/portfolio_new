import { Journey } from "../types/types"
import { ShipClass } from "./ShipClass"

export class DestroyerClass extends ShipClass {
    constructor(journey: Journey) {
        const inertia = 0.1
        const rateOfTurn = 0.003
        const maxSpeed = 4
        const turnDeceleration = 0.7

        super(journey, { inertia, rateOfTurn, maxSpeed, turnDeceleration })
    }
}
