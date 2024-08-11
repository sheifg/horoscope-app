import React from "react";
import logo from "../../assets/logo.png";
import "./Navbar.scss";

export default function Navbar() {
  const navLinks = [
      {
          text: "HOROSCOPES",
          href: "#horoscopes",
      },
      {
          text: "DAILY",
          href: "#daily",
      },
      {
          text: "TAROT",
          href: "#tarot",
      },
      {
          text: "ARTICLES",
          href: "#articles",
      },
      {
          text: "CONTACT",
          href: "#contact",
      }
  ];
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="sun-moon" />
      </div>
      <div className="links">
        {navLinks.map((link, index) => (
            <a className='link' href={link.href} key={index}>{link.text}</a>))}
        {/* <a className="link" href="#Horoscope">
          Horoscope
        </a>
        <a className="link" href="#Daily">
          Daily
        </a>
        <a className="link" href="#Tarot">
          Tarot
        </a>
        <a className="link" href="#Articles">
          Articles
        </a>
        <a className="link" href="#Contact">
          Contact
        </a> */}
      </div>
    </div>
  );
}
