import React, { useState, useEffect, useRef, useCallback } from 'react';
import './index.css';
import logoImg from './assets/vybzroulette-img.jpg';

/* ============================================================
   VybzRoulette — Elite Premium Landing Page
   CRO Frameworks: MECLABS, 7-Principle, Fogg, ResearchXL
   AIDA Flow: Hero → Trust → Transform → HowItWorks →
              Success → Features → Pricing → Urgency → Footer
   ============================================================ */

// ─── Inline SVG Icons (zero dependencies) ───

const IconCheck = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const IconArrowRight = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

const IconGlobe = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const IconZap = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const IconShield = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconDollar = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const IconChevronUp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const IconX = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const IconLock = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const IconStar = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const IconPlay = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const IconTrendingUp = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
  </svg>
);

// ─── Scroll Reveal Hook ───

function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

function RevealSection({ children, className = '', direction = 'up' }) {
  const ref = useScrollReveal();
  const dirClass = direction === 'left' ? 'reveal-left' : direction === 'right' ? 'reveal-right' : 'reveal';
  return (
    <div ref={ref} className={`${dirClass} ${className}`}>
      {children}
    </div>
  );
}

// ═══════════════════════════════════════════════
// SECTION 1: NAVBAR — Sticky + Glassmorphism
// ═══════════════════════════════════════════════

function Navbar({ onDemoClick }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container">
        <a href="#" className="logo">
          <img src={logoImg} alt="VybzRoulette" className="logo-img" />
        </a>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button className="btn btn-outline navbar-cta" onClick={onDemoClick} style={{ border: '1px solid rgba(255,255,255,0.15)' }}>
            See Demo
          </button>
          <a href="#pricing" className="btn btn-primary navbar-cta">
            Claim Your Stage <IconArrowRight size={14} />
          </a>
        </div>
      </div>
    </nav>
  );
}

// ═══════════════════════════════════════════════
// SECTION 2: HERO — PAS Framework (3-Second Rule)
// Motivation: Legacy/Status → Value: Outcome-first
// ═══════════════════════════════════════════════

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-eyebrow">
          ✦ Only 13 VIP spots remaining this quarter
        </div>

        <h1>
          Grab your very own<br />
          world-class website<br />
          <span className="text-gradient">on the global stage.</span>
        </h1>

        <p className="hero-sub">
          Instantly elevate your brand as an elite creator and 
          upgrade from local to respected internationally recognized 
          superstar with a sleek, high-converting personal 
          website reaching premium audiences worldwide - 
          funneling traffic directly to your private Telegram channel.
        </p>

        <div className="hero-cta-group">
          <a href="#pricing" className="btn btn-primary btn-pulse hero-cta" id="hero-cta">
            Claim Your Global Stage Now <IconArrowRight />
          </a>
          <div className="hero-guarantee">
            <IconLock size={14} />
            <span>Performance Guarantee · Go Live in 48hrs</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════
// SECTION 3: TRUST BAR — Layered Social Proof
// ═══════════════════════════════════════════════

function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="container trust-content">
        <div className="trust-item">
          <strong>$2M+</strong> Creator Revenue Unlocked
        </div>
        <div className="trust-item">
          <strong>🇺🇸 🇬🇧 🇦🇪</strong> Premium Paying Audiences
        </div>
        <div className="trust-item">
          <strong>100%</strong> Platform-Ban Proof
        </div>
        <div className="trust-item">
          <strong>48hr</strong> Deployment Speed
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════
// SECTION 4: TRANSFORMATION — BAB Framework  
// Before → After → Bridge
// ═══════════════════════════════════════════════

function Transformation() {
  const ref = useScrollReveal();

  return (
    <section className="section transformation" id="transformation">
      <div className="container">
        <RevealSection>
          <div className="section-head">
            <h2>The <span className="text-gradient">Elevation</span></h2>
            <p>Your content has always been world-class. It's time your positioning, bank account, and global recognition matched it.</p>
          </div>
        </RevealSection>

        <div className="transform-grid" ref={ref}>
          <div className="transform-card transform-card--before reveal-left">
            <div className="transform-card__label">
              ✕ Where You Are Now
            </div>
            <h3>Playing Small</h3>
            <ul>
              <li>
                <IconX size={16} />
                Relying on inconsistent local tips that barely cover your effort.
              </li>
              <li>
                <IconX size={16} />
                Link-in-bio pages that look amateur and convert zero high-ticket subs.
              </li>
              <li>
                <IconX size={16} />
                Living in constant fear of platform bans destroying your entire business overnight.
              </li>
              <li>
                <IconX size={16} />
                Stuck competing with millions locally for attention that pays in pennies.
              </li>
            </ul>
          </div>

          <div className="transform-card transform-card--after reveal-right">
            <div className="transform-card__label">
              ✦ Where VybzRoulette Takes You
            </div>
            <h3>Commanding the Global Stage</h3>
            <ul>
              <li>
                <IconCheck />
                Wake up to $500–$2,000+ weekly from US, UK, and EU premium subscribers.
              </li>
              <li>
                <IconCheck />
                An ultra-sleek personal brand hub that immediately signals luxury and status.
              </li>
              <li>
                <IconCheck />
                Bulletproof infrastructure that nobody can ban — your stage, forever.
              </li>
              <li>
                <IconCheck />
                Instant status elevation: you become the international name people pay to access.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════
// SECTION 5: HOW IT WORKS — Fogg (High Ability)
// Dead-simple steps → Eliminate friction
// ═══════════════════════════════════════════════

function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Claim Your Stage',
      desc: 'Secure your exclusive VybzRoulette profile. We custom-design your premium digital presence around your brand identity.'
    },
    {
      num: '02',
      title: 'Connect Your Channels',
      desc: 'Link your Telegram VIP channels instantly. Our smart-routing system creates seamless, invisible funnels for your audience.'
    },
    {
      num: '03',
      title: 'Go International',
      desc: 'We optimize your site to rank and convert English-speaking international traffic — positioning you for the audiences that pay the most.'
    },
    {
      num: '04',
      title: 'Collect USD',
      desc: 'Premium subscribers pay via secure gateways that settle directly into your dollar accounts. No middlemen. No delays.'
    }
  ];

  return (
    <section className="section how-it-works" id="how-it-works">
      <div className="container">
        <RevealSection>
          <div className="section-head">
            <h2>From Local to <span className="text-gold">Global</span> in 48 Hours</h2>
            <p>Four effortless steps. No coding. No complexity. Just your talent, amplified to the world.</p>
          </div>
        </RevealSection>

        <div className="steps-grid">
          {steps.map((step, i) => (
            <RevealSection key={i}>
              <div className="step-card">
                <div className="step-number">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════
// SECTION 6: VIP SUCCESS STORIES — Social Proof
// ResearchXL: Validated proof reduces anxiety
// ═══════════════════════════════════════════════

function SuccessStories() {
  const stories = [
    {
      initials: 'AT',
      name: 'Amara T.',
      role: 'Elite Content Creator',
      revenue: 'From ₦5k/day → $850/week',
      quote: '"I was fighting for tips on local platforms. VybzRoulette made my brand look so premium, I signed three international clients in my first week. It completely changed how the world values me."'
    },
    {
      initials: 'DK',
      name: 'David K.',
      role: 'Digital Entertainer & Influencer',
      revenue: 'Ranked Top 1% Globally',
      quote: '"The Telegram integration is flawless. I send my VybzRoulette link and they convert instantly. My subscriber retention is up 40% because the entry experience looks impossibly professional."'
    },
    {
      initials: 'SM',
      name: 'Sophie M.',
      role: 'International Private Model',
      revenue: 'Crossed $5k Monthly',
      quote: '"Since switching to my own VybzRoulette domain, I\'ve had zero platform downtime. My US clients trust the experience immediately. This is the stage I always deserved."'
    }
  ];

  return (
    <section className="section success-stories" id="success-stories">
      <div className="container">
        <RevealSection>
          <div className="section-head">
            <h2>They Claimed Their <span className="text-gradient">Stage</span></h2>
            <p>Real creators who stopped playing small — and started commanding the recognition and revenue they deserve.</p>
          </div>
        </RevealSection>

        <div className="testimonials-grid">
          {stories.map((s, i) => (
            <RevealSection key={i}>
              <div className="testimonial">
                <div className="testi-stars">★★★★★</div>
                <p className="testi-quote">{s.quote}</p>
                <div className="testi-revenue">
                  <IconTrendingUp /> {s.revenue}
                </div>
                <div className="testi-footer">
                  <div className="testi-avatar">{s.initials}</div>
                  <div className="testi-info">
                    <h4>{s.name}</h4>
                    <span>{s.role}</span>
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════
// SECTION 7: PREMIUM FEATURES — FAB Framework
// Feature → Advantage → Benefit (status outcome)
// ═══════════════════════════════════════════════

function Features() {
  const features = [
    {
      icon: <IconGlobe />,
      title: 'Global SEO Dominance',
      desc: 'Built-in metadata and schema markup that pushes your profile into US, UK, and EU search results automatically.',
      benefit: '→ Your name appears where premium audiences are searching'
    },
    {
      icon: <IconZap />,
      title: 'Telegram Redirect Mastery',
      desc: 'Zero-friction, one-click funnels that guide international visitors directly into your paid Telegram communities.',
      benefit: '→ Every click becomes revenue, not a lost visitor'
    },
    {
      icon: <IconShield />,
      title: 'Bulletproof Infrastructure',
      desc: 'Enterprise-grade hosting that will never take down your brand — even as you scale to thousands of concurrent visitors.',
      benefit: '→ Your stage stays live while competitors get banned'
    },
    {
      icon: <IconDollar />,
      title: 'Dollar-Tracking Analytics',
      desc: 'See exactly which traffic sources, countries, and campaigns bring your highest-paying international subscribers.',
      benefit: '→ Double down on what works, cut what doesn\'t'
    },
    {
      icon: <IconStar />,
      title: 'Premium Brand Templates',
      desc: 'Conversion-optimized themes designed by the same minds behind world-class creator brands. Your site screams luxury.',
      benefit: '→ First impressions that command premium pricing'
    },
    {
      icon: <IconPlay size={24} />,
      title: 'Custom Domain Included',
      desc: 'Your own .com domain — fully branded, fully yours. No shared platform URLs diluting your professional presence.',
      benefit: '→ You own your stage. Period.'
    }
  ];

  return (
    <section className="section features-section" id="features">
      <div className="container">
        <RevealSection>
          <div className="section-head">
            <h2>Engineered for <span className="text-magenta">Superstardom</span></h2>
            <p>Every pixel, every line of code, every integration — ruthlessly optimized to elevate your brand and maximize your revenue.</p>
          </div>
        </RevealSection>

        <div className="features-grid">
          {features.map((f, i) => (
            <RevealSection key={i}>
              <div className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <div className="feature-benefit">{f.benefit}</div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════
// SECTION 8: PRICING — Scarcity + Guarantee
// Hick's Law: One primary option, minimal choices
// ═══════════════════════════════════════════════

function Pricing({ pricing, visibleTier }) {
  const showRising = visibleTier === 'all' || visibleTier === 'basic';
  const showSuperstar = visibleTier === 'all' || visibleTier === 'premium';

  return (
    <section className="section pricing-section" id="pricing">
      <div className="container">
        <RevealSection>
          <div className="section-head">
            <h2>Your <span className="text-magenta">Unfair Advantage</span></h2>
            <p>Founder pricing is limited to the next 50 elite creators. 37 spots already claimed. Once they're gone, prices increase permanently.</p>
          </div>
        </RevealSection>

        <RevealSection>
          <div className="pricing-grid">
            {/* Starter Tier */}
            {showRising && (
              <div className="price-card">
                <div className="price-tier">Getting Started</div>
                <div className="price-name">Rising Star</div>
                <p className="price-tagline">For creators ready to go global</p>
                <div className="price-amount-wrap">
                  <div className="price-amount">
                    <span className="currency">{pricing.symbol}</span>
                    {pricing.risingStar}
                    <span className="period">/mo</span>
                  </div>
                </div>
                <p className="price-billing">Billed quarterly — {pricing.symbol}{pricing.risingStarTotal} total</p>
                <ul className="price-features">
                  <li><IconCheck size={18} /> 1 Premium Branded Landing Page</li>
                  <li><IconCheck size={18} /> Standard Telegram Integration</li>
                  <li><IconCheck size={18} /> Basic Analytics Dashboard</li>
                  <li><IconCheck size={18} /> Mobile-Optimized Design</li>
                </ul>
                <a
                  href="https://t.me/SonOfanOG?text=I%20want%20to%20claim%20my%20Rising%20Star%20VybzRoulette%20stage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Get Started
                </a>
              </div>
            )}

            {/* Featured Tier */}
            {showSuperstar && (
              <div className="price-card featured">
                <div className="featured-badge">Most Popular · Highest ROI</div>
                <div className="price-tier">Maximum Impact</div>
                <div className="price-name">Global Superstar</div>
                <p className="price-tagline">Command maximum USD revenue</p>
                <div className="price-amount-wrap">
                  <div className="price-amount">
                    <span className="currency">{pricing.symbol}</span>
                    {pricing.superstar}
                    <span className="period">/mo</span>
                  </div>
                </div>
                <p className="price-billing">Billed quarterly — {pricing.symbol}{pricing.superstarTotal} total</p>
                <ul className="price-features">
                  <li><IconCheck size={18} /> Premium Conversion-Optimized Themes</li>
                  <li><IconCheck size={18} /> Advanced Telegram Redirect Funnels</li>
                  <li><IconCheck size={18} /> Custom Domain (.com) Included</li>
                  <li><IconCheck size={18} /> Global SEO Booster</li>
                  <li><IconCheck size={18} /> Dollar-Tracking Analytics</li>
                  <li><IconCheck size={18} /> Priority 48hr Deployment</li>
                </ul>
                <a
                  href="https://t.me/SonOfanOG?text=Please%20sign%20me%20up%20for%20my%20Global%20Superstar%20VybzRoulette%20stage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-pulse"
                  id="pricing-cta"
                >
                  Claim Superstar Status <IconArrowRight />
                </a>
              </div>
            )}
          </div>
        </RevealSection>

        <RevealSection>
          <div className="pricing-guarantee">
            <IconShield />
            <p>
              <strong>30-Day Performance Guarantee.</strong> If your VybzRoulette stage doesn't attract at least one international subscriber within 30 days, we'll rebuild and re-optimize your entire presence — completely free.
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════
// SECTION 9: URGENCY / FINAL CLOSE — 4Ps Framework
// Picture → Promise → Prove → Push
// ═══════════════════════════════════════════════

function UrgencyClose() {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 14, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const totalSec = prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1;
        if (totalSec <= 0) return { hours: 0, minutes: 0, seconds: 0 };
        return {
          hours: Math.floor(totalSec / 3600),
          minutes: Math.floor((totalSec % 3600) / 60),
          seconds: totalSec % 60
        };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section urgency-section" id="urgency">
      <div className="container">
        <RevealSection>
          <div className="urgency-content">
            <h2 className="urgency-heading">
              The Spotlight <span className="text-magenta">Won't Wait.</span>
            </h2>

            <p className="urgency-sub">
              Every day you wait is another day a lesser talent claims the dollar-paying 
              audience that belongs to you. Founder pricing expires when the last spot fills. 
              Your stage is ready — the only question is whether you'll claim it.
            </p>

            <div className="countdown-wrap">
              <div className="countdown-unit">
                <div className="countdown-value">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className="countdown-label">Hours</div>
              </div>
              <div className="countdown-sep">:</div>
              <div className="countdown-unit">
                <div className="countdown-value">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="countdown-label">Minutes</div>
              </div>
              <div className="countdown-sep">:</div>
              <div className="countdown-unit">
                <div className="countdown-value">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="countdown-label">Seconds</div>
              </div>
            </div>

            <br />

            <a href="#pricing" className="btn btn-primary btn-pulse urgency-cta" id="urgency-cta">
              Claim My Global Stage Now <IconArrowRight />
            </a>

            <p className="urgency-footnote">
              🔒 Your information is fully encrypted. Cancel anytime. Zero risk.
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════
// DEMO MODAL — Interactive Transformation Preview
// ═══════════════════════════════════════════════

function DemoModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <IconX size={18} />
        </button>

        <div className="modal-header">
          <h2>See Your <span className="text-gradient">Transformation</span></h2>
          <p>This is what happens when your brand gets the VybzRoulette treatment.</p>
        </div>

        <div className="modal-body">
          <div className="demo-comparison">
            {/* Before Panel */}
            <div className="demo-panel demo-panel--before">
              <div className="demo-panel__label">✕ Before VybzRoulette</div>
              <div className="demo-mockup">
                <div className="demo-mockup-bar demo-mockup-bar--medium" style={{ opacity: 0.4 }} />
                <div className="demo-mockup-bar demo-mockup-bar--long" style={{ opacity: 0.3 }} />
                <div className="demo-mockup-bar demo-mockup-bar--short" style={{ opacity: 0.2 }} />
                <div className="demo-mockup-bar demo-mockup-bar--medium" style={{ opacity: 0.25 }} />
                <div className="demo-mockup-bar demo-mockup-bar--long" style={{ opacity: 0.15 }} />
              </div>
              <div className="demo-stat-row">
                <div className="demo-stat">
                  <div className="demo-stat-value">0.2%</div>
                  <div className="demo-stat-label">Conversion</div>
                </div>
                <div className="demo-stat">
                  <div className="demo-stat-value">₦5k</div>
                  <div className="demo-stat-label">Daily Rev</div>
                </div>
                <div className="demo-stat">
                  <div className="demo-stat-value">Local</div>
                  <div className="demo-stat-label">Audience</div>
                </div>
              </div>
            </div>

            {/* After Panel */}
            <div className="demo-panel demo-panel--after">
              <div className="demo-panel__label">✦ After VybzRoulette</div>
              <div className="demo-mockup">
                <div className="demo-mockup-bar demo-mockup-bar--medium" />
                <div className="demo-mockup-bar demo-mockup-bar--long" />
                <div className="demo-mockup-bar demo-mockup-bar--short" />
                <div className="demo-mockup-bar demo-mockup-bar--medium" />
                <div className="demo-mockup-bar demo-mockup-bar--long" />
              </div>
              <div className="demo-stat-row">
                <div className="demo-stat">
                  <div className="demo-stat-value">12.4%</div>
                  <div className="demo-stat-label">Conversion</div>
                </div>
                <div className="demo-stat">
                  <div className="demo-stat-value">$340</div>
                  <div className="demo-stat-label">Daily Rev</div>
                </div>
                <div className="demo-stat">
                  <div className="demo-stat-value">Global</div>
                  <div className="demo-stat-label">Audience</div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-cta-wrap">
            <a
              href="#pricing"
              className="btn btn-primary btn-pulse"
              onClick={onClose}
            >
              Build My Stage Now <IconArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════
// FOOTER — Minimal, Trust-reinforcing
// ═══════════════════════════════════════════════

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-logo">
          <img src={logoImg} alt="VybzRoulette" className="logo-img" />
        </div>
        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#success-stories">Success Stories</a>
        </div>
        <p>&copy; {new Date().getFullYear()} VybzRoulette. All rights reserved. Your stage. Your legacy.</p>
      </div>
    </footer>
  );
}

// ═══════════════════════════════════════════════
// FLOATING CTA BAR — Persistent Trigger (Fogg)
// ═══════════════════════════════════════════════

function FloatingCtaBar({ visible }) {
  return (
    <div className={`floating-cta-bar ${visible ? 'visible' : ''}`}>
      <span className="floating-cta-text">
        ✦ <strong>13 founder spots</strong> remaining at this price
      </span>
      <a href="#pricing" className="btn btn-primary">
        Claim Your Stage <IconArrowRight size={14} />
      </a>
    </div>
  );
}

// ═══════════════════════════════════════════════
// APP — Root Composition
// ═══════════════════════════════════════════════

export default function App() {
  const [showFloating, setShowFloating] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [pricing, setPricing] = useState({
    symbol: '$',
    risingStar: '15',
    risingStarTotal: '45',
    superstar: '60',
    superstarTotal: '180',
  });

  // Path detection for tier visibility
  const path = window.location.pathname;
  const visibleTier = path.includes('/premium') ? 'premium' : path.includes('/basic') ? 'basic' : 'all';

  useEffect(() => {
    const handleScroll = () => {
      setShowFloating(window.scrollY > 800);
      setShowScrollTop(window.scrollY > 1200);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Geo-Detection for localized pricing (Nigeria → Naira)
    fetch('https://api.country.is')
      .then(res => res.json())
      .then(data => {
        if (data.country === 'NG') {
          setPricing({
            symbol: '₦',
            risingStar: '15,000',
            risingStarTotal: '45,000',
            superstar: '75,000',
            superstarTotal: '225,000',
          });
        }
      })
      .catch(err => console.error('Geo-detection failed:', err));

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar onDemoClick={() => setDemoOpen(true)} />

      <main>
        <Hero />
        <TrustBar />
        <Transformation />
        <HowItWorks />
        <SuccessStories />
        <Features />
        <Pricing pricing={pricing} visibleTier={visibleTier} />
        <UrgencyClose />
      </main>

      <Footer />

      {/* Floating Elements */}
      <FloatingCtaBar visible={showFloating} />

      <button
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          opacity: showScrollTop ? 1 : 0,
          pointerEvents: showScrollTop ? 'auto' : 'none',
          transition: 'all 0.3s ease'
        }}
        aria-label="Scroll to top"
      >
        <IconChevronUp />
      </button>

      {/* Interactive Demo Modal */}
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
}
