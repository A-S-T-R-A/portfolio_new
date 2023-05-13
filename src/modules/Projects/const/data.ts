import { ReactElement } from "react"
import { ModalDataBlog, ModalDataShop } from "../ui/ModalData/ModalData"
import shop from "shared/assets/images/projectsSection/shop.jpg"
import blog from "shared/assets/images/projectsSection/blog.jpg"
import chess from "shared/assets/images/projectsSection/chess.jpg"

export interface IProjectData {
    id: number
    name: string
    img: string
    description: string
    technologies: string[]
    code: string
    demo: string
    ModalData?: () => ReactElement
}

export const projectsData: IProjectData[] = [
    {
        id: 1,
        name: "Astra Shop",
        img: shop,
        description: `Fullstack ecommerce application with search, sorting, filtering, multiple languages , stripe payment integration, admin panel and many more.`,
        technologies: ["React", "Redux", "TS", "SSAS"],
        code: "https://github.com/A-S-T-R-A/AstraShop_Front/tree/main",
        demo: "https://astra-shop.netlify.app/",
        ModalData: ModalDataShop,
    },
    {
        id: 2,
        name: "Astra Blog",
        img: blog,
        description: `Blog application with authorization, roles, articles, filters, sorting, pagination, profile, comments, admin panel, multiple languages and many more.`,
        technologies: ["React", "Redux", "TS", "SSAS"],
        code: "https://github.com/A-S-T-R-A/AstraShop_Front/tree/main",
        demo: "https://astra-shop.netlify.app/",
        ModalData: ModalDataBlog,
    },
    {
        id: 3,
        name: "Chess",
        img: chess,
        description: `Chess application built using OOP. Included features: standard chess rules, time control, lost figures display, etc.`,
        technologies: ["React", "TS"],
        code: "https://github.com/A-S-T-R-A/AstraShop_Front/tree/main",
        demo: "https://astra-shop.netlify.app/",
    },
]
