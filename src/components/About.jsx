import React from 'react';
import { Award, Code2, ShieldAlert, Sparkles, Terminal } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label"></span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          {/* Main Story Column */}
          <div className="about-story">
            <h3 className="about-subtitle">
              Combining Web Architecture with 3D Creative Modeling
            </h3>

            <p className="about-paragraph">
              I am a 3rd-year Computer Science & Engineering student at <strong>Jaya Engineering College</strong>.
              My journey in tech is driven by a curiosity about how interfaces function and how they look. I focus heavily on frontend development, building clean layouts using standard JavaScript, while expanding my knowledge in full-stack tools.
            </p>

            <p className="about-paragraph">
              Beyond standard web layouts, I enjoy working in 3D using <strong>Blender</strong> to model low-poly meshes and design custom environments. I plan to build interactive web elements and eventually explore game development tools, bridging the gap between flat layouts and real-time visual spaces.
            </p>

            <div className="about-details-list">
              <div className="detail-item">
                <span className="detail-label">Location</span>
                <span className="detail-val">{siteConfig.personal.location}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Current Role</span>
                <span className="detail-val">Student & Freelance Developer</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Education</span>
                <span className="detail-val">B.E. CSE (3rd Year)</span>
              </div>
            </div>
          </div>

          {/* Working Style / Values Column */}
          <div className="about-cards-container">
            <div className="about-card">
              <div className="about-card-icon-wrapper">
                <Terminal size={20} className="about-icon" />
              </div>
              <h4 className="about-card-title">Technical Competence</h4>
              <p className="about-card-desc">
                Writing structured CSS, responsive grids, semantic HTML, and dynamic JavaScript. Eagerly learning database synchronization and backend solutions like Firebase.
              </p>
            </div>

            <div className="about-card">
              <div className="about-card-icon-wrapper">
                <Sparkles size={20} className="about-icon" />
              </div>
              <h4 className="about-card-title">Creative Modeling</h4>
              <p className="about-card-desc">
                Modeling and lighting optimized 3D assets in Blender. Focus on low-poly meshes suitable for web canvas loading and lightweight engine integration.
              </p>
            </div>

            <div className="about-card">
              <div className="about-card-icon-wrapper">
                <Award size={20} className="about-icon" />
              </div>
              <h4 className="about-card-title">Hybrid Approach</h4>
              <p className="about-card-desc">
                Applying smart planning to write cleaner systems while executing tasks diligently. Readily adapting to new frameworks, libraries, and codebase standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }

        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }

        .about-story {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .about-subtitle {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.3;
          letter-spacing: -0.01em;
        }

        .about-paragraph {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .about-paragraph strong {
          color: var(--text-primary);
          font-weight: 600;
        }

        .about-details-list {
          margin-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          border-top: 1px solid var(--border-color);
          padding-top: 20px;
        }

        .detail-item {
          display: flex;
          justify-content: space-between;
          font-size: 0.95rem;
          padding-bottom: 8px;
          border-bottom: 1px dotted var(--border-color);
        }

        .detail-label {
          font-family: var(--font-mono);
          color: var(--accent);
          font-weight: 500;
        }

        .detail-val {
          color: var(--text-primary);
          font-weight: 600;
          text-align: right;
        }

        .about-cards-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .about-card {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          padding: 24px;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: var(--card-shadow);
        }

        .about-card:hover {
          transform: translateY(-2px);
          border-color: var(--accent);
          box-shadow: var(--card-hover-shadow);
        }

        .about-card-icon-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: var(--border-radius-sm);
          background-color: var(--bg-tertiary);
          color: var(--accent);
          margin-bottom: 16px;
        }

        .about-card-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .about-card-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
}
