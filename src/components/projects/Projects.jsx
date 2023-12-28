import './projects.css'
import pearlsCollections from '../../assets/pearlsCollections.PNG'
import airbnb from '../../assets/airbnb.PNG'
import swimmingBlog from '../../assets/swimmingBlog.PNG'

const data = [
  {
    id: 1,
    image: pearlsCollections,
    title: 'Pearls Collections Online Store',
    github: 'https://github.com/Buyaki01/nextjs13-online-store-shop',
    demo: 'https://pearls-thamani-collections.vercel.app'
  },
  {
    id: 2,
    image: airbnb,
    title: 'Airbnb',
    github: 'https://github.com/Buyaki01/react-redux-airbnb-client',
    demo: 'https://react-redux-airbnb-client.onrender.com'
  },
  {
    id: 3,
    image: swimmingBlog,
    title: 'Swimming Blog',
    github: 'https://github.com/Buyaki01/swimming-blog-nextjs',
    demo: 'https://swimming-blog-nextjs.vercel.app'
  },
]

export const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}
