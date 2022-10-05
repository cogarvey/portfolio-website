import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Contact() {
  return(
    <div>
      <h1 className="contact-title">Contact</h1>
      <header>
        <div class="contact-container">
          <p>
            Please feel free to contact me on any of the following platforms!
          </p>
          <SocialIcon
              url="https://github.com/cogarvey"
              target="_blank"
              bgColor="black"
              fgColor="#f2ebe9"
              style={{
                height: "40px",
                width: "40px",
                maxHeight: "40px",
                maxWidth: "40px",
              }}
            />
            <SocialIcon
              url="https://www.linkedin.com/in/cogarvey"
              target="_blank"
              bgColor="black"
              fgColor="#f2ebe9"
              style={{
                height: "40px",
                width: "40px",
                maxHeight: "40px",
                maxWidth: "40px",
                marginLeft: "1.5vw",
              }}
            />
            <SocialIcon
              url="mailto: colleenellengarvey@gmail.com"
              target="_blank"
              bgColor="black"
              fgColor="#f2ebe9"
              style={{
                height: "40px",
                width: "40px",
                maxHeight: "40px",
                maxWidth: "40px",
                marginLeft: "1.5vw",
              }}
            />
        </div>
      </header>
    </div>
  )  
}