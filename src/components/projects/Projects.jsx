import airbnb from '../../assets/airbnb.PNG';
import pearlsCollections from '../../assets/pearlsCollections.PNG';
import pearlsThamaniCare from '../../assets/pearlsThamaniCare.png';
import carRental from '../../assets/thamani-cars.png';
import './projects.css';

const data = [
    {
        id: 1,
        image: carRental,
        title: 'Car Rental',
        github: 'https://github.com/Buyaki01/carrental-mern',
        demo: 'https://thamani-cars.vercel.app',
        isPrivate: true,
        languages: [
            'React',
            'Redux Toolkit',
            'React Query',
            'Node.js',
            'Express',
            'MongoDB',
            'Stripe - for payment',
            'Cloudinary',
            'TailwindCSS',
        ],
    },
    {
        id: 2,
        image: airbnb,
        title: 'Airbnb',
        github: 'https://github.com/Buyaki01/react-redux-airbnb-client',
        demo: 'https://react-redux-airbnb-client.onrender.com',
        isPrivate: true,
        languages: [
            'React',
            'Redux Toolkit',
            'Node.js',
            'Express',
            'MongoDB',
            'Stripe Payment',
            'TailwindCSS',
        ],
    },
    {
        id: 3,
        image: pearlsCollections,
        title: 'Pearls Collections Shop',
        github: 'https://github.com/Buyaki01/nextjs-online-store-shop',
        demo: 'https://pearls-thamani-collections.vercel.app',
        isPrivate: true,
        languages: [
            'Next.js',
            'React.js',
            'JavaScript',
            'MongoDB',
            'Stripe',
            'NextAuth',
            'Cloudinary',
        ],
    },
];

export const Projects = () => {
    return (
        <section id="projects">
            <h5>My Recent Work</h5>
            <h2>Projects</h2>
            <div className="container portfolio__container">
                {data.map(
                    ({
                        id,
                        image,
                        title,
                        github,
                        demo,
                        isPrivate,
                        languages,
                    }) => (
                        <article
                            key={id}
                            className="portfolio__item flex flex-col"
                        >
                            <div className="portfolio__item-image">
                                <img src={image} alt={title} />
                            </div>

                            <div>
                                <h3 className="whitespace-nowrap">{title}</h3>

                                {/* Technologies used */}
                                <div className="portfolio__languages">
                                    {languages.map((lang, index) => (
                                        <span
                                            key={index}
                                            className="language-badge"
                                        >
                                            {lang}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="portfolio__item-cta mt-3">
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
                                    <span className="btn-disabled">
                                        Private Repository
                                    </span>
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
                    ),
                )}
            </div>
        </section>
    );
};
