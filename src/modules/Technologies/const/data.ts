import {
    jsIcon,
    reduxIcon,
    reactIcon,
    nextIcon,
    typescriptIcon,
    scssIcon,
    i18nIcon,
    jestIcon,
    storybookIcon,
    webpackIcon,
    eslintIcon,
    nodeIcon,
    muiIcon,
    tailwindIcon,
    cypressIcon,
} from "shared/assets/images/technologies"

export interface ITechnologyItem {
    id: number
    title: string
    img: string
    desc: string
}

export const technologiesData: ITechnologyItem[] = [
    {
        id: 1,
        title: "React.js",
        img: reactIcon,
        desc: "Experience with React",
    },
    {
        id: 2,
        title: "Redux",
        img: reduxIcon,
        desc: "Experience with Redux",
    },
    {
        id: 8,
        title: "SASS",
        img: scssIcon,
        desc: "Experience with SASS",
    },
    {
        id: 4,
        title: "TypeScript",
        img: typescriptIcon,
        desc: "Experience with TS",
    },
    {
        id: 3,
        title: "Next.js",
        img: nextIcon,
        desc: "Experience with Next",
    },

    {
        id: 6,
        title: "i18next",
        img: i18nIcon,
        desc: "Experience with i18next",
    },
    {
        id: 13,
        title: "Jest",
        img: jestIcon,
        desc: "Experience with Jest",
    },
    {
        id: 113,
        title: "Storybook",
        img: storybookIcon,
        desc: "Experience with Storybook",
    },

    {
        id: 213,
        title: "Mui",
        img: muiIcon,
        desc: "Experience with MUI",
    },
    {
        id: 14,
        title: "Webpack",
        img: webpackIcon,
        desc: "Experience with Webpack",
    },
    {
        id: 15,
        title: "ESLint",
        img: eslintIcon,
        desc: "Experience with ESLint",
    },
    {
        id: 115,
        title: "Tailwind",
        img: tailwindIcon,
        desc: "Experience with Tailwind",
    },
    {
        id: 10,
        title: "JavaScript",
        img: jsIcon,
        desc: "Experience with React.js",
    },
    {
        id: 11,
        title: "Cypress",
        img: cypressIcon,
        desc: "Experience with HTML",
    },
    {
        id: 12,
        title: "Node",
        img: nodeIcon,
        desc: "Experience with Node",
    },
]
