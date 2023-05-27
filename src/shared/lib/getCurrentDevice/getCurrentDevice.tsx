export function getCurrentDevice(width: number) {
    switch (true) {
        case width < 481:
            return "mobile"
        case width < 768:
            return "tablet"
        case width < 1024:
            return "laptop"
        case width < 1440:
            return "desktop"
        case width < 4000:
            return "desktop4K"
        default:
            return "desktop"
    }
}
