import Web from "./images/f.jpg";
import Phone from "./images/s.jpg";
import Data from "./images/d.jpg";
import desk from "./images/l.jpg";
import ai from "./images/a.jpg";
interface categorie {
  type?: string;
  languages?: Array<language | string>;
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
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fugit cumque culpa, natus quae id minus nostrum error sint corporis.",
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
              "NestJs",
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
          { name: "Javascript", frameworksAndLibraries: ["NodeJs"] },
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
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fugit cumque culpa, natus quae id minus nostrum error sint corporis.",
    categorie: [
      { type: "Relational", languages: [{ name: "Mysql" }] },
      { type: "Non-relational", languages: [{ name: "Mongodb" }] },
    ],
  },
  {
    type: "Mobile Development",
    image: Phone,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fugit cumque culpa, natus quae id minus nostrum error sint corporis.",
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
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fugit cumque culpa, natus quae id minus nostrum error sint corporis.",
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
    type: "Alogarithm, Machine learning, Artificial Intelligence and Embedded programming",
    image: ai,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fugit cumque culpa, natus quae id minus nostrum error sint corporis.",
    categorie: [
      {
        languages: ["C", "C++", "Matlab", "C#", "R", "Python", "Ruby", "Rust"],
      },
    ],
  },
];
