import React, { useState } from 'react';
import { Eye, ExternalLink, Filter } from 'lucide-react';
import { Github } from './BrandIcons';
import { projectsData } from '../data/projectsData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  // Available categories
  const categories = ['All', 'Web Design', 'Web Application', 'Full Stack', '3D Graphics'];

  // Filter projects list
  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label"></span>
          <h2 className="section-title">Projects</h2>
        </div>

        {/* Filter Navigation */}
        <div className="projects-filter-bar">
          <span className="filter-icon-label">
            <Filter size={14} /> Filter:
          </span>
          <div className="filter-buttons">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card">
              {/* Image / Fallback Container */}
              <div className="project-card-header" onClick={() => setSelectedProject(project)}>
                {project.image ? (
                  <img src={project.image} alt={project.title} className="project-card-img" />
                ) : (
                  <div className="project-card-fallback">
                    <span className="fallback-badge">{project.category}</span>
                    <span className="fallback-title">{project.title}</span>
                    <div className="fallback-grid"></div>
                    <div className="fallback-line"></div>
                  </div>
                )}

                {/* Hover overlay details button */}
                <div className="project-hover-overlay">
                  <span className="overlay-view-btn">
                    <Eye size={18} /> View Details
                  </span>
                </div>
              </div>

              {/* Body details */}
              <div className="project-card-body">
                <span className="project-card-category">{project.category}</span>
                <h3 className="project-card-title" onClick={() => setSelectedProject(project)}>
                  {project.title}
                </h3>
                <p className="project-card-summary">{project.summary}</p>

                <div className="project-card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-card-tag">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="project-card-footer">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn btn-secondary btn-sm card-btn"
                  title="View Specs & Features"
                >
                  <Eye size={14} /> Details
                </button>
                <div className="card-external-links">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-icon-link"
                    title="Source Code"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-icon-link"
                    title="Live Demo"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <style>{`
        .projects-section {
          background-color: var(--bg-primary);
        }

        .projects-filter-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .filter-icon-label {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .filter-buttons {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .filter-btn {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 550;
          padding: 6px 16px;
          border-radius: var(--border-radius-sm);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-btn:hover {
          background-color: var(--bg-tertiary);
          color: var(--text-primary);
          border-color: var(--text-secondary);
        }

        .filter-btn.active {
          background-color: var(--accent);
          color: var(--bg-secondary);
          border-color: var(--accent);
        }

        /* Projects Cards Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }

        @media (max-width: 680px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }

        .project-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: var(--card-shadow);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent);
          box-shadow: var(--card-hover-shadow);
        }

        /* Header / Cover styling */
        .project-card-header {
          position: relative;
          height: 190px;
          cursor: pointer;
          overflow: hidden;
          background-color: var(--bg-primary);
          border-bottom: 1px solid var(--border-color);
        }

        .project-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .project-card:hover .project-card-img {
          transform: scale(1.04);
        }

        /* Fallback Visual styling */
        .project-card-fallback {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-secondary) 100%);
          display: flex;
          flex-direction: column;
          padding: 24px;
          position: relative;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .fallback-badge {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--accent);
          background-color: var(--accent-glow);
          border: 1px solid var(--accent);
          padding: 1px 8px;
          border-radius: 100px;
          margin-bottom: 10px;
          z-index: 2;
        }

        .fallback-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-primary);
          z-index: 2;
          max-width: 90%;
        }

        .fallback-grid {
          position: absolute;
          width: 150%;
          height: 150%;
          background-size: 15px 15px;
          background-image: 
            linear-gradient(to right, var(--border-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--border-color) 1px, transparent 1px);
          opacity: 0.35;
          transform: rotate(15deg);
          top: -25%;
          left: -25%;
        }

        .fallback-line {
          position: absolute;
          width: 100px;
          height: 100px;
          border: 1px dashed var(--accent);
          border-radius: 50%;
          opacity: 0.1;
          z-index: 1;
        }

        /* Hover Overlay */
        .project-hover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(14, 15, 17, 0.4);
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-card-header:hover .project-hover-overlay {
          opacity: 1;
        }

        .overlay-view-btn {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 8px 16px;
          border-radius: var(--border-radius-sm);
          font-size: 0.85rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          box-shadow: var(--shadow-md);
          transform: translateY(10px);
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-card-header:hover .overlay-view-btn {
          transform: translateY(0);
        }

        /* Body Details styling */
        .project-card-body {
          padding: 24px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .project-card-category {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accent);
          margin-bottom: 6px;
          display: block;
        }

        .project-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 10px;
          cursor: pointer;
          transition: color 0.2s ease;
          line-height: 1.3;
        }

        .project-card-title:hover {
          color: var(--accent);
        }

        .project-card-summary {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 16px;
          flex-grow: 1;
        }

        .project-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: auto;
        }

        .project-card-tag {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 2px 8px;
          border-radius: 4px;
        }

        /* Card Footer styling */
        .project-card-footer {
          padding: 16px 24px;
          border-top: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: var(--bg-tertiary);
          opacity: 0.9;
        }

        .card-btn {
          font-size: 0.8rem;
          padding: 6px 12px;
        }

        .card-external-links {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .card-icon-link {
          color: var(--text-secondary);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          border-radius: 4px;
          transition: all 0.2s ease;
        }

        .card-icon-link:hover {
          color: var(--accent);
          background-color: var(--bg-secondary);
        }
      `}</style>
    </section>
  );
}
