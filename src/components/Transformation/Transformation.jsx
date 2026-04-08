import React from 'react';
import { IconX, IconCheck } from '../Icons';
import RevealSection from '../RevealSection';
import useScrollReveal from '../../hooks/useScrollReveal';
import './Transformation.css';

export default function Transformation() {
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
            <div className="transform-card__label">✕ Where You Are Now</div>
            <h3>Playing Small</h3>
            <ul>
              <li><IconX size={16} /> Relying on inconsistent local tips that barely cover your effort.</li>
              <li><IconX size={16} /> Link-in-bio pages that look amateur and convert zero high-ticket subs.</li>
              <li><IconX size={16} /> Living in constant fear of platform bans destroying your entire business overnight.</li>
              <li><IconX size={16} /> Stuck competing with millions locally for attention that pays in pennies.</li>
            </ul>
          </div>

          <div className="transform-card transform-card--after reveal-right">
            <div className="transform-card__label">✦ Where VybzRoulette Takes You</div>
            <h3>Commanding the Global Stage</h3>
            <ul>
              <li><IconCheck /> Wake up to $500–$2,000+ weekly from US, UK, and EU premium subscribers.</li>
              <li><IconCheck /> An ultra-sleek personal brand hub that immediately signals luxury and status.</li>
              <li><IconCheck /> Bulletproof infrastructure that nobody can ban — your stage, forever.</li>
              <li><IconCheck /> Instant status elevation: you become the international name people pay to access.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
