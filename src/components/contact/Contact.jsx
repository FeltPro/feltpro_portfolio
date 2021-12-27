import "./contact.css";
import Linkedin from "../../img/linkedin.gif";
import Github from "../../img/github.gif";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rrvnzco",
        "template_3v5nih4",
        formRef.current,
        "user_DrriDPTGKO2Zj4RDXCA6W"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
          <div className="c-info-item">
          <a href="https://www.linkedin.com/in/simon-feltham-31a323220/" target="_blank"><img src={Linkedin} alt="" className="c-icon" /></a>
              Linkedin Feltpro
            </div>
            <div className="c-info-item">
            <a href="https://github.com/FeltPro/" target="_blank"><img src={Github} alt="" className="c-icon" /></a>
              Github Feltpro
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              Contact me via this site or any of the links
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Bristol, UK
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Want to get in touch?</b> Please do! I am always available 
            to discuss future projects and potential services.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
