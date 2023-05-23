import { atan2, sqrt } from "modules/Canvas/lib/math/basics"
import { Journey, Position, Rotation, Speed, Vector } from "modules/Canvas/types/types"
import { Vector3 } from "three"

export class Ship {
    private journey: Journey
    private waypoint: number
    private position: Position = [0, 0, 0]
    private target: Position = [0, 0, 0]
    private speed: Speed = 0
    private rotation: Rotation = [0, 0, 0]
    private vector: Vector = [0, 0, 0]
    private direction: Vector = [0, 0, 0]

    constructor(journey: Journey) {
        this.journey = journey
        this.waypoint = 1
        this.init()
    }

    init() {
        this.setCurrentWaypoint()
        const { position, target } = this
        this.setVector(position, target)
        this.calculateVector()
        this.setRotation()
    }

    private setCurrentWaypoint() {
        this.position = this.journey[this.waypoint - 1][0]
        this.target = this.journey[this.waypoint][0]
        this.speed = this.journey[this.waypoint - 1][1] || 0
    }

    private setVector(a: Position, b: Position) {
        const [x1, y1, z1] = a
        const [x2, y2, z2] = b
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
        this.rotation = [0, -azimuth, elevation]
    }

    private nextWaypoint() {
        if (this.journey[this.waypoint][1]) {
            this.waypoint++
            this.init()
        }
    }

    public move(position: Vector3): Position {
        const { x: currentX, y: currentY, z: currentZ } = position

        const [dx, dy, dz] = this.direction
        const [lx, ly, lz] = this.target
        const [vx, vy, vz] = this.vector

        const reachedX = vx > 0 ? currentX > lx : currentX < lx
        const reachedY = vy > 0 ? currentY > ly : currentY < ly
        const reachedZ = vz > 0 ? currentZ > lz : currentZ < lz

        const x = reachedX ? currentX : dx * this.speed + currentX
        const y = reachedY ? currentY : dy * this.speed + currentY
        const z = reachedZ ? currentZ : dz * this.speed + currentZ

        if (reachedX && reachedY && reachedZ) {
            this.nextWaypoint()
        }

        return [x, y, z]
    }

    public getInitialData() {
        return { position: this.position, rotation: this.rotation }
    }
}
