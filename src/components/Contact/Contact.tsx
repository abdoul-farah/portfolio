import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Wrapper from '../UI/Wrapper';
import classes from './Contact.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
function Contact() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  // console.log(process.env.REACT_APP_EMAILJS_API_KEY);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await emailjs.send(
        'service_4pck3w1',
        'template_ugeivv9',
        {
          name: nameRef.current?.value,
          email: emailRef.current?.value,
          message: messageRef.current?.value,
        },
        import.meta.env.VITE_REACT_APP_EMAILJS_API_KEY
      );

      toast.success('Email sent successfully', {
        position: 'bottom-right',
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });

      // reset input fields
      if (nameRef.current) {
        nameRef.current.value = '';
      }
      if (emailRef.current) {
        emailRef.current.value = '';
      }
      if (messageRef.current) {
        messageRef.current.value = '';
      }
    } catch (error) {
      toast.error('Failed to send email', {
        position: 'bottom-right',
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };

  return (
    <Wrapper>
      <ToastContainer />
      <section id="Contact" className={classes.section}>
        <div className={classes.contact}>
          <h1>
            Let's chat. <br />
            Tell me about your <br /> project.
          </h1>
          <div className={classes.contactItem}>
            <div>
              <EmailOutlinedIcon className={classes.icon} />
            </div>
            <div>
              <p>Mail me at</p>
              <a href="mailto:abdoul.farah2@gmail.com">
                abdoul.farah2@gmail.com
              </a>
            </div>
          </div>
        </div>
        <form className={classes.form} onSubmit={sendEmail}>
          {/* <h1>Get in touch</h1> */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            ref={nameRef}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            ref={emailRef}
          />
          <textarea
            name="message"
            cols={30}
            rows={7}
            placeholder="Message"
            required
            ref={messageRef}
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </Wrapper>
  );
}

export default Contact;
