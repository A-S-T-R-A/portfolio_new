import { ReactElement } from "react"
import mockImg from "shared/assets/images/projectsSection/mockProject.png"
import { ModalDataBlog, ModalDataShop } from "../ui/ModalData/ModalData"

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
        name: "Project 1",
        img: mockImg,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
        technologies: ["React", "React", "React"],
        code: "https://github.com/A-S-T-R-A/AstraShop_Front/tree/main",
        demo: "https://astra-shop.netlify.app/",
        ModalData: ModalDataShop,
    },
    {
        id: 2,
        name: "Project 2",
        img: mockImg,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
        technologies: ["React", "React", "React"],
        code: "https://github.com/A-S-T-R-A/AstraShop_Front/tree/main",
        demo: "https://astra-shop.netlify.app/",
        ModalData: ModalDataBlog,
    },
    {
        id: 3,
        name: "Project 3",
        img: mockImg,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
        technologies: ["React", "React", "React"],
        code: "https://github.com/A-S-T-R-A/AstraShop_Front/tree/main",
        demo: "https://astra-shop.netlify.app/",
    },
]
