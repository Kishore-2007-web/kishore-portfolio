import React from 'react';
import { BookOpen, Calendar, MapPin } from 'lucide-react';
import { educationData } from '../data/educationData';

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">05 / Academics</span>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-card-header">
                <div className="education-icon-wrapper">
                  <BookOpen size={20} />
                </div>
                <div className="education-title-meta">
                  <span className="education-status-tag">{edu.currentStatus}</span>
                  <h3 className="education-institution">{edu.institution}</h3>
                  <h4 className="education-degree">{edu.degree}</h4>
                </div>
              </div>

              <div className="education-card-body">
                <div className="education-meta-strip">
                  <span className="meta-icon-text">
                    <Calendar size={14} /> {edu.duration}
                  </span>
                  <span className="meta-icon-text">
                    <MapPin size={14} /> {edu.location}
                  </span>
                </div>
                
                <ul className="education-bullets">
                  {edu.details.map((detail, dIdx) => (
                    <li key={dIdx} className="education-bullet-item">{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .education-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }

        .education-timeline {
          max-width: 760px;
          margin: 0 auto;
        }

        .education-card {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          padding: 32px;
          box-shadow: var(--card-shadow);
          transition: all 0.25s ease;
        }

        .education-card:hover {
          border-color: var(--accent);
          box-shadow: var(--card-hover-shadow);
        }

        .education-card-header {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          margin-bottom: 24px;
        }

        @media (max-width: 600px) {
          .education-card-header {
            flex-direction: column;
            gap: 16px;
          }
        }

        .education-icon-wrapper {
          background-color: var(--bg-tertiary);
          color: var(--accent);
          width: 44px;
          height: 44px;
          border-radius: var(--border-radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .education-title-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 6px;
        }

        .education-status-tag {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent);
          background-color: var(--accent-glow);
          border: 1px solid var(--accent);
          padding: 2px 8px;
          border-radius: 100px;
          font-weight: 600;
        }

        .education-institution {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.01em;
          line-height: 1.2;
        }

        .education-degree {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-secondary);
          line-height: 1.3;
        }

        .education-card-body {
          border-top: 1px solid var(--border-color);
          padding-top: 20px;
        }

        .education-meta-strip {
          display: flex;
          gap: 24px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .meta-icon-text {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .education-bullets {
          padding-left: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .education-bullet-item {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          position: relative;
          padding-left: 20px;
        }

        .education-bullet-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 10px;
          width: 6px;
          height: 6px;
          background-color: var(--accent);
          border-radius: 50%;
        }
      `}</style>
    </section>
  );
}
