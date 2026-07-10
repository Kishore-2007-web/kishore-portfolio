import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Github } from './BrandIcons';

export default function ProjectModal({ project, onClose }) {
  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    // Lock scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  const handleBackdropClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleBackdropClick} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-content fade-in-el">
        <button className="modal-close-btn" onClick={onClose} aria-label="Close details modal">
          <X size={20} />
        </button>

        <div className="modal-grid">
          {/* Left / Top: Visual Header / Image Fallback */}
          <div className="modal-visual-panel">
            {project.image ? (
              <img src={project.image} alt={project.title} className="modal-img" />
            ) : (
              <div className="modal-fallback-visual">
                <span className="fallback-tag">{project.category}</span>
                <span className="fallback-title-txt">{project.title}</span>
                <div className="fallback-grid-lines"></div>
                <div className="fallback-circle"></div>
              </div>
            )}
          </div>

          {/* Right / Bottom: Detailed Specs */}
          <div className="modal-info-panel">
            <span className="modal-category">{project.category}</span>
            <h3 id="modal-title" className="modal-title">{project.title}</h3>
            
            <div className="modal-tech-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="modal-tech-tag">{tag}</span>
              ))}
            </div>

            <p className="modal-description">{project.description}</p>

            {project.details && (
              <div className="modal-extra-details">
                {project.details.challenge && (
                  <div className="modal-detail-block">
                    <h4>The Challenge</h4>
                    <p>{project.details.challenge}</p>
                  </div>
                )}

                {project.details.learning && (
                  <div className="modal-detail-block">
                    <h4>Key Takeaway / Learning</h4>
                    <p>{project.details.learning}</p>
                  </div>
                )}

                {project.details.features && project.details.features.length > 0 && (
                  <div className="modal-detail-block">
                    <h4>Key Features</h4>
                    <ul className="modal-features-list">
                      {project.details.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            <div className="modal-action-buttons">
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-sm"
              >
                Live Demo <ExternalLink size={14} />
              </a>
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary btn-sm"
              >
                Source Code <Github size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(14, 15, 17, 0.7);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          z-index: 1100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-content {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          width: 100%;
          max-width: 860px;
          max-height: calc(100vh - 40px);
          overflow-y: auto;
          position: relative;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
          animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .modal-close-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.2s ease;
        }

        .modal-close-btn:hover {
          background-color: var(--accent);
          color: var(--bg-secondary);
          border-color: var(--accent);
          transform: rotate(90deg);
        }

        .modal-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          min-height: 500px;
        }

        @media (max-width: 768px) {
          .modal-grid {
            grid-template-columns: 1fr;
          }
        }

        .modal-visual-panel {
          background-color: var(--bg-primary);
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          position: relative;
        }

        @media (max-width: 768px) {
          .modal-visual-panel {
            border-right: none;
            border-bottom: 1px solid var(--border-color);
            height: 220px;
          }
        }

        .modal-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Fallback Visual styling */
        .modal-fallback-visual {
          width: 100%;
          height: 100%;
          min-height: 220px;
          background: linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-secondary) 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 32px;
          text-align: center;
          overflow: hidden;
        }

        .fallback-tag {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent);
          border: 1px solid var(--accent);
          padding: 2px 8px;
          border-radius: 100px;
          margin-bottom: 12px;
          background-color: var(--accent-glow);
          z-index: 2;
        }

        .fallback-title-txt {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-primary);
          z-index: 2;
          max-width: 90%;
        }

        .fallback-grid-lines {
          position: absolute;
          width: 200%;
          height: 200%;
          background-size: 20px 20px;
          background-image: 
            linear-gradient(to right, var(--border-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--border-color) 1px, transparent 1px);
          opacity: 0.4;
          transform: rotate(15deg);
        }

        .fallback-circle {
          position: absolute;
          width: 180px;
          height: 180px;
          border: 1px dashed var(--accent);
          border-radius: 50%;
          opacity: 0.15;
          animation: spin 30s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .modal-info-panel {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        @media (max-width: 500px) {
          .modal-info-panel {
            padding: 24px;
          }
        }

        .modal-category {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent);
          margin-bottom: 8px;
          display: block;
        }

        .modal-title {
          font-size: 1.85rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }

        .modal-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }

        .modal-tech-tag {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 4px 10px;
          border-radius: var(--border-radius-sm);
        }

        .modal-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .modal-extra-details {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 28px;
          border-top: 1px solid var(--border-color);
          padding-top: 20px;
        }

        .modal-detail-block h4 {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 6px;
        }

        .modal-detail-block p {
          font-size: 0.88rem;
          color: var(--text-secondary);
        }

        .modal-features-list {
          list-style: none;
          padding-left: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .modal-features-list li {
          font-size: 0.88rem;
          color: var(--text-secondary);
          position: relative;
          padding-left: 16px;
        }

        .modal-features-list li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--accent);
        }

        .modal-action-buttons {
          display: flex;
          gap: 12px;
        }

        .modal-action-buttons .btn {
          flex: 1;
        }
      `}</style>
    </div>
  );
}
