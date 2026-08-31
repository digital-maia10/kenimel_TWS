"use client";

import { useEffect } from "react";

const programs = [
  { icon: "◒", title: "Fat Loss", text: "Practical guidance for sustainable body-composition and lifestyle goals." },
  { icon: "✦", title: "Health Care", text: "Everyday wellness support built around your personal needs and routines." },
  { icon: "♡", title: "Skin Care", text: "Simple, consistent approaches to supporting healthier-looking skin." },
  { icon: "✧", title: "Facial Care", text: "Personalized care habits designed to fit your lifestyle and preferences." },
  { icon: "⌁", title: "Nutrition Consultation", text: "Understand your nutrition choices and build habits you can actually maintain." },
];

const heroImages = [
  { src: "/images/personal-care.jpeg", alt: "Personal Care by TWS" },
];

const achievementCards = [
  { title: "A New Chapter", text: "A client story placeholder — from feeling stuck to building a healthier daily routine with consistent guidance." },
  { title: "Progress That Lasts", text: "A client story placeholder — sustainable progress through realistic goals, accountability, and small changes." },
  { title: "Confidence From Within", text: "A client story placeholder — improving wellness habits while feeling more confident and energized." },
];

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

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main>
      <header className="site-header">
        <a href="#home" className="brand" aria-label="TWS home">
          <img className="brand-logo" src="/images/tws-logo.png" alt="TWS Together We Success logo" />
          <div>
            <strong>TWS</strong>
            <span>TOGETHER WE SUCCESS</span>
          </div>
        </a>
        <nav className="nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#programs">Programs</a>
          <a href="#achievements">Clients Achievements</a>
          <a href="#contact" className="nav-cta">Contact</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-background" aria-hidden="true">
          <img
            src={heroImages[0].src}
            alt=""
            className="hero-slide active"
          />
          <div className="hero-overlay" />
        </div>
        <div className="hero-copy reveal is-visible">
          <p className="eyebrow">TWS-CERTIFIED HEALTH CONSULTANTS</p>
          <h1>
            <span className="hero-hook-line hero-hook-line-one">Healthier habits.</span>
            <span className="hero-hook-line hero-hook-line-two">Stronger you.</span>
          </h1>
          <p className="hero-text">
            Personalized wellness guidance from Imelda & Kenneth — helping people from different backgrounds, ages, lifestyles, and goals move toward a healthier version of themselves.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#programs">Explore Programs</a>
            <a className="text-link" href="#about">Meet Imelda & Kenneth →</a>
          </div>
          <div className="hero-note">
            <span>●</span> Your goals. Your pace. Your journey.
          </div>
        </div>
      </section>

      <section id="about" className="about section reveal">
        <div className="about-grid about-grid-full">
          <div className="section-heading about-copy">
            <p className="eyebrow">ABOUT US</p>
            <h2>Two consultants.<br /><em>One shared mission.</em></h2>
            <div className="about-text">
              <p>
                Imelda and Kenneth are TWS-certified health consultants dedicated to helping people make healthier choices in a way that feels realistic, personal, and sustainable.
              </p>
              <p>
                Their clients come from different backgrounds, age groups, lifestyles, and professional environments. Whether the goal is fat loss, better nutrition, personal care, skin care, or simply building healthier daily habits, their approach starts with understanding the individual.
              </p>
              <p>
                Rather than promising overnight results, they focus on practical guidance, consistent support, and habits that can become part of everyday life. The goal is not just to look better, but to feel better and build confidence along the way.
              </p>
            </div>
          </div>
          <div className="about-couple-image">
            <img src="/images/imelda-kenneth.png" alt="Imelda and Kenneth together" />
          </div>
        </div>
      </section>

      <section id="programs" className="programs section reveal">
        <div className="section-heading centered">
          <p className="eyebrow">WHAT WE OFFER</p>
          <h2>Programs built around <em>you.</em></h2>
          <p>Choose a starting point, then let&apos;s shape the journey around your goals and lifestyle.</p>
        </div>
        <div className="programs-content">
          <a className="programs-image" href="#contact" aria-label="Start your TWS wellness journey">
            <img src="/images/what-we-offer-bg.jpeg" alt="TWS health and wellness programs" />
          </a>
        </div>
      </section>

      <section className="visual-break reveal">
        <div className="visual-copy">
          <p className="eyebrow">NUTRITION &amp; HEALTH SUPPLEMENTS</p>
          <h2>Wellness is more than a number on a scale.</h2>
          <p>Support your everyday wellbeing with thoughtful nutrition guidance and health supplements designed to complement your lifestyle, routines, and personal goals.</p>
        </div>
        <div className="visual-placeholder"><img src="/images/nutrition-health.jpeg" alt="Nutrition and health supplements by TWS" /></div>
      </section>

      <section id="achievements" className="achievements section reveal">
        <div className="section-heading centered">
          <p className="eyebrow">CLIENTS ACHIEVEMENTS</p>
          <h2>Every journey has a <span className="story-word">story.</span></h2>
          <p>Placeholder stories for now — this section can later showcase real client transformations, testimonials, and milestones.</p>
        </div>
        <div className="achievement-grid">
          {achievementCards.map((card, index) => (
            <article className="achievement-card" key={card.title}>
              <span>0{index + 1}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <div className="achievement-line" />
            </article>
          ))}
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
