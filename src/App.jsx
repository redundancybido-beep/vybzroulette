import React, { useState, useEffect } from 'react';
import './index.css';

// Components
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import TrustBar from './components/TrustBar/TrustBar';
import Transformation from './components/Transformation/Transformation';
import HowItWorks from './components/HowItWorks/HowItWorks';
import SuccessStories from './components/SuccessStories/SuccessStories';
import Features from './components/Features/Features';
import Pricing from './components/Pricing/Pricing';
import UrgencyClose from './components/UrgencyClose/UrgencyClose';
import DemoModal from './components/DemoModal/DemoModal';
import Footer from './components/Footer/Footer';
import FloatingCtaBar from './components/FloatingCtaBar/FloatingCtaBar';
import { IconChevronUp } from './components/Icons';

/* ============================================================
   VybzRoulette — Elite Premium Landing Page
   CRO Frameworks: MECLABS, 7-Principle, Fogg, ResearchXL
   AIDA Flow: Hero → Trust → Transform → HowItWorks →
              Success → Features → Pricing → Urgency → Footer
   ============================================================ */

export default function App() {
  const [showFloating, setShowFloating] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [pricing, setPricing] = useState({
    symbol: '$',
    risingStar: '15',
    risingStarTotal: '45',
    superstar: '60',
    superstarTotal: '180',
  });

  // Path detection for tier visibility
  const path = window.location.pathname;
  const visibleTier = path.includes('/premium') ? 'premium' : path.includes('/basic') ? 'basic' : 'all';

  useEffect(() => {
    const handleScroll = () => {
      setShowFloating(window.scrollY > 800);
      setShowScrollTop(window.scrollY > 1200);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Geo-Detection for localized pricing (Nigeria → Naira)
    fetch('https://api.country.is')
      .then(res => res.json())
      .then(data => {
        if (data.country === 'NG') {
          setPricing({
            symbol: '₦',
            risingStar: '15,000',
            risingStarTotal: '45,000',
            superstar: '75,000',
            superstarTotal: '225,000',
          });
        }
      })
      .catch(err => console.error('Geo-detection failed:', err));

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar onDemoClick={() => setDemoOpen(true)} />

      <main>
        <Hero />
        <TrustBar />
        <Transformation />
        <HowItWorks />
        <SuccessStories />
        <Features />
        <Pricing pricing={pricing} visibleTier={visibleTier} />
        <UrgencyClose />
      </main>

      <Footer />

      {/* Floating Elements */}
      {/* <FloatingCtaBar visible={showFloating} /> */}

      <button
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          opacity: showScrollTop ? 1 : 0,
          pointerEvents: showScrollTop ? 'auto' : 'none',
          transition: 'all 0.3s ease'
        }}
        aria-label="Scroll to top"
      >
        <IconChevronUp />
      </button>

      {/* Interactive Demo Modal */}
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
}
