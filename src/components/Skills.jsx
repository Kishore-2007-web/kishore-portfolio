import React from 'react';
import { GitBranch, Code, Code2 } from 'lucide-react';
import { Github } from './BrandIcons';
import { skillsData } from '../data/skillsData';

// Custom high-fidelity inline SVGs for specific technology logos
const SkillIcon = ({ name, size = 24 }) => {
  switch (name) {
    case 'HtmlIcon':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-svg-icon">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 6v11" />
          <path d="M9 9h6" />
        </svg>
      );
    case 'CssIcon':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-svg-icon">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 6v11" />
          <path d="M8 10h8" />
          <path d="M8 14h6" />
        </svg>
      );
    case 'JsIcon':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-svg-icon">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M15 9h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2" />
          <path d="M11 15v1.5a1.5 1.5 0 0 1-3 0" />
        </svg>
      );
    case 'FirebaseIcon':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-svg-icon">
          <path d="M4 15s3-1 6-1 6 1 6 1" />
          <path d="M12 3v18" />
          <path d="M12 3L6 14" />
          <path d="M12 3l6 11" />
        </svg>
      );
    case 'BlenderIcon':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-svg-icon">
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2a10 10 0 0 1 10 10" />
          <path d="M14 6l6-4" />
          <path d="M15 10l5-1.5" />
        </svg>
      );
    case 'GitBranch':
      return <GitBranch size={size} />;
    case 'Github':
      return <Github size={size} />;
    case 'Code':
      return <Code size={size} />;
    default:
      return <Code2 size={size} />;
  }
};

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">02 / Technical Base</span>
          <h2 className="section-title">Skills &amp; Technologies</h2>
        </div>

        <div className="skills-grid">
          {skillsData.map((group, idx) => (
            <div key={idx} className="skills-category-card">
              <div className="skills-category-info">
                <h3 className="skills-category-title">{group.category}</h3>
                <p className="skills-category-desc">{group.description}</p>
              </div>
              
              <div className="skills-items-container">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item-badge">
                    <div className="skill-icon-wrapper">
                      <SkillIcon name={skill.iconName} size={20} />
                    </div>
                    <span className="skill-name-text">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          background-color: var(--bg-primary);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        .skills-category-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          box-shadow: var(--card-shadow);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .skills-category-card:hover {
          transform: translateY(-3px);
          border-color: var(--accent);
          box-shadow: var(--card-hover-shadow);
        }

        .skills-category-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .skills-category-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .skills-items-container {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .skill-item-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          padding: 8px 16px;
          border-radius: var(--border-radius-sm);
          transition: all 0.2s ease;
        }

        .skills-category-card:hover .skill-item-badge {
          border-color: var(--border-color);
        }

        .skill-item-badge:hover {
          border-color: var(--accent) !important;
          background-color: var(--bg-tertiary);
          transform: translateY(-2px);
        }

        .skill-icon-wrapper {
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skill-name-text {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
          font-family: var(--font-sans);
        }

        .skill-svg-icon {
          stroke-width: 2.2px;
        }
      `}</style>
    </section>
  );
}
