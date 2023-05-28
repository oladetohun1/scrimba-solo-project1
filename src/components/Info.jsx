import React from "react";
import profile from "../assets/potrait.png";
import mail from "../assets/email.png";
import linkedin from "../assets/linkedin.png";

export default function Info() {
  return (
    <div className="info">
      <div className="info__container">
        <div className="info__container__image">
          <img src={profile} alt="profile" />
        </div>
        <div className="info__container__text">
          <h1>Oluwakorede</h1>
          <h4>Software Engineer</h4>
          <p>
            <a
              href="https://www.hiphotler.tech"
              target="_blank"
              rel="noreferrer"
              className="info__container__text__link"
            >
              Hiphotler.tech
            </a>
          </p>

          <div className="info__container__text__socials">
            <div className="info__container___text__socials__email">
              <a
                href="mailto:oladetohunoluwakorede@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={mail} alt="mail"></img>
              </a>
              <p>Email</p>
            </div>
            <div className="info__container___text__socials__linkedin">
              <a
                href="https://www.linkedin.com/in/oluwakorede-oladetohun-1a89351a5/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="linkedin"></img>
              </a>
              <p>Linkedin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
