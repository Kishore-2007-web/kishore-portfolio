import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageSquare, ChevronDown } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Hero() {
  const roles = siteConfig.personal.roles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1));
      }, 40);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, 80);
    }

    // Switch states based on text length
    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex(prev => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles]);

  const handleScrollTo = (id) => {
    const target = document.querySelector(id);
    if (target) {
      const topOffset = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid container">
        {/* Left Column: Copy & Actions */}
        <div className="hero-content fade-in-el">
          {siteConfig.personal.availability && (
            <div className="hero-availability-badge">
              <span className="badge-pulse"></span>
              {siteConfig.personal.availability}
            </div>
          )}

          <h1 className="hero-title-main">
            Hello, I'm <span className="hero-name">{siteConfig.personal.name}</span>
          </h1>

          <div className="hero-typewriter-wrapper">
            <span className="typewriter-static">Specialized in </span>
            <span className="typing-container">
              {displayText}
              <span className="typing-cursor"></span>
            </span>
          </div>

          <h2 className="hero-tagline">{siteConfig.personal.tagline}</h2>

          <p className="hero-intro">{siteConfig.personal.introParagraph}</p>

          <p className="hero-secondary-line">{siteConfig.personal.secondaryHeroLine}</p>

          <div className="hero-cta-buttons">
            <button
              onClick={() => handleScrollTo('#projects')}
              className="btn btn-primary"
            >
              View My Work <ArrowRight size={16} />
            </button>
            <button
              onClick={() => handleScrollTo('#contact')}
              className="btn btn-secondary"
            >
              Let's Chat <MessageSquare size={16} />
            </button>
          </div>
        </div>

        {/* Right Column: Visual Mesh or Photo */}
        <div className="hero-visual fade-in-el" style={{ animationDelay: '0.2s' }}>
          <div className="hero-visual-canvas">
            {siteConfig.personal.avatarUrl ? (
              <img
                src={siteConfig.personal.avatarUrl}
                alt={siteConfig.personal.name}
                className="hero-avatar-img"
              />
            ) : (
              <>
                {/* Geometric wireframe mesh lines representing Blender grid */}
                <div className="mesh-grid-line mesh-h-1"></div>
                <div className="mesh-grid-line mesh-h-2"></div>
                <div className="mesh-grid-line mesh-v-1"></div>
                <div className="mesh-grid-line mesh-v-2"></div>
                <div className="mesh-diagonal"></div>

                {/* Glowing nodes representing vertex selections in Blender */}
                <div className="vertex-node node-1" title="Code Element"></div>
                <div className="vertex-node node-2" title="3D Asset Vertex"></div>
                <div className="vertex-node node-3" title="UI Node"></div>
                <div className="vertex-node node-4" title="State Link"></div>

                {/* Content card overlay */}
                <div className="visual-card-overlay">
                  <div className="visual-card-title">&lt;developer_meta /&gt;</div>
                  <div className="visual-card-code">
                    <code>
                      const profile = &#123;<br />
                      &nbsp;&nbsp;origin: "Ambattur, Chennai",<br />
                      &nbsp;&nbsp;status: "3rd_year_cse",<br />
                      &nbsp;&nbsp;creative_engine: "Blender_3D"<br />
                      &#125;;
                    </code>
                  </div>
                </div>

                {/* Clear edit overlay banner for user */}
                <span className="placeholder-banner-note">
                  [ Editable Visual Area ]
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator" onClick={() => handleScrollTo('#about')}>
        <span>Explore Portfolio</span>
        <ChevronDown size={18} className="scroll-arrow" />
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding-top: calc(var(--header-height) + 40px);
          padding-bottom: 80px;
          background: radial-gradient(circle at 10% 20%, var(--accent-glow) 0%, transparent 60%);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 64px;
          align-items: center;
          width: 100%;
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 48px;
            text-align: center;
          }
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        @media (max-width: 1024px) {
          .hero-content {
            align-items: center;
          }
        }

        .hero-availability-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 6px 14px;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 600;
          font-family: var(--font-mono);
          margin-bottom: 24px;
        }

        .badge-pulse {
          width: 8px;
          height: 8px;
          background-color: #22c55e;
          border-radius: 50%;
          display: inline-block;
          position: relative;
        }

        .badge-pulse::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: #22c55e;
          border-radius: 50%;
          animation: pulse 1.8s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2.5); opacity: 0; }
        }

        .hero-title-main {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1.15;
          color: var(--text-primary);
          letter-spacing: -0.03em;
          margin-bottom: 16px;
        }

        @media (max-width: 768px) {
          .hero-title-main {
            font-size: 2.25rem;
          }
        }

        .hero-name {
          color: var(--accent);
          position: relative;
        }

        .hero-typewriter-wrapper {
          font-size: 1.25rem;
          font-weight: 500;
          margin-bottom: 20px;
          font-family: var(--font-mono);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 4px;
        }

        /* Prevents layout shift: reserves vertical space */
        .typing-container {
          min-width: 180px;
          text-align: left;
        }

        @media (max-width: 1024px) {
          .hero-typewriter-wrapper {
            justify-content: center;
          }
          .typing-container {
            text-align: center;
            min-width: unset;
          }
        }

        .hero-tagline {
          font-size: 1.4rem;
          font-weight: 600;
          line-height: 1.35;
          color: var(--text-primary);
          margin-bottom: 16px;
          letter-spacing: -0.01em;
          max-width: 600px;
        }

        @media (max-width: 768px) {
          .hero-tagline {
            font-size: 1.2rem;
          }
        }

        .hero-intro {
          font-size: 1.05rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin-bottom: 16px;
        }

        .hero-secondary-line {
          font-size: 0.95rem;
          color: var(--text-muted);
          font-style: italic;
          max-width: 600px;
          margin-bottom: 32px;
        }

        .hero-cta-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .hero-cta-buttons {
            width: 100%;
            justify-content: center;
          }
          .hero-cta-buttons .btn {
            flex: 1;
            min-width: 150px;
          }
        }

        /* 3D Wireframe Mesh Mockup */
        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-visual-canvas {
          position: relative;
          width: 320px;
          height: 320px;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: var(--card-shadow);
          overflow: hidden;
        }

        .hero-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: var(--border-radius-lg);
          transition: transform 0.3s ease;
          object-position: center 43%; 
        }

        .hero-avatar-img:hover {
          transform: scale(1.03);
        }

        @media (max-width: 480px) {
          .hero-visual-canvas {
            width: 280px;
            height: 280px;
          }
        }

        .mesh-grid-line {
          position: absolute;
          background-color: var(--border-color);
          opacity: 0.6;
        }

        .mesh-h-1 { width: 100%; height: 1px; top: 33%; left: 0; }
        .mesh-h-2 { width: 100%; height: 1px; top: 66%; left: 0; }
        .mesh-v-1 { width: 1px; height: 100%; left: 33%; top: 0; }
        .mesh-v-2 { width: 1px; height: 100%; left: 66%; top: 0; }

        .mesh-diagonal {
          position: absolute;
          width: 140%;
          height: 1px;
          background-color: var(--border-color);
          opacity: 0.3;
          transform: rotate(45deg);
        }

        .vertex-node {
          position: absolute;
          width: 12px;
          height: 12px;
          background-color: var(--accent);
          border: 2px solid var(--bg-secondary);
          border-radius: 50%;
          cursor: pointer;
          transition: transform 0.2s ease, background-color 0.2s ease;
          box-shadow: 0 0 10px var(--accent);
        }

        .vertex-node:hover {
          transform: scale(1.3);
          background-color: var(--text-primary);
        }

        .node-1 { top: 33%; left: 33%; transform: translate(-50%, -50%); }
        .node-2 { top: 33%; left: 66%; transform: translate(-50%, -50%); }
        .node-3 { top: 66%; left: 66%; transform: translate(-50%, -50%); }
        .node-4 { top: 66%; left: 33%; transform: translate(-50%, -50%); }

        .visual-card-overlay {
          position: absolute;
          bottom: 20px;
          left: 20px;
          right: 20px;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          padding: 12px;
          box-shadow: var(--shadow-md);
          text-align: left;
        }

        .visual-card-title {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent);
          margin-bottom: 6px;
          font-weight: 600;
        }

        .visual-card-code {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-primary);
          line-height: 1.4;
        }

        .placeholder-banner-note {
          position: absolute;
          top: 12px;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-muted);
          background-color: var(--bg-tertiary);
          padding: 2px 8px;
          border-radius: 4px;
          border: 1px solid var(--border-color);
        }

        /* Scroll indicator */
        .hero-scroll-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .hero-scroll-indicator:hover {
          color: var(--accent);
        }

        .scroll-arrow {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
          60% { transform: translateY(-3px); }
        }

        @media (max-height: 700px) {
          .hero-scroll-indicator {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
