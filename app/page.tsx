"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );

    const animatedSections = document.querySelectorAll(".reveal");
    animatedSections.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="site-header">
        <a href="#about" className="brand" aria-label="TWS About Us">
          <img className="brand-logo" src="/images/tws-logo.png" alt="TWS Together We Success logo" />
          <div>
            <strong>TWS</strong>
            <span>TOGETHER WE SUCCESS</span>
          </div>
        </a>
        <nav className="nav" aria-label="Main navigation">
          <a href="#about">About Us</a>
          <a href="#programs">Programs</a>
          <a href="#contact" className="nav-cta">Contact</a>
        </nav>
      </header>

      <section id="about" className="about section reveal is-visible">
        <div className="about-layout">
          <div className="about-image-wrap">
            <img src="/images/biography.jpeg" alt="Kenneth Anderson and Imelda Febriantys" />
          </div>
          <div className="about-details">
            <div className="section-heading about-heading">
              <p className="eyebrow">ABOUT US</p>
              <h2>Two consultants.<br /><em>One shared mission.</em></h2>
            </div>
            <div className="about-profiles">
              <article className="about-profile">
                <h3>Kenneth Anderson</h3>
                <p>TWS Certified Consultant</p>
              </article>
              <article className="about-profile">
                <h3>Imelda Febriantys</h3>
                <p>TWS Certified Consultant</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="programs section reveal">
        <div className="section-heading centered">
          <p className="eyebrow">WHAT WE OFFER</p>
          <h2>Programs built around <em>you.</em></h2>
          <p>Choose a starting point, then let&apos;s shape the journey around your goals and lifestyle.</p>
        </div>
        <div className="programs-gallery">
          <a className="program-gallery-item" href="#contact" aria-label="Start your TWS Fat Loss journey">
            <span>Fat Loss</span>
            <img src="/images/fat-loss.jpeg" alt="TWS Fat Loss" />
          </a>
          <a className="program-gallery-item" href="#contact" aria-label="Start your TWS Personal Care journey">
            <span>Personal Care</span>
            <img src="/images/personal-care-offer.png" alt="TWS Personal Care" />
          </a>
          <a className="program-gallery-item" href="#contact" aria-label="Start your TWS Healthcare journey">
            <span>Healthcare</span>
            <img src="/images/healthcare-offer.png" alt="TWS Healthcare" />
          </a>
        </div>
      </section>

<section id="contact" className="contact section reveal">
        <div className="contact-intro">
          <p className="eyebrow">START YOUR JOURNEY</p>
          <h2>Let&apos;s talk about <em>your goal.</em></h2>
          <p>Have a question or want to understand which program may suit you? Reach out directly to Imelda or Kenneth.</p>
          <div className="contact-message">
            <p>
              Imelda and Kenneth are TWS-certified consultants who believe that wellness should feel personal, practical, and achievable. They work with clients from different backgrounds, business profiles, age groups, and body-goal objectives, offering education, encouragement, and consistent support along the way.
            </p>
            <p className="quote">“Progress becomes more meaningful when you don’t have to make the journey alone.”</p>
          </div>
        </div>

        <div className="contact-profiles">
          <article className="contact-profile">
            <img src="/images/kenneth-portrait.png" alt="Kenneth Anderson" />
            <div className="contact-profile-info">
              <h3>Kenneth Anderson</h3>
              <p>Specializes in personal care, fat-loss and nutritional consultation.</p>
            </div>
            <div className="social-links">
              <a href="https://www.instagram.com/ken.anderss/" target="_blank" rel="noreferrer" aria-label="Kenneth Instagram" title="Kenneth Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5"/><circle cx="12" cy="12" r="4.1"/><circle cx="17.5" cy="6.6" r="1"/></svg>
              </a>
              <a href="https://wa.me/6285810113753" target="_blank" rel="noreferrer" aria-label="WhatsApp Kenneth" title="WhatsApp Kenneth">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.2a8.7 8.7 0 0 0-7.55 13.03L3.3 20.8l4.72-1.23A8.8 8.8 0 1 0 12 3.2Z"/><path d="M8.25 8.1c.2-.42.43-.43.78-.44h.55c.2 0 .4.08.5.33l.65 1.58c.1.24.08.43-.08.62l-.55.67c-.14.17-.16.3-.03.51.3.5.72.98 1.2 1.37.52.43 1.1.76 1.72 1 .2.08.33.06.46-.1l.67-.82c.15-.18.3-.22.52-.13l1.58.75c.23.11.36.16.39.34.04.2-.04.83-.3 1.17-.27.34-.84.58-1.18.6-.3.02-.68.04-1.1-.1-.42-.14-.96-.35-1.64-.66-1.02-.46-1.82-1.02-2.56-1.68-.62-.55-1.15-1.2-1.57-1.91-.31-.52-.63-1.2-.68-1.62-.06-.46.01-.94.25-1.46Z"/></svg>
              </a>
            </div>
          </article>

          <article className="contact-profile">
            <img src="/images/imelda-portrait.png" alt="Imelda Febriantys" />
            <div className="contact-profile-info">
              <h3>Imelda Febriantys</h3>
              <p>Specializes in facial care, fat-loss and skin care.</p>
            </div>
            <div className="social-links">
              <a href="https://www.instagram.com/imeldafebriantys/" target="_blank" rel="noreferrer" aria-label="Imelda Instagram" title="Imelda Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5"/><circle cx="12" cy="12" r="4.1"/><circle cx="17.5" cy="6.6" r="1"/></svg>
              </a>
              <a href="https://wa.me/6281317330101" target="_blank" rel="noreferrer" aria-label="WhatsApp Imelda" title="WhatsApp Imelda">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.2a8.7 8.7 0 0 0-7.55 13.03L3.3 20.8l4.72-1.23A8.8 8.8 0 1 0 12 3.2Z"/><path d="M8.25 8.1c.2-.42.43-.43.78-.44h.55c.2 0 .4.08.5.33l.65 1.58c.1.24.08.43-.08.62l-.55.67c-.14.17-.16.3-.03.51.3.43.72.91 1.2 1.3.52.43 1.1.76 1.72 1 .2.08.33.06.46-.1l.67-.82c.15-.18.3-.22.52-.13l1.58.75c.23.11.36.16.39.34.04.2-.04.83-.3 1.17-.27.34-.84.58-1.18.6-.3.02-.68.04-1.1-.1-.42-.14-.96-.35-1.64-.66-1.02-.46-1.82-1.02-2.56-1.68-.62-.55-1.15-1.2-1.57-1.91-.31-.52-.63-1.2-.68-1.62-.06-.46.01-.94.25-1.46Z"/></svg>
              </a>
            </div>
          </article>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand"><img className="brand-logo small" src="/images/tws-logo.png" alt="TWS Together We Success logo" /><div><strong>TWS</strong><span>TOGETHER WE SUCCESS</span></div></div>
        <p>© {new Date().getFullYear()} TWS Health Consultants. All rights reserved.</p>
      </footer>
    </main>
  );
}
