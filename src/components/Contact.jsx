import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { siteConfig } from '../data/siteConfig';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message should be at least 10 characters.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear validation error when editing field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);

      // Simulate form submission to backend (EmailJS/Formspree/Firebase integration hook)
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });

        // Reset success state after a few seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label"></span>
          <h2 className="section-title">Get In Touch</h2>
        </div>

        <div className="contact-grid">
          {/* Column 1: Contact Coordinates */}
          <div className="contact-info">
            <h3 className="contact-subtitle">Let's discuss your next project</h3>
            <p className="contact-desc">
              I am open to summer internships, student freelance contracts, or technical collaboration. Drop a message or reach out through social platforms.
            </p>

            <div className="contact-cards">
              <a href={`mailto:${siteConfig.contact.email}`} className="contact-info-card">
                <div className="contact-card-icon">
                  <Mail size={18} />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label">Email</span>
                  <span className="contact-card-value">{siteConfig.contact.email}</span>
                </div>
              </a>

              <a href={`tel:${siteConfig.contact.phone}`} className="contact-info-card">
                <div className="contact-card-icon">
                  <Phone size={18} />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label">Phone</span>
                  <span className="contact-card-value">{siteConfig.contact.phone}</span>
                </div>
              </a>

              <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="contact-info-card">
                <div className="contact-card-icon">
                  <MessageSquare size={18} />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label">WhatsApp</span>
                  <span className="contact-card-value">Send Message</span>
                </div>
              </a>

              <div className="contact-info-card non-interactive">
                <div className="contact-card-icon">
                  <MapPin size={18} />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label">Location</span>
                  <span className="contact-card-value">{siteConfig.personal.location}</span>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <span className="socials-title">Follow my work:</span>
              <div className="socials-links">
                <a href={siteConfig.contact.github} target="_blank" rel="noopener noreferrer" className="social-link-btn" aria-label="GitHub Profile">
                  <Github size={20} />
                </a>
                <a href={siteConfig.contact.linkedin} target="_blank" rel="noopener noreferrer" className="social-link-btn" aria-label="LinkedIn Profile">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Validation Form */}
          <div className="contact-form-container">
            {submitSuccess ? (
              <div className="contact-success-card fade-in-el">
                <CheckCircle2 size={48} className="success-icon" />
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I'll review your inquiry and get back to you shortly.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="form-name">Name</label>
                  <input
                    type="text"
                    id="form-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={errors.name ? 'input-error' : ''}
                    placeholder="Your full name"
                    disabled={isSubmitting}
                  />
                  {errors.name && <span className="error-message-text">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="form-email">Email Address</label>
                  <input
                    type="email"
                    id="form-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? 'input-error' : ''}
                    placeholder="name@example.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && <span className="error-message-text">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="form-message">Message</label>
                  <textarea
                    id="form-message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={errors.message ? 'input-error' : ''}
                    placeholder="Describe your project, timeline, or inquiries..."
                    disabled={isSubmitting}
                  ></textarea>
                  {errors.message && <span className="error-message-text">{errors.message}</span>}
                </div>

                {/* 
                  KISHORE: 
                  To connect this form to EmailJS/Formspree later:
                  1. Choose a service (e.g., https://formspree.io/ or https://www.emailjs.com/)
                  2. Update the "handleSubmit" method above to POST to your service's endpoint or invoke their SDK.
                */}
                <button
                  type="submit"
                  className="btn btn-primary form-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending Message...'
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: var(--bg-secondary);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }

        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }

        .contact-subtitle {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 12px;
          letter-spacing: -0.01em;
        }

        .contact-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 32px;
        }

        .contact-cards {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 32px;
        }

        .contact-info-card {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          text-decoration: none;
          color: inherit;
          transition: all 0.2s ease;
        }

        .contact-info-card:not(.non-interactive):hover {
          transform: translateX(4px);
          border-color: var(--accent);
        }

        .contact-card-icon {
          background-color: var(--bg-tertiary);
          color: var(--accent);
          width: 40px;
          height: 40px;
          border-radius: var(--border-radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-card-text {
          display: flex;
          flex-direction: column;
        }

        .contact-card-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          font-family: var(--font-mono);
          letter-spacing: 0.05em;
        }

        .contact-card-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .contact-socials {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .socials-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .socials-links {
          display: flex;
          gap: 12px;
        }

        .social-link-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: var(--border-radius-sm);
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }

        .social-link-btn:hover {
          color: var(--bg-secondary);
          background-color: var(--accent);
          border-color: var(--accent);
          transform: translateY(-2px);
        }

        /* Form styling */
        .contact-form-container {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          padding: 40px;
          box-shadow: var(--card-shadow);
        }

        @media (max-width: 500px) {
          .contact-form-container {
            padding: 24px;
          }
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .form-group input,
        .form-group textarea {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          background-color: var(--input-bg);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 12px;
          border-radius: var(--border-radius-sm);
          transition: all 0.2s ease;
          width: 100%;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: var(--text-muted);
          opacity: 0.8;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--border-focus);
          outline: none;
          box-shadow: 0 0 0 3px var(--accent-glow);
        }

        .input-error {
          border-color: #ef4444 !important;
        }

        .error-message-text {
          font-size: 0.8rem;
          color: #ef4444;
          font-weight: 500;
        }

        .form-submit-btn {
          width: 100%;
          font-size: 0.95rem;
          padding: 14px;
        }

        .contact-success-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 24px 0;
          gap: 16px;
        }

        .success-icon {
          color: #22c55e;
        }

        .contact-success-card h3 {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .contact-success-card p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 320px;
        }
      `}</style>
    </section>
  );
}
