import { Journey } from "../types/types"
import { ShipClass } from "./ShipClass"

export class BomberClass extends ShipClass {
    constructor(journey: Journey) {
        const inertia = 0.08
        const rateOfTurn = 0.001
        const maxSpeed = 6
        const turnDeceleration = 0.8

        super(journey, { inertia, rateOfTurn, maxSpeed, turnDeceleration })
    }
}
