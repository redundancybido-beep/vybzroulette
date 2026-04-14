import React from 'react';
import { IconCheck, IconArrowRight, IconShield } from '../Icons';
import RevealSection from '../RevealSection';
import './Pricing.css';

export default function Pricing({ pricing, visibleTier }) {
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
                  <li><IconCheck size={18} /> Custom Domain (.com) Included</li>
                  <li><IconCheck size={18} /> 1 Premium Branded Landing Page</li>
                  <li><IconCheck size={18} /> Standard Telegram Integration</li>
                  <li><IconCheck size={18} /> Mobile-Optimized Design</li>
                </ul>
                <a href="https://t.me/SonOfanOG?text=I%20want%20to%20claim%20my%20Rising%20Star%20VybzRoulette%20stage" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  Get Started
                </a>
              </div>
            )}

            {showSuperstar && (
              <div className="price-card featured">
                <div className="featured-badge">Most Popular · Highest ROI</div>
                <div className="price-tier">Maximum Impact</div>
                <div className="price-name">Global Superstar</div>
                <p className="price-tagline">Command Premium Luxury Branding for Maximum USD Revenue</p>
                <div className="price-amount-wrap">
                  <div className="price-amount">
                    <span className="currency">{pricing.symbol}</span>
                    {pricing.superstar}
                    <span className="period">/mo</span>
                  </div>
                </div>
                <p className="price-billing">Billed quarterly — {pricing.symbol}{pricing.superstarTotal} total</p>
                <ul className="price-features">
                  <li><IconCheck size={18} /> Custom Domain (.vip) Included</li>
                  <li><IconCheck size={18} /> Premium Conversion-Optimized Themes</li>
                  <li><IconCheck size={18} /> Advanced Telegram Redirect Funnels</li>
                  <li><IconCheck size={18} /> Global SEO Booster</li>
                  <li><IconCheck size={18} /> Dollar-Tracking Analytics</li>
                  <li><IconCheck size={18} /> Priority 48hr Deployment</li>
                </ul>
                <a href="https://t.me/SonOfanOG?text=Please%20sign%20me%20up%20for%20my%20Global%20Superstar%20VybzRoulette%20stage" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-pulse" id="pricing-cta">
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
