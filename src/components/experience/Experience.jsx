import './experience.css';
import { BsBriefcase } from 'react-icons/bs';
import { MdSchool } from 'react-icons/md';

const timeline = [
    {
        id: 1,
        type: 'work',
        role: 'Frontend Software Engineer',
        org: 'Savannah Informatics',
        location: 'Nairobi, Kenya',
        period: 'Mar 2024 – Present',
        points: [
            'Built a biometric fingerprint capture system for patient identification, reducing person impersonation and curbing insurance misuse',
            "Engineered unique HealthID workflows that give each patient a single verified identity across the company's different applications, eliminating duplicate enrollments and keeping patient counts accurate",
            'Integrated patient and clinical data across systems through REST APIs and FHIR standards, enabling secure health information exchange (HIE) between EMR platforms',
            'Developed Auto Reconciliation and eTIMS workflows that streamlined provider payments and ensured compliance with KRA regulations',
        ],
        tech: [
            'Angular',
            'AngularJS',
            'Next.js',
            'TailwindCSS',
            'Jest',
            'REST APIs',
            'FHIR',
        ],
    },
    {
        id: 2,
        type: 'work',
        role: 'Software Developer',
        org: 'Equipe Technique',
        location: 'Remote',
        period: 'Sep 2022 – Dec 2022',
        points: [
            'Built a no-code e-commerce platform (Shopify-style) that lets users launch fully functional online stores without writing code',
        ],
        tech: ['React', 'JavaScript', 'Ruby on Rails'],
    },
    {
        id: 3,
        type: 'work',
        role: 'Software Developer',
        org: 'Virtual Pay',
        location: 'Nairobi, Kenya',
        period: 'May 2022 – Sep 2022',
        points: [
            'Built and optimized a Stripe-like payment gateway, improving transaction visibility and enabling secure, seamless financial operations',
        ],
        tech: ['Django', 'Python', 'Payment Gateways', 'Docker'],
    },
    {
        id: 4,
        type: 'education',
        role: 'Full Stack Web Development Program',
        org: 'Microverse',
        location: 'Remote',
        period: 'Jan 2020 – May 2022',
        points: [
            'Completed 1300+ hours of hands-on coding, mastering algorithms, data structures, and full-stack development through daily remote collaboration',
        ],
        tech: ['Ruby on Rails', 'JavaScript', 'React', 'Redux'],
    },
    {
        id: 5,
        type: 'education',
        role: 'BSc. Mathematics & Computer Science',
        org: 'Taita Taveta University',
        location: 'Kenya',
        period: '2014 – 2018',
        points: [
            'Built a strong analytical and problem-solving foundation through rigorous mathematics and computer science coursework',
        ],
        tech: [],
    },
];

export const Experience = () => {
    return (
        <section id="experience">
            <h5>My Journey</h5>
            <h2>Experience &amp; Education</h2>

            <div className="container experience__container">
                {timeline.map(
                    ({
                        id,
                        type,
                        role,
                        org,
                        location,
                        period,
                        points,
                        tech,
                    }) => (
                        <article key={id} className="experience__item">
                            <span className="experience__icon">
                                {type === 'work' ? (
                                    <BsBriefcase />
                                ) : (
                                    <MdSchool />
                                )}
                            </span>

                            <div className="experience__content">
                                <span className="experience__period">
                                    {period}
                                </span>
                                <h3>{role}</h3>
                                <h4 className="experience__org">
                                    {org} · {location}
                                </h4>

                                <ul className="experience__points">
                                    {points.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>

                                {tech.length > 0 && (
                                    <div className="experience__tech">
                                        {tech.map((item, index) => (
                                            <span
                                                key={index}
                                                className="language-badge"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </article>
                    ),
                )}
            </div>
        </section>
    );
};
