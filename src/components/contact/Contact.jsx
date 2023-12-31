import './contact.css'
import { MdOutlineEmail } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import { FaWhatsapp } from "react-icons/fa"

export const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>rittahbuyaki@gmail.com</h5>
            <a href="mailto:rittahbuyaki@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>rittasweta</h5>
            <a href="https://m.me/rittabuyaki" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <FaWhatsapp />
            <h4>WhatsApp</h4>
            <h5>(+254) 722554294</h5>
            <a href="https://api.whatsapp.com/send?phone=%2B254722554294" target='_blank'>Send a message</a>
          </article>
        </div>
        <form action=""></form>
      </div>
    </section>
  )
}
