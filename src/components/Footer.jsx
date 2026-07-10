import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { siteConfig } from '../data/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const topOffset = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="portfolio-footer">
      <div className="container footer-container">
        {/* Top Section */}
        <div className="footer-top-row">
          <div className="footer-brand">
            <h3 className="footer-logo">{siteConfig.personal.name}</h3>
            <p className="footer-tagline">
              B.E. CSE Student • Web Developer • Blender Artist
            </p>
          </div>

          <div className="footer-nav">
            <ul className="footer-nav-links">
              <li><a href="#home" onClick={(e) => handleLinkClick(e, '#home')}>Home</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>About</a></li>
              <li><a href="#skills" onClick={(e) => handleLinkClick(e, '#skills')}>Skills</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>Services</a></li>
              <li><a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>Projects</a></li>
              <li><a href="#education" onClick={(e) => handleLinkClick(e, '#education')}>Education</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom-row">
          <p className="footer-copy">
            &copy; {currentYear} {siteConfig.personal.name}. All rights reserved.
          </p>

          <div className="footer-socials-top">
            <a href={siteConfig.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <Github size={18} />
            </a>
            <a href={siteConfig.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <Linkedin size={18} />
            </a>
            <button className="back-to-top-btn" onClick={handleScrollToTop} aria-label="Scroll back to top">
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .portfolio-footer {
          background-color: var(--bg-primary);
          border-top: 1px solid var(--border-color);
          padding: 48px 0 32px 0;
        }

        .footer-container {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .footer-top-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 32px;
          flex-wrap: wrap;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .footer-logo {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }

        .footer-tagline {
          font-size: 0.88rem;
          color: var(--text-secondary);
        }

        .footer-nav-links {
          display: flex;
          gap: 20px;
          list-style: none;
          flex-wrap: wrap;
        }

        .footer-nav-links a {
          font-size: 0.88rem;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-nav-links a:hover {
          color: var(--accent);
        }

        .footer-bottom-row {
          border-top: 1px solid var(--border-color);
          padding-top: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        @media (max-width: 600px) {
          .footer-bottom-row {
            flex-direction: column-reverse;
            text-align: center;
          }
        }

        .footer-copy {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .footer-socials-top {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .footer-socials-top a {
          color: var(--text-secondary);
          transition: color 0.2s ease;
          display: inline-flex;
          align-items: center;
        }

        .footer-socials-top a:hover {
          color: var(--accent);
        }

        .back-to-top-btn {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          width: 36px;
          height: 36px;
          border-radius: var(--border-radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .back-to-top-btn:hover {
          background-color: var(--accent);
          color: var(--bg-secondary);
          border-color: var(--accent);
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
}
