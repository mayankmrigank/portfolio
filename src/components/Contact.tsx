import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/mayank-mrigank-singh"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — mayank-mrigank-singh
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.Tech CSE, Kalinga Institute of Industrial Technology,
              Bhubaneswar — 2023–2027
            </p>
            <p>
              Senior Secondary (XII), DAV Public School, Gandhinagar, Ranchi —
              2020–2022
            </p>
            <p>
              Secondary (X), DAV Public School, Canary Hill, Hazaribagh —
              2018–2020
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/mayankmrigank/Public-main"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/mayank-mrigank-singh"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="mailto:mayankmrigank23@gmail.com"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Mayank Mrigank Singh</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
