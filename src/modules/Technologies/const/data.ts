import {
    jsIcon,
    reduxIcon,
    reactIcon,
    nextIcon,
    cssIcon,
    typescriptIcon,
    htmlIcon,
    scssIcon,
    i18nIcon,
    jestIcon,
    storybookIcon,
    lokiIcon,
    webpackIcon,
    eslintIcon,
    stylelintIcon,
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
        title: "SCSS",
        img: scssIcon,
        desc: "Experience with CSS",
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
        id: 13,
        title: "Storybook",
        img: storybookIcon,
        desc: "Experience with Storybook",
    },
    {
        id: 13,
        title: "Loki",
        img: lokiIcon,
        desc: "Experience with Loki",
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
        id: 15,
        title: "Stylelint",
        img: stylelintIcon,
        desc: "Experience with Stylelint",
    },
    {
        id: 10,
        title: "JavaScript",
        img: jsIcon,
        desc: "Experience with React.js",
    },
    {
        id: 11,
        title: "HTML",
        img: htmlIcon,
        desc: "Experience with HTML",
    },
    {
        id: 12,
        title: "CSS",
        img: cssIcon,
        desc: "Experience with CSS",
    },
]
