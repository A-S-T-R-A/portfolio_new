import {
    planetMobile,
    planetLaptop,
    planetTablet,
    planetDesktop,
} from "shared/assets/images/background"

export type DeviceType = "mobile" | "tablet" | "laptop" | "desktop"

export type BackgroundData = {
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

export const backgroundData: BackgroundData = {
    mobile: {
        planet: {
            min: 720,
            max: 860,
            img: planetMobile,
        },
        stars: {
            min: 0,
            max: 10,
        },
    },
    tablet: {
        planet: {
            min: 720,
            max: 860,
            img: planetTablet,
        },
        stars: {
            min: 0,
            max: 10,
        },
    },
    laptop: {
        planet: {
            min: 720,
            max: 860,
            img: planetLaptop,
        },
        stars: {
            min: 0,
            max: 10,
        },
    },
    desktop: {
        planet: {
            min: 840,
            max: 860,
            img: planetDesktop,
        },
        stars: {
            min: 0,
            max: 10,
        },
    },
}
