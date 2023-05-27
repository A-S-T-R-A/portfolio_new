import { mobile } from "./mobile"
import { tablet } from "./tablet"
import { laptop } from "./laptop"
import { desktop } from "./desktop"
import { desktop4K } from "./desktop4K"

export type DeviceType = "mobile" | "tablet" | "laptop" | "desktop" | "desktop4K"

export type DataType = {
    [key in DeviceType]: {
        planet: {
            min: number
            max: number
            img: string
        }
        stars: {
            min: number
            max: number
        }
    }
}

export const data: DataType = {
    mobile,
    tablet,
    laptop,
    desktop,
    desktop4K,
}
