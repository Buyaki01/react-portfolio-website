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
            <div className='flex justify-center'>
              <MdOutlineEmail className='contact__option-icon' />
            </div>
            <h4>Email</h4>
            <h5>rittahbuyaki@gmail.com</h5>
            <a href="mailto:rittahbuyaki@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <div className='flex justify-center'>
              <RiMessengerLine className='contact__option-icon' />
            </div>
            <h4>Messenger</h4>
            <h5>rittasweta</h5>
            <a href="https://m.me/rittabuyaki" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <div className='flex justify-center'>
              <FaWhatsapp className='contact__option-icon' />
            </div>
            <h4>WhatsApp</h4>
            <h5>+254722554294</h5>
            <a href="https://api.whatsapp.com/send?phone=%2B254722554294" target='_blank'>Send a message</a>
          </article>
        </div>
        <form action="">
          <input 
            type="text"
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input 
            type="text"
            name='email'
            placeholder='Your Email'
            required
          />
          <textarea 
            name="message" 
            rows="10"
            placeholder='Your Message'
            required
          >
          </textarea>
          <button 
            type="submit"
            className='btn btn-primary'
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
