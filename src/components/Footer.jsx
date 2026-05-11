// Footer.jsx — Site footer with copyright and social links
import { personal, social } from "../data/portfolioData";
import "../styles/Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          Designed &amp; Built by <span>{personal.name}</span> · {year}
        </p>
        <div className="footer__links">
          <a href={social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`mailto:${personal.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
