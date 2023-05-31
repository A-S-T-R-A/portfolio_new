import { hyperSpaceStart } from "../const/deathStar"
import { Journey } from "../types/types"
import { ShipClass } from "./ShipClass"

export class DeathStarClass extends ShipClass {
    constructor(journey: Journey) {
        const inertia = 1000 //positive
        const rateOfTurn = 0.00001 //positive
        const maxSpeed = 1 //positive
        const turnDeceleration = 0.9 // percentage
        const rateOfTurningList = 0 //positive
        const rateOfStabilizingList = 0 //positive
        const maxList = 0 //radians

        const newJourney = [hyperSpaceStart, ...journey] as Journey
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
    }
}
