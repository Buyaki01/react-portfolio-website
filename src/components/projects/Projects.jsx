import "./projects.css";
import pearlsCollections from "../../assets/pearlsCollections.PNG";
import airbnb from "../../assets/airbnb.PNG";
import pearlsThamaniCare from "../../assets/pearlsThamaniCare.png";

const data = [
  {
    id: 1,
    image: pearlsCollections,
    title: "Pearls Collections Shop",
    github: "https://github.com/Buyaki01/nextjs-online-store-shop",
    demo: "https://pearls-thamani-collections.vercel.app",
    isPrivate: true,
  },
  {
    id: 2,
    image: airbnb,
    title: "Airbnb",
    github: "https://github.com/Buyaki01/react-redux-airbnb-client",
    demo: "https://react-redux-airbnb-client.onrender.com",
    isPrivate: true,
  },
  {
    id: 3,
    image: pearlsThamaniCare,
    title: "Pearls Thamani Care",
    github: "https://github.com/Buyaki01/pearls-thamani-care",
    demo: "https://pearls-thamani-care.vercel.app/home",
    isPrivate: true,
  },
];

export const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, isPrivate }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3 className="whitespace-nowrap">{title}</h3>
              <div className="portfolio__item-cta">
                {!isPrivate ? (
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                ) : (
                  <span className="btn-disabled">Private Repository</span>
                )}
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
