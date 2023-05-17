type Position = [number, number, number]

export class Trajectory {
    height: number
    shift: number
    initialPosition: Position
    initialScale: number
    trajectory: Position[]

    constructor(height: number, shift: number, initialPosition?: Position, initialScale?: number) {
        this.height = height
        this.shift = shift
        this.trajectory = []
        this.initialPosition = initialPosition || [0, 0, 0]
        this.initialScale = initialScale || 1
        this.buildTrajectory()
    }

    sq = (n: number) => n ** 2
    sqrt = (n: number) => Math.sqrt(n)
    roundToNth = (number: number, n = 0) => Math.round(number * 10 ** n) / 10 ** n

    buildTrajectory() {
        const { sq, sqrt, roundToNth } = this
        const r = this.height / 2
        const k = sq(r) / sq(this.shift)
        const b = -r
        const trajectory: typeof this.trajectory = []
        const [initX, initY, initZ] = this.initialPosition

        for (let t = 0; t >= -this.height; t--) {
            const top = sq(r) - sq(b) - sq(t) + 2 * b * t
            const division = top / k
            const res = roundToNth(sqrt(division), 2)
            const x = res + initX
            const y = t * 0.01 + initY
            const z = 0 + initZ
            trajectory.push([x, y, z])
        }

        this.trajectory = trajectory
    }

    getCoordinates(t: number): Position {
        return this.trajectory[this.roundToNth(Math.abs(t))]
    }
    getInitialCoordinates(): Position {
        return this.initialPosition
    }
    getInitialScale(): number {
        return this.initialScale
    }
}
