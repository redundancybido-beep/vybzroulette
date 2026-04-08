import React, { useState, useEffect } from 'react';
import { IconArrowRight } from '../Icons';
import RevealSection from '../RevealSection';
import './UrgencyClose.css';

export default function UrgencyClose() {
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
                <div className="countdown-value">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="countdown-label">Hours</div>
              </div>
              <div className="countdown-sep">:</div>
              <div className="countdown-unit">
                <div className="countdown-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="countdown-label">Minutes</div>
              </div>
              <div className="countdown-sep">:</div>
              <div className="countdown-unit">
                <div className="countdown-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
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
