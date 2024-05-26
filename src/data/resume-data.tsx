import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
  EiyaLogo,
  WizelineLogo,
  KluLogo,
  CashAbroadLogo
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Nicholas R. Farias",
  initials: "NRF",
  location: "Mexico City, Mexico",
  locationLink: "https://www.google.com/maps/place/Mexico+City,+CDMX,+Mexico",
  about: "Software Engineer focused on building products",
  summary:
    "As a software engineer, I have helped multiple products from 0 to 1. Currently, I am focused on learning more about infrastructure and I work mostly with JavaScript, React and Python.",
  avatarUrl: "https://avatars.githubusercontent.com/u/9852856?v=4",
  personalWebsiteUrl: "https://dev.to/nicholasrafarias",
  contact: {
    email: "nicholas.ra.farias@gmail.com",
    tel: "+525626000354",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/nicholas-raphael-farias",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nicholas-raphael/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/nicholas_ra_",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "IPN",
      degree: "Bachelor's Degree in Systems engineering",
      start: "2015",
      end: "2019",
    },
  ],
  work: [
    {
      company: "CashAbroad",
      link: "https://www.cashabroad.one/",
      badges: ["startup", "fintech"],
      title: "Software Engineer",
      logo: CashAbroadLogo,
      start: "2024",
      end: "present",
      description:"Working on launching an MVP. Technologies: Vue, Node.js",
    },
    {
      company: "Klu",
      link: "https://www.klu.mx/",
      badges: ["fintech"],
      title: "Software Developer",
      logo: KluLogo,
      start: "2023",
      end: "2024",
      description: "Implemented new features and added best practices to the existing portal project. Technologies: React",
    },
    {
      company: "Wizeline",
      link: "https://www.wizeline.com/",
      badges: ["Consulting"],
      title: "Software Engineer", 
      logo: WizelineLogo,
      start: "2021",
      end: "2023",
      description: "Participated en multiple projects for clients working with multiple frameworks and libraries. Technologies: Python, React, TypeScript",
    },
    {
      company: "Eiya",
      link: "https://eiya.mx/",
      badges: ["Logistics", "startup"],
      title: "Software Developer",
      logo: EiyaLogo,
      start: "2019",
      end: "2021",
      description: "Developing first MVP, creating shopify integration, and working with external team",
    },
  ],
  skills: [
    "JavaScript",
    "Python",
    "React/Next.js/Vite",
    "Node.js",
    "GraphQL",
    "Elixir",
  ],
  projects: [
    /*{
      title: "---",
      techStack: [
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
      ],
      description: "--",
      logo: ImageImport,
      link: {
        label: "--",
        href: "--"",
      },
    },*/
  ],
} as const;
