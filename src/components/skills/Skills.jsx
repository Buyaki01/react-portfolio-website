import "./skills.css";
import tailwindCssLogo from "../../assets/Tailwind-CSS.png";
import mongodbLogo from "../../assets/mongodbLogo.png";
import nextjslogo from "../../assets/nextjslogo.png";
import reactLogo from "../../assets/reactLogo.png";
import nodejsLogo from "../../assets/nodejs-logo.png";
import expressLogo from "../../assets/expressLogo.png";
import postgresql from "../../assets/postgresql.png";
import javascriptLogo from "../../assets/javascriptlogo.png";
import angularjsLogo from "../../assets/angularjs.jpg";

const data = [
  {
    image: nextjslogo,
    name: "NextJs",
  },
  {
    image: reactLogo,
    name: "React",
  },
  {
    image: javascriptLogo,
    name: "JavaScript",
  },
  {
    image: nodejsLogo,
    name: "NodeJs",
  },
  {
    image: angularjsLogo,
    name: "Angular",
  },
  {
    image: expressLogo,
    name: "ExpressJs",
  },
  {
    image: tailwindCssLogo,
    name: "TailwindCss",
  },
  {
    image: mongodbLogo,
    name: "mongoDB",
  },
  {
    image: postgresql,
    name: "postgresql",
  },
];

export const Skills = () => {
  return (
    <section id="skills">
      <h5>What I Work With</h5>
      <h2>Skills</h2>

      <div className="container skills__container">
        {data.map(({ image, name }, index) => (
          <article key={index} className="skill__card">
            <div className="skill__image">
              <img src={image} alt={name} className="object-cover w-12 h-12" />
            </div>
            <h5 className="skill__name whitespace-nowrap">{name}</h5>
          </article>
        ))}
      </div>
    </section>
  );
};
