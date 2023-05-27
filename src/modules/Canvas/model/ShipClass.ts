import { atan2, roundToNth, sqrt } from "modules/Canvas/lib/math/basics"
import {
    IShipsManeuvering,
    Journey,
    Position,
    Rotation,
    Speed,
    Vector,
} from "modules/Canvas/types/types"
import { Vector3 } from "three"

export class ShipClass {
    private isInited = false
    private isTurning = false
    public isReachedEnd = false

    private journey: Journey
    private waypoint: number

    private turnDeceleration: number
    private inertia: number
    private rateOfTurn: number
    private maxSpeed: Speed
    private rateOfTurningList: number
    private rateOfStabilizingList: number
    private maxList: number
    private isJumpFromHyperSpace = false

    private position: Position = [0, 0, 0]
    private target: Position = [0, 0, 0]
    private goalSpeed: Speed = 0
    private goalRotation: Rotation = [0, 0, 0]
    private vector: Vector = [0, 0, 0]
    private direction: Vector = [0, 0, 0]
    private list = 0
    public rotation: Rotation = [0, 0, 0]
    public speed: Speed = 0.5

    constructor(
        journey: Journey,
        shipsManeuvering: IShipsManeuvering,
        isJumpFromHyperSpace?: boolean
    ) {
        this.journey = journey
        this.waypoint = 1
        this.isJumpFromHyperSpace = isJumpFromHyperSpace || false

        const {
            inertia,
            rateOfTurn,
            maxSpeed,
            turnDeceleration,
            rateOfTurningList,
            rateOfStabilizingList,
            maxList,
        } = shipsManeuvering
        this.inertia = inertia
        this.turnDeceleration = turnDeceleration
        this.rateOfTurn = rateOfTurn
        this.maxSpeed = maxSpeed
        this.rateOfTurningList = rateOfTurningList
        this.rateOfStabilizingList = rateOfStabilizingList
        this.maxList = maxList
        this.init()
    }

    init() {
        this.setCurrentWaypoint()
        this.setVector()
        this.calculateVector()
        this.setRotation()
        this.isInited = true
    }

    private setCurrentWaypoint() {
        this.position = this.journey[this.waypoint - 1][0]
        this.target = this.journey[this.waypoint][0]
        const goalSpeed = this.journey[this.waypoint - 1][1] || 0
        if (!this.isInited) {
            const maxSpeed = this.isJumpFromHyperSpace ? 3000 : this.maxSpeed
            this.goalSpeed = goalSpeed > maxSpeed ? maxSpeed : goalSpeed
        }
    }

    private setVector() {
        const [x1, y1, z1] = this.position
        const [x2, y2, z2] = this.target
        this.vector = [x2 - x1, y2 - y1, z2 - z1]
    }

    private calculateVector() {
        const [x, y, z] = this.vector
        const magnitude = Math.sqrt(x ** 2 + y ** 2 + z ** 2)
        const direction: Vector = [x / magnitude, y / magnitude, z / magnitude]
        this.direction = direction
    }

    private setRotation() {
        const [xn, yn, zn] = this.direction
        const azimuth = atan2(zn, xn)
        const elevation = atan2(yn, sqrt(xn ** 2 + zn ** 2))
        if (!this.isInited) {
            this.rotation = [0, -azimuth, elevation]
            this.goalRotation = this.rotation
        } else {
            this.goalRotation = [0, -azimuth, elevation]
        }
    }

    private nextWaypoint() {
        if (this.journey[this.waypoint][1]) {
            this.goalSpeed = this.journey[this.waypoint][1] || 0
            this.isTurning = true
            this.waypoint++
            this.init()
        } else {
            this.goalSpeed = 0
        }
    }

    private calculateCurrentSpeed(): Speed {
        const goalSpeed = this.isTurning ? this.goalSpeed * this.turnDeceleration : this.goalSpeed
        const inertia = this.isJumpFromHyperSpace ? 0.01 : this.inertia

        switch (true) {
            case goalSpeed === this.speed:
                break
            case goalSpeed > this.speed:
                if (goalSpeed - this.speed > 1 / inertia) {
                    this.speed = roundToNth(this.speed + 1 / inertia, 4)
                } else {
                    this.speed = goalSpeed
                }
                break
            case goalSpeed < this.speed:
                if (this.speed - goalSpeed > 1 / inertia) {
                    this.speed = roundToNth(this.speed - 1 / inertia, 4)
                } else {
                    this.speed = goalSpeed
                }
                break
            default:
                break
        }

        if (this.speed === 0) {
            this.isReachedEnd = true
        }

        return this.speed
    }

    private calculateCurrentRotation(): Rotation | null {
        const [x1, y1, z1] = this.rotation
        const [x2, y2, z2] = this.goalRotation

        if (x1 === x2 && y1 === y2 && z1 === z2 && this.list === 0) {
            this.isTurning = false
            return null
        }

        let x = x1
        let y = y1
        let z = z1

        if (x2 - x1 > 0) {
            x = x2 - x1 > this.rateOfTurn ? x1 + this.rateOfTurn : x2
        } else if (x2 - x1 < 0) {
            x = x2 - x1 < -this.rateOfTurn ? x1 - this.rateOfTurn : x2
        }

        if (y2 - y1 > 0) {
            y = y2 - y1 > this.rateOfTurn ? y1 + this.rateOfTurn : y2
        } else if (y2 - y1 < 0) {
            y = y2 - y1 < -this.rateOfTurn ? y1 - this.rateOfTurn : y2
        }

        if (z2 - z1 > 0) {
            z = z2 - z1 > this.rateOfTurn ? z1 + this.rateOfTurn : z2
        } else if (z2 - z1 < 0) {
            z = z2 - z1 < -this.rateOfTurn ? z1 - this.rateOfTurn : z2
        }

        this.setList(y2 - y1)

        this.rotation = [x, y, z]
        return [x, y, z + this.list]
    }

    private setList(turn: number) {
        if (turn > 0) {
            this.list =
                Math.abs(this.list) < this.maxList
                    ? this.list - this.rateOfTurningList
                    : -this.maxList
        }
        if (turn < 0) {
            this.list =
                Math.abs(this.list) < this.maxList
                    ? this.list + this.rateOfTurningList
                    : this.maxList
        }
        if (turn === 0) {
            this.list =
                this.list > 0 && this.list >= this.rateOfStabilizingList
                    ? this.list - this.rateOfStabilizingList
                    : this.list < 0 && -this.list >= this.rateOfStabilizingList
                    ? this.list + this.rateOfStabilizingList
                    : 0
        }
    }

    public move(position: Vector3): { position: Position; rotation: Rotation | null } {
        const { x: currentX, y: currentY, z: currentZ } = position

        const speed = this.calculateCurrentSpeed()
        const rotation = this.calculateCurrentRotation()

        const [dx, dy, dz] = this.direction
        const [lx, ly, lz] = this.target
        const [vx, vy, vz] = this.vector

        const reachedX = vx > 0 ? currentX >= lx : currentX <= lx
        const reachedY = vy > 0 ? currentY >= ly : currentY <= ly
        const reachedZ = vz > 0 ? currentZ >= lz : currentZ <= lz

        const x = reachedX ? currentX : dx * speed + currentX
        const y = reachedY ? currentY : dy * speed + currentY
        const z = reachedZ ? currentZ : dz * speed + currentZ

        if (reachedX && reachedY && reachedZ) {
            this.position = [x, y, z]
            if (this.isJumpFromHyperSpace) {
                this.isJumpFromHyperSpace = false
                this.speed = 0.1
            }
            this.nextWaypoint()
        }

        return { position: [x, y, z], rotation }
    }

    public getData() {
        return { position: this.position, rotation: this.rotation }
    }
}
