'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
      });

      // Close mobile menu when clicking on a link
      document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('active');
          hamburger.classList.remove('active');
        });
      });
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = (anchor as HTMLAnchorElement).getAttribute('href') || '';
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Navbar Background on Scroll
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar') as HTMLElement;
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
        } else {
          navbar.style.boxShadow = '0 1px 2px 0 rgb(0 0 0 / 0.05)';
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Form Submission
    const contactForm = document.getElementById('contactForm') as HTMLFormElement;
    if (contactForm) {
      contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        try {
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: data.name,
              email: data.email,
              businessType: data.service,
              message: `Service Needed: ${data.service}\nBudget: ${data.budget}\n\n${data.message || 'No additional message provided.'}`,
            }),
          });

          const result = await response.json();

          if (response.ok && result.success) {
            // Success! Show success message
            alert('✓ Thank you! Your message has been sent successfully. We will get back to you within 24 hours.');
            contactForm.reset();
          } else {
            alert(result.error || 'Failed to send message. Please try again or email us directly at prowebs4you@gmail.com');
          }
        } catch (error) {
          console.error('Error submitting form:', error);
          alert('Failed to send message. Please try again or contact us directly at prowebs4you@gmail.com');
        }
      });
    }

    // Animate on Scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.service-card, .portfolio-item').forEach(el => {
      const element = el as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-brand">
            <span className="logo">Webs4U</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact" className="btn-primary">Get Quote</a></li>
          </ul>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">We Build Websites That Build Businesses</h1>
            <p className="hero-subtitle">We design, build, and launch high-performance websites — fast, affordable, and custom-tailored to your goals.</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Start Your Project</a>
              <a href="#portfolio" className="btn btn-secondary">View Our Work</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="floating-card card-1"></div>
            <div className="floating-card card-2"></div>
            <div className="floating-card card-3"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Everything you need to establish a powerful online presence</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🏢</div>
              <h3>Business Websites</h3>
              <p>Professional websites that represent your brand and drive customer engagement.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>Portfolio Websites</h3>
              <p>Showcase your work and attract clients with a stunning portfolio site.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🛒</div>
              <h3>E-Commerce Stores</h3>
              <p>Complete online stores with secure payment processing and inventory management.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📅</div>
              <h3>Booking Systems</h3>
              <p>Streamline appointments and reservations with integrated booking solutions.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🚀</div>
              <h3>Landing Pages</h3>
              <p>High-converting landing pages designed to turn visitors into customers.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Performance Optimization</h3>
              <p>Lightning-fast load times and SEO optimization to help your website rank higher.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-header">
            <h2>Our Portfolio</h2>
            <p>See what we've built for our clients</p>
          </div>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="portfolio-image">
                <div className="portfolio-overlay">
                  <a href="https://github.com/MoAmanjee" target="_blank" rel="noopener noreferrer" className="portfolio-link">View Project →</a>
                </div>
              </div>
              <div className="portfolio-info">
                <h3>E-Commerce Store</h3>
                <p>Full-featured online shopping platform</p>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">
                <div className="portfolio-overlay">
                  <a href="https://github.com/MoAmanjee" target="_blank" rel="noopener noreferrer" className="portfolio-link">View Project →</a>
                </div>
              </div>
              <div className="portfolio-info">
                <h3>Portfolio Website</h3>
                <p>Creative showcase for artists</p>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">
                <div className="portfolio-overlay">
                  <a href="https://github.com/MoAmanjee" target="_blank" rel="noopener noreferrer" className="portfolio-link">View Project →</a>
                </div>
              </div>
              <div className="portfolio-info">
                <h3>SaaS Landing Page</h3>
                <p>High-converting product page</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Story</h2>
              <p className="intro-text">Webs4U was founded by two passionate Computer Science Honours graduates who shared a single goal — to make professional, high-performing websites accessible to everyone.</p>
              <p>After years of studying code, design, and systems architecture, we realized that technology isn't just about algorithms — it's about people. We wanted to use our skills to help small businesses, startups, and entrepreneurs tell their stories online through clean design and smart engineering.</p>
              <p>What started as late-night coding sessions between two friends became a growing digital brand built on integrity, creativity, and results.</p>
              <div className="mission-box">
                <p className="mission-text">At Webs4U, we don't just build websites — we build digital experiences that inspire trust and drive success.</p>
              </div>
              <p className="mission-simple">Our mission is simple: to help others grow through technology, one website at a time.</p>
              <div className="features-list">
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <div>
                    <h4>Fast Turnaround</h4>
                    <p>Get your website launched quickly without compromising quality</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <div>
                    <h4>Transparent Pricing</h4>
                    <p>No hidden fees. Clear, upfront pricing starting from R2,000</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <div>
                    <h4>Ongoing Support</h4>
                    <p>We're here for you even after your website goes live</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <div>
                    <h4>Modern Technology</h4>
                    <p>Built with the latest tools and best practices</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">Websites Built</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">98%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">2+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Get Your Free Quote</h2>
            <p>Tell us about your project and we'll get back to you within 24 hours</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Build Something Amazing</h3>
              <p>Ready to take your business online? Fill out the form and we'll discuss your project in detail.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <strong>Email</strong>
                    <p>Prowebs4you@gmail.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <div>
                    <strong>Phone</strong>
                    <p>(060) 827 0838</p>
                    <p>(060) 036 2113</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">⏰</span>
                  <div>
                    <strong>Response Time</strong>
                    <p>Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
            <form className="contact-form" id="contactForm">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Needed</label>
                <select id="service" name="service" required>
                  <option value="">Select a service</option>
                  <option value="business-website">Business Website</option>
                  <option value="portfolio">Portfolio Website</option>
                  <option value="ecommerce">E-Commerce Store</option>
                  <option value="booking">Booking System</option>
                  <option value="landing-page">Landing Page</option>
                  <option value="redesign">Website Redesign</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="budget">Budget Range</label>
                <select id="budget" name="budget" required>
                  <option value="">Select budget range</option>
                  <option value="2000-3000">R2,000 - R3,000</option>
                  <option value="3000-4500">R3,000 - R4,500</option>
                  <option value="4500-8000">R4,500 - R8,000</option>
                  <option value="over-8000">Over R8,000</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Webs4U</h3>
              <p>Building beautiful websites that drive results.</p>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Web Design</a></li>
                <li><a href="#services">Web Development</a></li>
                <li><a href="#services">E-Commerce</a></li>
                <li><a href="#services">Maintenance</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <div className="social-links">
                <a href="https://github.com/MoAmanjee" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
                <a href="mailto:Prowebs4you@gmail.com" aria-label="Email">Email</a>
                <a href="tel:0608270838" aria-label="Phone">Phone</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Webs4U. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
