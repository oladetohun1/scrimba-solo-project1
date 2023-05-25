import React from "react";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import mail from "../assets/email.png";
import twitter from "../assets/twitter-logo.png";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container__socials">
          <div className="footer__container__socials__linkedin">
            <a
              href="https://www.linkedin.com/in/oluwakorede-oladetohun-1a89351a5/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin"></img>{" "}
            </a>
          </div>
          <div className="footer__container__socials__github">
            <a
              href="https://www.github.com/oladetohun1"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="github"></img>{" "}
            </a>
          </div>
        </div>
        <div className="footer__container__socials__mail">
          <a
            href="mailto:oladetohunoluwakorede@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mail} alt="mail"></img>{" "}
          </a>
        </div>
        <div className="footer__container__socials__twitter">
          <a
            href="https://www.twitter.com/kodieene"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="twitter"></img>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
