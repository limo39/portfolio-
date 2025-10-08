import { RxHome, RxPerson, RxDashboard, RxClipboard, RxReader } from "react-icons/rx";

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Azure",
    Image: "/azure.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "Flutter",
    Image: "/flutter.png",
    width: 80,
    height: 80,
  },
  {
    name: "Django",
    Image: "/django.png",
    width: 80,
    height: 80,
  },

  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 14",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "Go",
    Image: "/go.png",
    width: 100,
    height: 100,
  },
  {
    name: "Stripe Payment",
    Image: "/stripe.webp",
    width: 80,
    height: 80,
  },
  {
    name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
];

export const Socials = [
  {
    name: "Instagram",
    src: "/instagram.svg",
    link: "https://www.instagram.com/_limo.39/",
  },
  {
    name: "Github",
    src: "/github.png",
    link: "https://github.com/limo39/",
  },
  {
    name: "X",
    src: "/x.png",
    link: "https://twitter.com/limo_39",
  },
  {
    name: "Linkedin",
    src: "/linkedin.png",
    link: "https://www.linkedin.com/in/limo-kiprono/",
  },
];
export const Projects = [
  {
    title: "Chess App",
    text: "A fully functional chess game built with Flutter featuring custom game logic, beautiful UI, and smooth animations.",
    src: "/chess.png",
    githubUrl: "https://github.com/limo39/chess-flutter",
    technologies: ["Flutter", "Dart", "Game Development"],
    status: "Completed"
  },
  {
    title: "UniverStudy Website",
    text: "A comprehensive social learning platform built with Django, featuring user authentication, course management, and interactive discussions.",
    src: "/universtudy.png",
    githubUrl: "https://github.com/limo39/universtudy-website",
    technologies: ["Django", "Python", "PostgreSQL", "Bootstrap"],
    status: "Completed"
  },
  {
    title: "Swahili Programming Language",
    text: "An innovative programming language written in Go that uses Swahili syntax, making coding more accessible to Swahili speakers across East Africa.",
    src: "/swahili.png",
    githubUrl: "https://github.com/limo39/swahili-lang",
    technologies: ["Go", "Compiler Design", "Language Development"],
    status: "In Progress"
  },
  {
    title: "Stoo E-commerce Platform",
    text: "A full-featured e-commerce platform built with Django, featuring product management, payment integration, and order tracking.",
    src: "/stoo.png",
    githubUrl: "https://github.com/limo39/stoo-ecommerce",
    technologies: ["Django", "Python", "Stripe", "PostgreSQL"],
    status: "Completed"
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/blog",
    icon: RxReader,
    link: "/blog",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
  },
];
