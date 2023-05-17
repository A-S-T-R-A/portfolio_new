export class Trajectory {
    height: number
    shift: number
    offsetX: number
    trajectory: { [key: number]: number }

    constructor(height: number, shift: number, offsetX: number) {
        this.height = height
        this.shift = shift
        this.offsetX = offsetX
        this.trajectory = {}
    }

    sq = (n: number) => n ** 2
    sqrt = (n: number) => Math.sqrt(n)
    roundToNth = (number: number, n: number) => Math.round(number * 10 ** n) / 10 ** n

    buildTrajectory() {
        const { sq, sqrt, roundToNth } = this
        const r = this.height / 2
        const k = sq(r) / sq(this.shift)
        const b = -r
        const trajectory: typeof this.trajectory = {}

        for (let y = 0; y >= -this.height; y--) {
            const top = sq(r) - sq(b) - sq(y) + 2 * b * y
            const division = top / k
            const res = roundToNth(sqrt(division), 2) + this.offsetX
            trajectory[y] = res
        }

        this.trajectory = trajectory
    }

    getX(y: number): number {
        return this.trajectory[this.roundToNth(y, 0)]
    }
}
