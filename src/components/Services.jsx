import React from 'react';
import * as LucideIcons from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label"></span>
          <h2 className="section-title">Services I Provide</h2>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => {
            // Resolve Lucide icon component dynamically
            const IconComponent = LucideIcons[service.iconName] || LucideIcons.HelpCircle;

            return (
              <div key={service.id} className="service-card">
                <div className="service-icon-container">
                  <IconComponent size={24} className="service-icon" />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .services-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 968px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }

        .service-card {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          padding: 32px 24px;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: var(--card-shadow);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .service-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent);
          box-shadow: var(--card-hover-shadow);
        }

        .service-icon-container {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: var(--border-radius-sm);
          background-color: var(--bg-tertiary);
          color: var(--accent);
          margin-bottom: 20px;
          transition: all 0.2s ease;
        }

        .service-card:hover .service-icon-container {
          background-color: var(--accent);
          color: var(--bg-secondary);
        }

        .service-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 12px;
        }

        .service-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
}
