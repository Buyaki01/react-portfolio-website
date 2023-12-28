import './projects.css'
import pearlsCollections from '../../assets/pearlsCollections.PNG'
import airbnb from '../../assets/airbnb.PNG'
import swimmingBlog from '../../assets/swimmingBlog.PNG'

export const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={pearlsCollections} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/Buyaki01" className='btn' target='_blank'>Github</a>
          <a href="https://github.com/Buyaki01/nextjs13-online-store-shop" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={airbnb} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/Buyaki01" className='btn' target='_blank'>Github</a>
          <a href="https://github.com/Buyaki01/react-redux-airbnb-client" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={swimmingBlog} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/Buyaki01" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/Buyaki01/swimming-blog-nextjs" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}
