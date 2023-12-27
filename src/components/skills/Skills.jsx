import './skills.css'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { SiNextdotjs, SiExpress } from "react-icons/si"
import { FaReact } from "react-icons/fa"
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io5"
import { DiMongodb } from "react-icons/di"
import { BiLogoTailwindCss } from "react-icons/bi"
import { BiLogoPostgresql } from "react-icons/bi"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <section className="skill" id="skills">
      <div>
        <div>
          <div>
            <div className="skill-bx">
              <h2>Skills</h2>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <SiNextdotjs class="w-50 h-50" />
                  <h5 className="mt-2">NextJS</h5>
                </div>
                <div className="item">
                  <FaReact class="w-50 h-50"/>
                  <h5>React</h5>
                </div>
                <div className="item">
                  <IoLogoJavascript class="w-50 h-50" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <IoLogoNodejs class="w-50 h-50" />
                  <h5>NodeJs</h5>
                </div>
                <div className="item">
                  <SiExpress class="w-50 h-50" />
                  <h5>ExpressJS</h5>
                </div>
                <div className="item">
                  <DiMongodb class="w-50 h-50"/>
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <BiLogoTailwindCss class="w-50 h-50" />
                  <h5>TailwindCss</h5>
                </div>
                <div className="item">
                  <BiLogoPostgresql class="w-50 h-50" />
                  <h5>postGRES</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
