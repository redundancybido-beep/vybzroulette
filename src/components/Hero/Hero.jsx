import React from 'react';
import { IconArrowRight, IconLock } from '../Icons';
import './Hero.css';

export default function Hero() {
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
