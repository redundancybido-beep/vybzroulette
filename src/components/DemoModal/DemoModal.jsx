import React, { useEffect } from 'react';
import { IconX, IconArrowRight } from '../Icons';
import './DemoModal.css';

export default function DemoModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) { document.body.style.overflow = 'hidden'; }
    else { document.body.style.overflow = ''; }
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
                <div className="demo-stat"><div className="demo-stat-value">0.2%</div><div className="demo-stat-label">Conversion</div></div>
                <div className="demo-stat"><div className="demo-stat-value">₦5k</div><div className="demo-stat-label">Daily Rev</div></div>
                <div className="demo-stat"><div className="demo-stat-value">Local</div><div className="demo-stat-label">Audience</div></div>
              </div>
            </div>
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
                <div className="demo-stat"><div className="demo-stat-value">12.4%</div><div className="demo-stat-label">Conversion</div></div>
                <div className="demo-stat"><div className="demo-stat-value">$340</div><div className="demo-stat-label">Daily Rev</div></div>
                <div className="demo-stat"><div className="demo-stat-value">Global</div><div className="demo-stat-label">Audience</div></div>
              </div>
            </div>
          </div>
          <div className="modal-cta-wrap">
            <a href="#pricing" className="btn btn-primary btn-pulse" onClick={onClose}>
              Build My Stage Now <IconArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
