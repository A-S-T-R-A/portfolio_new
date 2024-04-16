import { ReactElement } from "react"
import { ModalDataBlog, ModalDataShop } from "../ui/ModalData/ModalData"
import shop from "shared/assets/images/projectsSection/shop.webp"
import blog from "shared/assets/images/projectsSection/blog.webp"
import realtor from "shared/assets/images/projectsSection/realtor.webp"
import chat from "shared/assets/images/projectsSection/chat_mid.webp"

export interface IProjectData {
    id: number
    name: string
    img: string
    description: string
    technologies: string[]
    code: string | null
    demo: string | null
    ModalData?: () => ReactElement
}

export const projectsData: IProjectData[] = [
    {
        id: 3,
        name: "Real-time chat",
        img: chat,
        description: `Advanced real-time chat startup with realtime features, synchronization and communication beteen users`,
        technologies: ["React", "Redux", "TS"],
        code: null,
        demo: null,
    },
    {
        id: 4,
        name: "Real estate rental",
        img: realtor,
        description: `Real estate rental application with rental homes and for-sale properties, advanced property filtering.`,
        technologies: ["Next.js", "Redux"],
        code: null,
        demo: null,
    },

    {
        id: 1,
        name: "Astra Shop",
        img: shop,
        description: `Fullstack ecommerce application with search, sorting, filtering, multiple languages , stripe payment integration, admin panel and many more.`,
        technologies: ["React", "Redux", "TS", "SSAS"],
        code: "https://github.com/A-S-T-R-A/AstraShop_Front",
        demo: "https://astra-shop.netlify.app/",
        ModalData: ModalDataShop,
    },
    {
        id: 2,
        name: "Astra Blog",
        img: blog,
        description: `Blog application with authorization, roles, articles, filters, sorting, pagination, profile, comments, admin panel, multiple languages and many more.`,
        technologies: ["React", "Redux", "TS", "SSAS"],
        code: "https://github.com/Art1us/Astra-Blog",
        demo: "https://astra-blog.netlify.app/",
        ModalData: ModalDataBlog,
    },
    /*  {
        id: 3,
        name: "Chess",
        img: chess,
        description: `Chess application built using OOP. Included features: standard chess rules, time control, lost figures display, etc.`,
        technologies: ["React", "TS"],
        code: "https://github.com/Art1us/chess",
        demo: "https://astra-chess.netlify.app/",
    }, */
]
