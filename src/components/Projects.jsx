// Projects.jsx — Project showcase with cards from data file
import { projects } from "../data/portfolioData";
import useReveal from "./useReveal";
import "../styles/Projects.css";

// Single project card — reusable, receives one project object as prop
function ProjectCard({ project }) {
  return (
    <div className={`project-card ${project.featured ? "featured" : ""}`}>
      {/* Featured badge */}
      {project.featured && (
        <span className="project-card__badge">Featured</span>
      )}

      {/* Header: icon + links */}
      <div className="project-card__header">
        <span className="project-card__icon">⬡</span>
        <div className="project-card__links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              Live ↗
            </a>
          )}
        </div>
      </div>

      {/* Title & subtitle */}
      <div>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__subtitle">{project.subtitle}</p>
      </div>

      {/* Description */}
      <p className="project-card__desc">{project.description}</p>

      {/* Tech tags */}
      <div className="project-card__tags">
        {project.tags.map((tag) => (
          <span className="project-card__tag" key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const headerRef = useReveal();
  const gridRef   = useReveal();

  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label">What I've built</p>

        <div className="reveal" ref={headerRef}>
          <h2 className="section-title">Projects</h2>
        </div>

        {/*
          To add a new project:
          Open src/data/portfolioData.js and add a new object to the 'projects' array.
          It will automatically appear here.
        */}
        <div className="projects__grid reveal-stagger" ref={gridRef}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
