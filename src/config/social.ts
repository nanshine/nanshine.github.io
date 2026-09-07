import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Github",
        href: "https://github.com/nanshine",
        linkTitle: `Zhuohan Long on Github`,
        isActive: true,
    },
    {
        name: "Mail",
        href: "mailto:loongnanshine@gmail.com",
        linkTitle: `Send an email to Zhuohan Long`,
        isActive: true,
    },
    {
        name: "Blog",
        href: "https://nanshine.me/",
        linkTitle: `Zhuohan Long's Blog`,
        isActive: true,
    },
];

export const SOCIAL_ICONS: Record<string, string> = {
    Github: "Github",
    Mail: "Mail",
    Blog: "World",
    Linkedin: "LinkedIn",
    "Google Scholar": "GoogleScholar",
    ORCID: "ORCID",
    RSS: "RSS",
};
