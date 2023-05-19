export type DeviceSize = "480" | "768" | "960" | "1200" | "1201+"

export function getCurrentDevice(width: number): DeviceSize {
    switch (true) {
        case width < 481:
            return "480"
        case width < 769:
            return "768"
        case width < 961:
            return "960"
        case width < 1200:
            return "1200"
        case width >= 1201:
            return "1201+"
        default:
            return "1201+"
    }
}
