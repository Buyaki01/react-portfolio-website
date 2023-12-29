import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import './skills.css'
import tailwindCssLogo from '../../assets/Tailwind-CSS.png'
import mongodbLogo from '../../assets/mongodbLogo.png'
import nextjslogo from '../../assets/nextjslogo.png'
import reactLogo from '../../assets/reactLogo.png'
import nodejsLogo from '../../assets/nodejs-logo.png'
import expressLogo from '../../assets/expressLogo.png'
import postgresql from '../../assets/postgresql.png'
import javascriptLogo from '../../assets/javascriptlogo.png'

const data = [
  {
    image: reactLogo,
    name: 'React'
  }, 
  {
    image: nextjslogo,
    name: 'NextJs'
  }, 
  {
    image: javascriptLogo,
    name: 'JavaScript'
  },
  {
    image: nodejsLogo,
    name: 'NodeJs'
  }, 
  {
    image: expressLogo,
    name: 'ExpressJs'
  }, 
  {
    image: tailwindCssLogo,
    name: 'TailwindCss'
  }, 
  {
    image: mongodbLogo,
    name: 'mongoDB'
  }, 
  {
    image: postgresql,
    name: 'postgresql'
  }, 
]

export const Skills = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Medium devices (tablets)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Small devices (phones)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section id="skills">
      <h2>Skills</h2>
      <Slider {...settings} className="container skills__container">
        {data.map(({image, name}, index) => {
          return (
            <article key={index} className="skill flex gap-2">
              <div className="logo__skill">
                <img src={image} alt={name} />
              </div>
              <h5 className='skill__name'>{name}</h5>
            </article>
          )
        })}
      </Slider>
    </section>
  )
}
