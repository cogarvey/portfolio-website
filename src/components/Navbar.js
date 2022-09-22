import React from "react";
import { Link } from "react-scroll";
import { SocialIcon } from "react-social-icons";

export default function Navbar() {
  
  return (
    <div>
      <header className="nav">
        <nav className="nav-links">

            <p>
              <Link>HOME</Link>
            </p>
            <p>
              <Link>PROJECTS</Link>
            </p>
            <p>
              <Link>ABOUT</Link>
            </p>
            <p>
              <Link>CONTACT</Link>
            </p>
        </nav>

          <div className="web-links">
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
          </div>
      </header>
    </div>
  );
}
