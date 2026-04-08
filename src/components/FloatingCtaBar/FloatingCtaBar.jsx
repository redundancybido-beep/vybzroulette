import React from 'react';
import { IconArrowRight } from '../Icons';
import './FloatingCtaBar.css';

export default function FloatingCtaBar({ visible }) {
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
