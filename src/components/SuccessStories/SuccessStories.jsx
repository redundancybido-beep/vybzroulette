import React from 'react';
import { IconTrendingUp } from '../Icons';
import RevealSection from '../RevealSection';
import './SuccessStories.css';

const stories = [
  { initials: 'AT', name: 'Amara T.', role: 'Elite Content Creator', revenue: 'From ₦5k/day → $850/week', quote: '"I was fighting for tips on local platforms. VybzRoulette made my brand look so premium, I signed three international clients in my first week. It completely changed how the world values me."' },
  { initials: 'DK', name: 'David K.', role: 'Digital Entertainer & Influencer', revenue: 'Ranked Top 1% Globally', quote: '"The Telegram integration is flawless. I send my VybzRoulette link and they convert instantly. My subscriber retention is up 40% because the entry experience looks impossibly professional."' },
  { initials: 'SM', name: 'Sophie M.', role: 'International Private Model', revenue: 'Crossed $5k Monthly', quote: '"Since switching to my own VybzRoulette domain, I\'ve had zero platform downtime. My US clients trust the experience immediately. This is the stage I always deserved."' }
];

export default function SuccessStories() {
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
                <div className="testi-revenue"><IconTrendingUp /> {s.revenue}</div>
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
