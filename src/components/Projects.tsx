import { projects } from "../data/projects";
import "./Projects.css";

export function Projects() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "status-completed";
      case "in-progress":
        return "status-progress";
      case "on-hold":
        return "status-hold";
      default:
        return "";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      case "on-hold":
        return "On Hold";
      default:
        return status;
    }
  };

  return (
    <>
      <header className="portfolio-header">
        <div className="header-content">
          <h1 className="header-title">Portfolio Projects</h1>
        </div>
      </header>
      <section className="projects-section">
        <div className="projects-container">
          <p className="projects-subtitle">
            Explore my recent projects and work experience across different
            technologies
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <h2 className="project-title">{project.title}</h2>
                  <span
                    className={`status-badge ${getStatusColor(project.status)}`}
                  >
                    {getStatusLabel(project.status)}
                  </span>
                </div>

                <p className="project-short-desc">{project.shortDescription}</p>
                <p className="project-description">{project.description}</p>

                <div className="project-section">
                  <h3>Key Features</h3>
                  <ul className="features-list">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-section">
                  <h3>Tech Stack</h3>
                  <div className="tech-stack">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-meta">
                  <span className="language-badge">{project.language}</span>
                  {(project.github || project.live) && (
                    <div className="project-links">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          GitHub
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link live"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
