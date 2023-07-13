export function getCurrentDevice(width: number) {
    switch (true) {
        case width < 481:
            return "mobile"
        case width < 769:
            return "tablet"
        case width < 1025:
            return "laptop"
        case width <= 2000:
            return "desktop"
        case width > 2000:
            return "desktop4K"
        default:
            return "desktop"
    }
}
