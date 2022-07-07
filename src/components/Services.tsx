import { Button } from "@mui/material";
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
    desc: string;
    image: string;
  }
  const knowledge: Array<knowledge> = [
    {
      type: "Web developement",
      image: "../images/f.jpg",
      desc: "Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience. Me as Web developer, or 'dev', use variety of coding languages. on both backend and frontend",
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
      image: "../images/d.jpg",
      desc: "Database management refers to the actions a business takes to manipulate and control data to meet necessary conditions throughout the entire data lifecycle.",
      categorie: [
        { type: "Relational", languages: [{ name: "Mysql" }] },
        { type: "Non-relational", languages: [{ name: "Mongodb" }] },
      ],
    },
    {
      type: "Mobile Development",
      image: "../images/s.jpg",
      desc: "Mobile application development is the set of processes and procedures involved in writing software for small, wireless computing devices, such as smartphones and other hand-held devices. Like web application development, mobile application development has its roots in more traditional software development.",
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
      image: "../images/l.jpg",
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
      type: "Alogarithm, Machine learning, Artificial Intelligence and Embedded programming",
      image: "../images/a.jpg",
      desc: "I have some brilliant skills in alogarithm, machine learning, artifical intelligence and embedded programminng",
      categorie: [
        {
          languages: [
            "C",
            "C++",
            "Matlab",
            "C#",
            "R",
            "Python",
            "Ruby",
            "Rust",
          ],
        },
      ],
    },
  ];
  console.log(knowledge);
  return (
    <div
      className={`${
        mode && "text-white"
      } flex items-center gap-5 justify-center ${transition}`}
    >
      <div>
        {knowledge.map(({ type, categorie, desc }, index) => (
          <div key={index}>
            <div></div>
            <div>
              <h1>{type}</h1>
              <div>{desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div>
          <div>My awesome</div>
          <div>services</div>
        </div>
        <div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
            reprehenderit dolorem voluptatem doloremque excepturi accusamus,
            reiciendis non tempore assumenda mollitia perferendis dolore
            voluptatibus architecto totam corporis autem alias. Consectetur,
            voluptatibus.
          </div>
          <Button variant="contained">Download CV</Button>
        </div>
      </div>
    </div>
  );
};
export default Services;
