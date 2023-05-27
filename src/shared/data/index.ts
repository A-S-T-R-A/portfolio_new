import { mobile } from "./mobile"
import { tablet } from "./tablet"
import { laptop } from "./laptop"
import { desktop } from "./desktop"
import { desktop4K } from "./desktop4K"

export type DeviceType = "mobile" | "tablet" | "laptop" | "desktop" | "desktop4K"

export type BackgroundData = {
    [key in DeviceType]: {
        planet: {
            min: number
            max: number
            img: string
            imgLow: string
        }
        stars: {
            min: number
            max: number
        }
    }
}

export const backgroundData: BackgroundData = {
    mobile,
    tablet,
    laptop,
    desktop,
    desktop4K,
}
