// About.jsx — About me section with profile card
import { personal } from "../data/portfolioData";
import useReveal from "./useReveal";
import "../styles/About.css";

export default function About() {
  const ref  = useReveal();
  const ref2 = useReveal();

  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-label">Who I am</p>
        <div className="about__grid">

          {/* Left: bio text */}
          <div className="about__text reveal" ref={ref}>
            <h2 className="section-title" style={{ marginBottom: 32 }}>About Me</h2>
            <p>{personal.about}</p>

            {/* Quick stats */}
            <div className="about__facts">
              <div className="about__fact">
                <span className="about__fact-value">4+</span>
                <span className="about__fact-label">Projects Built</span>
              </div>
              <div className="about__fact">
                <span className="about__fact-value">MCA</span>
                <span className="about__fact-label">Degree</span>
              </div>
              <div className="about__fact">
                <span className="about__fact-value">7.96</span>
                <span className="about__fact-label">CGPA</span>
              </div>
            </div>
          </div>

          {/* Right: profile card */}
          <div className="about__card reveal" ref={ref2} style={{ transitionDelay: '0.15s' }}>
            <div className="about__avatar-wrapper">
              <div className="about__avatar">

                {/* YOUR PROFILE PHOTO — clean, no placeholder */}
                <img
                  src="/profile.jpeg"
                  alt="Marri Teja"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    borderRadius: '6px',
                    display: 'block'
                  }}
                />

              </div>
            </div>

            {/* Contact info chips */}
            <div className="about__info-chips">
              <div className="about__chip">
                <span className="about__chip-icon">📍</span>
                {personal.location}
              </div>
              <div className="about__chip">
                <span className="about__chip-icon">📧</span>
                {personal.email}
              </div>
              <div className="about__chip">
                <span className="about__chip-icon">📱</span>
                {personal.phone}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}