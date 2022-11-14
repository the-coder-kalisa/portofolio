import Web from "./images/f.jpg";
import Phone from "./images/s.jpg";
import Data from "./images/d.jpg";
import desk from "./images/l.jpg";
import ai from "./images/a.jpg";
export interface categorie {
  type?: string;
  languages?: Array<language>;
}
interface language {
  name: string;
  frameworksAndLibraries?: Array<string>;
}
interface knowledge {
  type: string;
  categorie: categorie[];
  desc: string;
  image: string;
}
export const knowledge: Array<knowledge> = [
  {
    type: "Web developement",
    image: Web,
    desc: "Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.",
    categorie: [
      {
        type: "Frontend",
        languages: [
          {
            name: "CSS",
            frameworksAndLibraries: ["Tailwindcss", "Bootstrap", "Sass"],
          },
          {
            name: "Javascript And Typescript",
            frameworksAndLibraries: [
              "React",
              "AngularJs",
              "VueJs",
              "NextJs",
              "Material UI",
            ],
          },
          {
            name: "PHP",
            frameworksAndLibraries: ["Laravel", "CodeIgnitor"],
          },
          {
            name: "Python",
            frameworksAndLibraries: ["Django", "Flask"],
          },
          {
            name: "Ruby",
            frameworksAndLibraries: ["Ruby on Rails"],
          },
          {
            name: "Go lang",
            frameworksAndLibraries: ["Gin"],
          },
        ],
      },
      {
        type: "Backend",
        languages: [
          {
            name: "Javascript and Typescript",
            frameworksAndLibraries: ["NodeJs", "NestJs"],
          },
          { name: "Java", frameworksAndLibraries: ["Spring Boot"] },
          { name: "Go lang", frameworksAndLibraries: ["Gin"] },
          { name: "Php" },
        ],
      },
    ],
  },
  {
    type: "Database Management",
    image: Data,
    desc: "Database management refers to the actions a business takes to manipulate and control data to meet necessary conditions throughout the entire data lifecycle.",
    categorie: [
      {
        type: "Relational",
        languages: [
          { name: "Mysql" },
          { name: "Sql" },
          { name: "MariaDb" },
          { name: "Graphic Sql" },
        ],
      },
      { type: "Non-relational", languages: [{ name: "Mongodb" }] },
    ],
  },
  {
    type: "Mobile Development",
    image: Phone,
    desc: "Mobile application development is the set of processes and procedures involved in writing software for small, wireless computing devices, such as smartphones and other hand-held devices.",
    categorie: [
      {
        type: "ios",
        languages: [
          { name: "Swift" },
          { name: "Javascript", frameworksAndLibraries: ["React Native"] },
          { name: "Java", frameworksAndLibraries: ["Kotlin"] },
          { name: "Dart", frameworksAndLibraries: ["Flutter"] },
        ],
      },
      {
        type: "Android",
        languages: [
          { name: "Javascript", frameworksAndLibraries: ["React Native"] },
          { name: "Java", frameworksAndLibraries: ["Kotlin"] },
          { name: "Dart", frameworksAndLibraries: ["Flutter"] },
        ],
      },
    ],
  },
  {
    type: "Desktop Development",
    image: desk,
    desc: "Desktop application development is aimed at building desktop software for Mac, Windows, and Linux or upgrading existing desktop apps with new functionality.",
    categorie: [
      {
        type: "window",
        languages: [
          {
            name: "Javascript",
            frameworksAndLibraries: ["Electronjs", "React Native"],
          },
          { name: "Dart", frameworksAndLibraries: ["Flutter"] },
        ],
      },
      {
        type: "linux",
        languages: [
          { name: "Javascript", frameworksAndLibraries: ["Electronjs"] },
          { name: "Dart", frameworksAndLibraries: ["Flutter"] },
        ],
      },
    ],
  },
  {
    type: "Computer intensive programming",
    image: ai,
    desc: "I have some brilliant skills in alogarithm, machine learning, artifical intelligence and embedded programminng",
    categorie: [
      {
        type: "computer intensive programming",
        languages: [
          { name: "C" },
          { name: "C++" },
          { name: "C#" },
          { name: "R" },
          { name: "Python" },
          { name: "Ruby" },
          { name: "Rust" },
        ],
      },
    ],
  },
];
type Link = { name: string; link?: string; type: boolean };
interface Footer {
  title: string;
  links: Link[];
}
export const FooterData: Footer[] = [
  {
    title: "Explore",
    links: [
      { name: "Home", type: true },
      { name: "Services", type: true },
      { name: "Solution", type: true },
      { name: "About Me", type: true },
    ],
  },
  {
    title: "Follow",
    links: [
      {
        name: "Facebook",
        link: "https://web.facebook.com/nikalisa.45?_rdc=1&_rdr",
        type: false,
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/ni_kalisa/",
        type: false,
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/kalisa-ineza-giovanni-63a406231/",
        type: false,
      },
      {
        name: "Github",
        link: "https://github.com/the-coder-kalisa",
        type: false,
      },
    ],
  },
  {
    title: "New Business",
    links: [
      {
        name: "gthecoderkalisaineza@gmail.com",
        type: false,
        link: "mailto:gthecoderkalisaineza@gmail.com",
      },
      { name: "+250785964206", type: false, link: "tel:+250785964206" },
    ],
  },
];
interface Career {
  name: string;
  link?: string;
}
export const career: Career[] = [
  { name: "Levitra", link: "https://levitra.vercel.app/landing/primarycare" },
  { name: "Ganira250", link: "https://www.ganira250.com" },
  { name: "Tweep", link: "https://mctweep.vercel.app" },
  { name: "metaflix", link: "https://metaflix.vercel.app" },
  { name: "Transparent" },
  { name: "Kaukka" },
];

export const transition = "transition-all duration-1000";
export interface Message {
  email: string;
  name: string;
  message: string;
}
