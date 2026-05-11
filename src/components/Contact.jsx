// Contact.jsx — Contact section with email CTA and social links
import { personal, social } from "../data/portfolioData";
import useReveal from "./useReveal";
import "../styles/Contact.css";

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="section">
      <div className="container">
        <p className="section-label">Get in touch</p>

        <div className="contact__inner reveal" ref={ref}>
          <h2 className="section-title" style={{ marginBottom: 24 }}>
            Let's Work Together
          </h2>

          <p className="contact__intro">
            I'm actively looking for entry-level software development roles.
            Whether you have an opportunity, a question, or just want to say hello —
            my inbox is always open.
          </p>

          {/* Big email CTA */}
          <a href={`mailto:${personal.email}`} className="contact__email-cta">
            {personal.email} ↗
          </a>

          {/* Social links */}
          <div className="contact__links">
            <a
              href={social.github}
              className="contact__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              ⬡ GitHub
            </a>
            <a
              href={social.linkedin}
              className="contact__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              ⬡ LinkedIn
            </a>
            <a href={`tel:${personal.phone}`} className="contact__link">
              ⬡ {personal.phone}
            </a>
          </div>

          {/* Quick contact details */}
          <div className="contact__details">
            <div className="contact__detail">
              <span className="contact__detail-label">Location</span>
              <span className="contact__detail-value">{personal.location}</span>
            </div>
            <div className="contact__detail">
              <span className="contact__detail-label">Availability</span>
              <span className="contact__detail-value">Open to Work</span>
            </div>
            <div className="contact__detail">
              <span className="contact__detail-label">Role</span>
              <span className="contact__detail-value">Full Stack Dev</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
