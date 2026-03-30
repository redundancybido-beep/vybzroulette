import React, { useState, useEffect } from 'react';
import './index.css';

// --- Icons (Inline SVGs to avoid dependencies) ---
const CheckCircle = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-magenta"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;
const Globe = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>;
const Zap = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;
const Shield = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>;
const ArrowRight = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>;
const DollarSign = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>;

// --- Components ---

const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <div className="logo text-gradient">VybzRoulette.</div>
      <a href="#pricing" className="btn btn-primary btn-pulse" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>
        Claim Stage <ArrowRight />
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="hero container animate-fade-in">
    <div className="revenue-badge" style={{ marginBottom: '24px' }}>
      🌟 Join 247+ creators earning in USD today
    </div>
    <h1 style={{ color: 'white' }}>
      Stop Settling for local currency.
      <br />
      <span className="text-magenta">Command US Dollars.</span>
    </h1>
    <p>
      The private digital stage that is elevating local talent into global superstars. Get a high-converting personal website that funnels international traffic directly to your Telegram paid channels. 
    </p>
    <a href="#pricing" className="btn btn-primary btn-pulse" style={{ fontSize: '1.2rem', padding: '20px 40px' }}>
      Claim My Global Stage Now <ArrowRight />
    </a>
    <div style={{ marginTop: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
      🔒 30-Day First USD Subscriber Guarantee • No coding required
    </div>
  </section>
);

const TrustBar = () => (
  <div className="trust-bar">
    <div className="container trust-content animate-fade-in">
      <div className="trust-item">
        <strong>$2M+</strong> Creator Revenue Generated
      </div>
      <div className="trust-item">
        <strong>🇺🇸 🇬🇧 🇦🇪</strong> Top Paying Audiences
      </div>
      <div className="trust-item">
        <strong>100%</strong> Adult-Safe & Compliant
      </div>
      <div className="trust-item">
        <strong>24/7</strong> Automated Dollar Funnel
      </div>
    </div>
  </div>
);

const Transformation = () => (
  <section className="section transformation" id="transformation">
    <div className="container">
      <div className="section-head">
        <h2>The <span className="text-gradient">Transformation</span></h2>
        <p>Your content has always been world-class. It’s time your bank account matched it.</p>
      </div>
      <div className="grid-2">
        <div className="card card-before">
          <h3><span style={{color: 'red'}}>✕</span> The Local Struggle</h3>
          <ul>
            <li>Relying on inconsistent Naira tips.</li>
            <li>Link-in-bios that look cheap and convert zero high-ticket subs.</li>
            <li>Constant fear of social media bans destroying your business.</li>
            <li>Stuck competing with millions locally for pennies.</li>
          </ul>
        </div>
        <div className="card card-after">
          <h3><CheckCircle /> The Global Superstardom</h3>
          <ul>
            <li>Wake up to $100-$500 weekly from US & EU subscribers.</li>
            <li>A premium, ultra-sleek personal brand hub that screams "luxury".</li>
            <li>Bulletproof Telegram funnels that nobody can ban.</li>
            <li>Instant status elevation: You are now an international artiste.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="section" style={{ background: 'var(--dark-bg)' }}>
    <div className="container">
      <div className="section-head">
        <h2>Speed to <span className="text-gold">First USD</span></h2>
        <p>From local hustler to global earner in under 5 minutes.</p>
      </div>
      <div className="steps-grid">
        <div className="step-card">
          <div className="step-number">1</div>
          <h3>Claim Your Stage</h3>
          <p>Secure your VybzRoulette profile and choose a premium template optimized for high-ticket conversion.</p>
        </div>
        <div className="step-card">
          <div className="step-number">2</div>
          <h3>Connect Telegram</h3>
          <p>Link your VIP Telegram channel instantly. Our smart-routing hides your content from prying eyes.</p>
        </div>
        <div className="step-card">
          <div className="step-number">3</div>
          <h3>Go Global</h3>
          <p>We automatically format your site to rank and convert English-speaking international traffic seamlessly.</p>
        </div>
        <div className="step-card">
          <div className="step-number">4</div>
          <h3>Collect USD</h3>
          <p>Subscribers pay via secure gateways that instantly settle into your dollar accounts. No middleman fees.</p>
        </div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="section">
    <div className="container">
      <div className="section-head">
        <h2>Engineered for <span className="text-magenta">Conversions</span></h2>
        <p>Every pixel is ruthlessly optimized to turn casual international visitors into lifelong paying subscribers.</p>
      </div>
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon"><Globe /></div>
          <h3>Global SEO Dominance</h3>
          <p>Built-in metadata formatting that pushes your profile to US and UK search results automatically.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon"><Zap /></div>
          <h3>Telegram Redirect Mastery</h3>
          <p>Zero-friction one-click funnels directly into your paid Telegram communities.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon"><Shield /></div>
          <h3>Adult-Safe Infrastructure</h3>
          <p>Bulletproof hosting that won't take down your page just as you go viral.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon"><DollarSign /></div>
          <h3>Dollar-Tracking Analytics</h3>
          <p>See exactly which traffic sources are bringing you the highest paying international clients.</p>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="section" style={{ background: 'var(--base-bg)' }}>
    <div className="container">
      <div className="section-head">
        <h2>They Claimed Their <span className="text-gradient">Stage</span></h2>
        <p>Real stories from local creators who stopped settling for less.</p>
      </div>
      <div className="testimonials-grid">
        <div className="testimonial">
          <div className="testi-header">
            <div className="avatar"></div>
            <div>
              <h4 style={{color: 'white'}}>Amara T.</h4>
              <div style={{fontSize: '0.8rem', color: 'var(--text-secondary)'}}>Content Creator</div>
            </div>
          </div>
          <div className="revenue-badge">From ₦5k/day to $850/week</div>
          <p>"I was fighting for tips on local platforms. VybzRoulette made my brand look so premium, I signed three clients from Dubai in my first week. It completely changed how people value me."</p>
        </div>
        <div className="testimonial">
          <div className="testi-header">
            <div className="avatar"></div>
            <div>
              <h4 style={{color: 'white'}}>David K.</h4>
              <div style={{fontSize: '0.8rem', color: 'var(--text-secondary)'}}>Digital Entertainer</div>
            </div>
          </div>
          <div className="revenue-badge">Ranked Top 1% Global</div>
          <p>"The Telegram integration is flawless. I send my custom VybzRoulette link, and they convert instantly. My subscriber retention is up 40% because the entry looks so professional."</p>
        </div>
        <div className="testimonial">
          <div className="testi-header">
            <div className="avatar"></div>
            <div>
              <h4 style={{color: 'white'}}>Sophie M.</h4>
              <div style={{fontSize: '0.8rem', color: 'var(--text-secondary)'}}>Private Model</div>
            </div>
          </div>
          <div className="revenue-badge">Crossed $5k Monthly</div>
          <p>"I was terrified of link bans. Since switching to my own VybzRoulette domain, I've had zero downtime. My US clients trust the checkout page immediately. Pure magic."</p>
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section className="section pricing" id="pricing">
    <div className="container">
      <div className="section-head">
        <h2>Unfair <span className="text-magenta">Advantage</span></h2>
        <p>Founder pricing limited to the first 50 creators. 37 spots currently filled.</p>
      </div>
      <div className="pricing-grid">
        
        {/* Tier 1 */}
        <div className="price-card">
          <div className="price-header">
            <h3>Hustler Stage</h3>
            <p style={{color: 'var(--text-secondary)'}}>For new talent</p>
            <div className="price-amount">$19<span>/mo</span></div>
          </div>
          <ul className="price-features">
            <li><CheckCircle /> 1 Custom WaaS Landing Page</li>
            <li><CheckCircle /> Standard Telegram Integration</li>
            <li><CheckCircle /> Basic Analytics</li>
          </ul>
          <button className="btn" style={{ background: '#222', color: 'white' }}>Get Started</button>
        </div>

        {/* Tier 2 */}
        <div className="price-card popular">
          <div className="popular-badge">MOST POPULAR • HIGH CONVERSION</div>
          <div className="price-header">
            <h3 className="text-magenta">Global Superstar</h3>
            <p style={{color: 'var(--text-secondary)'}}>Command maximum USD</p>
            <div className="price-amount">$49<span>/mo</span></div>
          </div>  
          <ul className="price-features">
            <li><CheckCircle /> Premium Conversion-Optimized Themes</li>
            <li><CheckCircle /> Advanced Telegram Redirect Funnels</li>
            <li><CheckCircle /> Custom Domain (.com) Included</li>
            <li><CheckCircle /> Global SEO Booster</li>
            <li><CheckCircle /> Priority 24/7 Support</li>
          </ul>
          <button className="btn btn-primary btn-pulse">Claim Superstar Status</button>
        </div>

        {/* Tier 3 */}
        <div className="price-card">
          <div className="price-header">
            <h3>Agency / Management</h3>
            <p style={{color: 'var(--text-secondary)'}}>For multiple talents</p>
            <div className="price-amount">$199<span>/mo</span></div>
          </div>
          <ul className="price-features">
            <li><CheckCircle /> Up to 10 Creator Profiles</li>
            <li><CheckCircle /> Aggregated Revenue Dashboard</li>
            <li><CheckCircle /> Whitelabel Options</li>
            <li><CheckCircle /> Dedicated Account Manager</li>
          </ul>
          <button className="btn" style={{ background: '#222', color: 'white' }}>Contact Sales</button>
        </div>

      </div>
      
      {/* <div className="guarantee-box">
        <h3 style={{ color: 'var(--accent-gold)', marginBottom: '10px' }}>Our Iron-Clad 30-Day Guarantee</h3>
        <p style={{ color: 'var(--text-secondary)' }}>
          "See Your First International Subs or Refund." If you set up your VybzRoulette stage and don't attract a paying international subscriber within 30 days, we'll refund every penny. You have nothing to lose, and a global empire to gain.
        </p>
      </div> */}

    </div>
  </section>
);

const UrgencyClose = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if(prev.seconds === 0) {
          if(prev.minutes === 0) return {minutes:0, seconds:0};
          return {minutes: prev.minutes - 1, seconds: 59};
        }
        return {...prev, seconds: prev.seconds - 1}
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section" style={{ textAlign: 'center', background: 'var(--base-bg)', paddingBottom: '160px' }}>
      <div className="container">
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>The Spotlight is <span className="text-magenta">Fading.</span></h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '20px auto 40px' }}>
          Every day you wait is another day a lesser talent steals the dollar-paying audience that belongs to you. The founder pricing block is closing.
        </p>
        <div style={{ display: 'inline-flex', gap: '20px', background: 'var(--dark-bg)', padding: '20px 40px', borderRadius: '16px', border: '1px solid rgba(255,0,170,0.3)', marginBottom: '40px' }}>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-magenta)' }}>
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>MINUTES</div>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>:</div>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-magenta)' }}>
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>SECONDS</div>
          </div>
        </div>
        <br/>
        <a href="#pricing" className="btn btn-primary" style={{ fontSize: '1.4rem', padding: '24px 48px', boxShadow: '0 0 50px rgba(255,0,170,0.4)' }}>
          Claim My Global Stage Now <ArrowRight />
        </a>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="logo text-gradient" style={{ marginBottom: '20px' }}>VybzRoulette.</div>
      <p>&copy; {new Date().getFullYear()} VybzRoulette Ecosystem. All rights reserved.</p>
      {/* <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <a href="#" style={{ color: 'var(--text-secondary)' }}>Terms</a>
        <a href="#" style={{ color: 'var(--text-secondary)' }}>Privacy</a>
        <a href="#" style={{ color: 'var(--text-secondary)' }}>Contact</a>
      </div> */}
    </div>
  </footer>
);

export default function App() {
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloating(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Transformation />
        <HowItWorks />
        <Testimonials />
        <Features />
        <Pricing />
        <UrgencyClose />
      </main>
      <Footer />
      
      {/* Persistent Floating CTA */}
      <div className={`floating-cta \${showFloating ? 'animate-fade-in' : ''}`} style={{ opacity: showFloating ? 1 : 0, transition: 'opacity 0.3s' }}>
        <a href="#pricing" className="btn btn-primary btn-pulse" style={{ boxShadow: '0 10px 40px rgba(255,0,170,0.5)' }}>
          Get Started <ArrowRight />
        </a>
      </div>
    </>
  );
}
