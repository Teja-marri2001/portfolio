// Skills.jsx — Tech stack displayed as category cards
import { skills } from "../data/portfolioData";
import useReveal from "./useReveal";
import "../styles/Skills.css";

export default function Skills() {
  const headerRef = useReveal();
  const gridRef   = useReveal();

  return (
    <section id="skills" className="section skills__bg">
      <div className="container">
        <p className="section-label">What I work with</p>

        <div className="reveal" ref={headerRef}>
          <h2 className="section-title">Tech Stack</h2>
        </div>

        {/* Skill category cards — generated from portfolioData.js */}
        <div className="skills__grid reveal-stagger" ref={gridRef}>
          {skills.map((group) => (
            <div className="skill-card" key={group.category}>
              <p className="skill-card__category">{group.category}</p>
              <div className="skill-card__tags">
                {group.items.map((item) => (
                  <span className="skill-tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
