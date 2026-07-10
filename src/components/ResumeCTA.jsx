import React from 'react';
import { FileDown, ExternalLink } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function ResumeCTA() {
  return (
    <section className="resume-cta-section">
      <div className="container">
        <div className="resume-cta-wrapper">
          <div className="resume-cta-content">
            <h2 className="resume-cta-title">Interested in reviewing my full credentials?</h2>
            <p className="resume-cta-description">
              Get a detailed look at my education, technical courses, and projects in a standard PDF format. Ready for internships and junior developer opportunities.
            </p>
          </div>
          
          <div className="resume-cta-actions">
            {/* 
              KISHORE: 
              To change your resume file, upload your resume PDF to the "public" folder 
              (e.g., public/v_kishore_resume.pdf) and update the "resumeUrl" in "src/data/siteConfig.js".
              Currently it points to "#" as a placeholder.
            */}
            <a 
              href={siteConfig.contact.resumeUrl} 
              download="V_Kishore_Resume.pdf"
              className="btn btn-primary"
              onClick={(e) => {
                if (siteConfig.contact.resumeUrl === '#') {
                  e.preventDefault();
                  alert('Resume download placeholder. Please configure your resume file path in "src/data/siteConfig.js".');
                }
              }}
            >
              <FileDown size={18} /> Download CV (PDF)
            </a>
            
            <a 
              href={siteConfig.contact.resumeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
              onClick={(e) => {
                if (siteConfig.contact.resumeUrl === '#') {
                  e.preventDefault();
                  alert('Resume viewing placeholder. Please configure your resume URL in "src/data/siteConfig.js".');
                }
              }}
            >
              View Online <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .resume-cta-section {
          background-color: var(--bg-primary);
          padding: 60px 0;
        }

        .resume-cta-wrapper {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          padding: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          box-shadow: var(--card-shadow);
        }

        @media (max-width: 960px) {
          .resume-cta-wrapper {
            flex-direction: column;
            text-align: center;
            padding: 32px 24px;
            gap: 24px;
          }
        }

        .resume-cta-content {
          max-width: 600px;
        }

        .resume-cta-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }

        .resume-cta-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .resume-cta-actions {
          display: flex;
          gap: 16px;
          flex-shrink: 0;
        }

        @media (max-width: 600px) {
          .resume-cta-actions {
            width: 100%;
            flex-direction: column;
          }
          .resume-cta-actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
