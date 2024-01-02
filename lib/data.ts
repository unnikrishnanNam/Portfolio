import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import {
  FaCss3,
  FaJs,
  FaPhoenixFramework,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiPrisma,
  SiMongodb,
  SiGraphql,
  SiApollographql,
  SiExpress,
  SiDjango,
} from "react-icons/si";
import {
  TbBrandFramerMotion,
  TbBrandNextjs,
  TbBrandRedux,
} from "react-icons/tb";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

import { FaHtml5 } from "react-icons/fa";
import {
  BiLogoCss3,
  BiLogoGit,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoNetlify,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { color } from "framer-motion";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  // "HTML",
  // "CSS",
  // "JavaScript",
  // "TypeScript",
  // "React",
  // "Next.js",
  // "Node.js",
  // "Git",
  // "Tailwind",
  // "Prisma",
  // "MongoDB",
  // "Redux",
  // "GraphQL",
  // "Apollo",
  // "Express",
  // "PostgreSQL",
  // "Python",
  // "Django",
  // "Framer Motion",
  {
    name: "HTML",
    icon: React.createElement(BiLogoHtml5, { color: "#9ca3af" }),
  },
  {
    name: "CSS",
    icon: React.createElement(BiLogoCss3, { color: "#9ca3af" }),
  },
  {
    name: "JavaScript",
    icon: React.createElement(BiLogoJavascript, { color: "#9ca3af" }),
  },
  {
    name: "TypeScript",
    icon: React.createElement(BiLogoTypescript, { color: "#9ca3af" }),
  },
  {
    name: "React",
    icon: React.createElement(BiLogoReact, { color: "#9ca3af" }),
  },
  {
    name: "Next.js",
    icon: React.createElement(TbBrandNextjs, { color: "#9ca3af" }),
  },
  {
    name: "Node.js",
    icon: React.createElement(BiLogoNodejs, { color: "#9ca3af" }),
  },
  {
    name: "Git",
    icon: React.createElement(BiLogoGit, { color: "#9ca3af" }),
  },
  {
    name: "Tailwind",
    icon: React.createElement(BiLogoTailwindCss, { color: "#9ca3af" }),
  },
  {
    name: "Prisma",
    icon: React.createElement(SiPrisma, { color: "#9ca3af" }),
  },
  {
    name: "MongoDB",
    icon: React.createElement(SiMongodb, { color: "#9ca3af" }),
  },
  {
    name: "Redux",
    icon: React.createElement(TbBrandRedux, { color: "#9ca3af" }),
  },
  {
    name: "GraphQL",
    icon: React.createElement(SiGraphql, { color: "#9ca3af" }),
  },
  {
    name: "Apollo",
    icon: React.createElement(SiApollographql, { color: "#9ca3af" }),
  },
  {
    name: "Express",
    icon: React.createElement(SiExpress, { color: "#9ca3af" }),
  },
  {
    name: "PostgreSQL",
    icon: React.createElement(BiLogoPostgresql, { color: "#9ca3af" }),
  },
  {
    name: "Python",
    icon: React.createElement(FaPython, { color: "#9ca3af" }),
  },
  {
    name: "Django",
    icon: React.createElement(SiDjango, { color: "#9ca3af" }),
  },
  {
    name: "Framer Motion",
    icon: React.createElement(TbBrandFramerMotion, { color: "#9ca3af" }),
  },
] as const;
