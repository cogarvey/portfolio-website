import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Contact() {
  return (
    <div>
      <h1 className="contact-title">Contact</h1>
      <header>
        <div class="contact-container">
          <p className="contact-paragraph">
            Please feel free to contact me on either of these platforms!
          </p>
          <div className="contact-icon-linkedin">
            <SocialIcon
              url="https://www.linkedin.com/in/cogarvey"
              target="_blank"
              bgColor="black"
              fgColor="#f2ebe9"
              style={{
                height: "60px",
                width: "60px",
                maxHeight: "60px",
                maxWidth: "60px",
              }}
            />
              </div>
              <div className="contact-icon-email">

            <SocialIcon
              url="mailto: colleenellengarvey@gmail.com"
              target="_blank"
              bgColor="black"
              fgColor="#f2ebe9"
              style={{
                height: "60px",
                width: "60px",
                maxHeight: "60px",
                maxWidth: "60px",
                marginLeft: "1.5vw",
              }}
              />
              </div>
        </div>
      </header>
    </div>
  );
}
