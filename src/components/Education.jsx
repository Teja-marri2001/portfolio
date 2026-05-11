// Education.jsx — Timeline of educational qualifications
import { education } from "../data/portfolioData";
import useReveal from "./useReveal";
import "../styles/Education.css";

export default function Education() {
  const headerRef   = useReveal();
  const timelineRef = useReveal();

  return (
    <section id="education" className="section education__bg">
      <div className="container">
        <p className="section-label">Academic background</p>

        <div className="reveal" ref={headerRef}>
          <h2 className="section-title">Education</h2>
        </div>

        {/* Timeline — items from portfolioData.js */}
        <div className="education__timeline reveal" ref={timelineRef}>
          {education.map((item, i) => (
            <div className="edu-item" key={i}>
              <p className="edu-item__period">{item.period}</p>
              <h3 className="edu-item__degree">{item.degree}</h3>
              <p className="edu-item__institution">{item.institution}</p>
              <span className="edu-item__cgpa">⬡ CGPA: {item.cgpa}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
