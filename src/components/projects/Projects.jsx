import { BsLockFill } from 'react-icons/bs';
import airbnb from '../../assets/airbnb.png';
import pearlsCollections from '../../assets/pearlsCollections.PNG';
import carRental from '../../assets/thamani-cars.png';
import './projects.css';

const data = [
    {
        id: 1,
        image: carRental,
        title: 'Thamani Cars',
        description:
            'A car-rental marketplace where users browse vehicles, book by date, and pay securely online with live availability and host image management.',
        highlights: [
            'Secure Stripe payments',
            'Cloudinary image uploads',
            'React Query server-state caching',
        ],
        github: 'https://github.com/Buyaki01/carrental-mern',
        demo: 'https://thamani-cars.vercel.app',
        isPrivate: true,
        languages: [
            'React',
            'Redux Toolkit',
            'React Query',
            'Node.js / Express',
            'MongoDB',
            'Stripe',
        ],
    },
    {
        id: 2,
        image: airbnb,
        title: 'Thamani Stays',
        description:
            'A full-stack airbnb-booking platform where hosts list properties and guests search, book by date, and pay online.',
        highlights: [
            'Secure Stripe checkout',
            'Date-based availability & booking',
            'Authenticated host & guest accounts',
        ],
        github: 'https://github.com/Buyaki01/react-redux-airbnb-client',
        demo: 'https://thamani-stays.vercel.app',
        isPrivate: true,
        languages: [
            'React',
            'Redux Toolkit',
            'Node.js / Express',
            'MongoDB',
            'Stripe',
        ],
    },
    {
        id: 3,
        image: pearlsCollections,
        title: 'Pearls Collections',
        description:
            'An e-commerce store with a product catalog, cart, authenticated user accounts, and secure checkout, built on Next.js.',
        highlights: [
            'Stripe checkout',
            'NextAuth sessions',
            'Cloudinary media management',
        ],
        github: 'https://github.com/Buyaki01/nextjs-online-store-shop',
        demo: 'https://pearls-thamani-collections.vercel.app',
        isPrivate: true,
        languages: ['Next.js', 'MongoDB', 'Stripe', 'NextAuth', 'Cloudinary'],
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
                        description,
                        highlights,
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
                                <h3>{title}</h3>

                                <p className="portfolio__item-description">
                                    {description}
                                </p>

                                {/* Key features */}
                                <ul className="portfolio__highlights">
                                    {highlights.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>

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
                                    <span
                                        className="btn-disabled portfolio__private"
                                        data-tooltip="Source code is private. This product is being prepared for commercialization"
                                        aria-label="Private repository. Source code is being prepared for commercialization"
                                    >
                                        <BsLockFill /> Private Repo
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
