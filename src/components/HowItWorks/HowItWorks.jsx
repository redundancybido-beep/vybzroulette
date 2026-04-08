import React from 'react';
import RevealSection from '../RevealSection';
import './HowItWorks.css';

const steps = [
  { num: '01', title: 'Claim Your Stage', desc: 'Secure your exclusive VybzRoulette profile. We custom-design your premium digital presence around your brand identity.' },
  { num: '02', title: 'Connect Your Channels', desc: 'Link your Telegram VIP channels instantly. Our smart-routing system creates seamless, invisible funnels for your audience.' },
  { num: '03', title: 'Go International', desc: 'We optimize your site to rank and convert English-speaking international traffic — positioning you for the audiences that pay the most.' },
  { num: '04', title: 'Collect USD', desc: 'Premium subscribers pay via secure gateways that settle directly into your dollar accounts. No middlemen. No delays.' }
];

export default function HowItWorks() {
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
