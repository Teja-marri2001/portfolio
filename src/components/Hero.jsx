// Hero.jsx — Full-screen landing section
import { personal, social } from "../data/portfolioData";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero__inner">
        {/* Greeting */}
        <p className="hero__greeting">Hello, world</p>

        {/* Name — largest text on page */}
        <h1 className="hero__name">{personal.name}</h1>

        {/* Role */}
        <h2 className="hero__role">
          <span>{"<"}</span> {personal.role} <span>{"/>"}</span>
        </h2>

        {/* Tagline */}
        <p className="hero__tagline">{personal.tagline}</p>

        {/* CTA Buttons */}
        <div className="hero__cta">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-outline">
            Get in Touch
          </a>
        </div>
      </div>

      {/* Social links bottom-left */}
      <div className="hero__social">
        <a href={social.github} target="_blank" rel="noopener noreferrer">
          ⬡ GitHub
        </a>
        <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
          ⬡ LinkedIn
        </a>
        <a href={`mailto:${personal.email}`}>
          ⬡ Email
        </a>
      </div>

      {/* Scroll indicator bottom-right */}
      <div className="hero__scroll">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
