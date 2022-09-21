import React from 'react';
import { Link } from "react-scroll";
import { SocialIcon } from "react-social-icons"

export default function Navbar() {
  return (
    <div className="App">
      <header className="nav">
        <nav className="nav__container__actions">
          <ul>
            <li>
              <Link>
                HOME
              </Link>
            </li>
            <li>
              <Link>
                PROJECTS
              </Link>
            </li>
            <li>
              <Link>
                ABOUT
              </Link>
            </li>
            <li>
              <Link>
                CONTACT
              </Link>
            </li>
          </ul>

          <div className="web-links">
            <SocialIcon
              url="https://github.com/cogarvey"
              target="_blank"
              bgColor="black"
              fgColor="#f2ebe9"
              style={{
                height: "2.4vw",
                width: "2.4vw",
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
                height: "2.4vw",
                maxHeight: "40px",
                maxWidth: "40px",
                width: "2.4vw",
                marginLeft: "1.5vw",
              }}
            />
          </div>
        </nav>
      </header>
    </div>
  );
}
