import { Trajectory } from "./Trajectory"
import { DeviceSize } from "./getCurrentDevice"

export function getTrajectoryData(device: DeviceSize, height: number): Trajectory {
    switch (device) {
        case "480":
            return new Trajectory(height, 100, [0, 20, 0], 0.4)
        case "768":
            return new Trajectory(height, 100, [0, 20, 0], 0.5)
        case "960":
            return new Trajectory(height, 100, [0, 20, 0], 0.6)
        case "1200":
            return new Trajectory(height, 100, [60, 0, 0], 0.6)
        case "1201+":
            return new Trajectory(height, 100, [400, 0, -1100], 0.5)
        default:
            return new Trajectory(height, 100, [60, 0, 0], 0.8)
    }
}
