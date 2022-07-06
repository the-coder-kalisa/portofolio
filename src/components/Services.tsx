import React from "react";
import { useSelector } from "react-redux";
import { State, transition } from "../store";

const Services: React.FC = () => {
  const mode = useSelector<State>((state) => state.mode);
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
  }
  const knowledge: Array<knowledge> = [
    {
      type: "Web developement",
      categorie: [
        {
          type: "Frontend",
          languages: [
            {
              name: "CSS",
              frameworksAndLibraries: ["Tailwindcss", "Bootstrap", "Sass", ""],
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
      categorie: [
        { type: "Relational", languages: [{ name: "Mysql" }] },
        { type: "Non-relational", languages: [{ name: "Mongodb" }] },
      ],
    },
    {
      type: "Mobile Development",
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
      categorie: [
        { languages: ["C", "C++", "C#", "R", "Python", "Ruby", "Rust"] },
      ],
    },
  ];
  console.log(knowledge);
  return (
    <div className={`${mode && "text-white"} ${transition}`}>
      <div></div>
      <div></div>
    </div>
  );
};
export default Services;
