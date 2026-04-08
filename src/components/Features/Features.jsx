import React from 'react';
import { IconGlobe, IconZap, IconShield, IconDollar, IconStar, IconPlay } from '../Icons';
import RevealSection from '../RevealSection';
import './Features.css';

const features = [
  { icon: <IconGlobe />, title: 'Global SEO Dominance', desc: 'Built-in metadata and schema markup that pushes your profile into US, UK, and EU search results automatically.', benefit: '→ Your name appears where premium audiences are searching' },
  { icon: <IconZap />, title: 'Telegram Redirect Mastery', desc: 'Zero-friction, one-click funnels that guide international visitors directly into your paid Telegram communities.', benefit: '→ Every click becomes revenue, not a lost visitor' },
  { icon: <IconShield />, title: 'Bulletproof Infrastructure', desc: 'Enterprise-grade hosting that will never take down your brand — even as you scale to thousands of concurrent visitors.', benefit: '→ Your stage stays live while competitors get banned' },
  { icon: <IconDollar />, title: 'Dollar-Tracking Analytics', desc: 'See exactly which traffic sources, countries, and campaigns bring your highest-paying international subscribers.', benefit: '→ Double down on what works, cut what doesn\'t' },
  { icon: <IconStar />, title: 'Premium Brand Templates', desc: 'Conversion-optimized themes designed by the same minds behind world-class creator brands. Your site screams luxury.', benefit: '→ First impressions that command premium pricing' },
  { icon: <IconPlay size={24} />, title: 'Custom Domain Included', desc: 'Your own .com domain — fully branded, fully yours. No shared platform URLs diluting your professional presence.', benefit: '→ You own your stage. Period.' }
];

export default function Features() {
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
