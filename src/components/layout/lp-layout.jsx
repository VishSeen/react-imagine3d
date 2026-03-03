import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../utils/animations';
import Title from '../title/title';
import StyledLPLayout from './style';

const LPLayout = ({ title, subtitle, children, showTitle = true }) => {
  const heroRef = useRef(null);

  useGSAP(() => {
    const el = heroRef.current;
    if (!el) return;
    const h1 = el.querySelector('h1');
    const sep = el.querySelector('.hero-separator');
    const p = el.querySelector('p');

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(h1, { y: 70, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 }, 0)
      .fromTo(sep, { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: 'power2.out', transformOrigin: '50% 50%' }, 0.45);
    if (p) tl.fromTo(p, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, 0.6);
  }, { scope: heroRef });
  return (
    <StyledLPLayout className="lp-layout">
      {/* Background Fixed Title - keeping it for texture but adding real hero title */}
      {showTitle && <Title text={title} />}

      {/* Explicit Hero Page Header */}
      <header className="page-hero" ref={heroRef}>
        <h1>{title}</h1>
        <div className="hero-separator" />
        {subtitle && <p>{subtitle}</p>}
      </header>

      {/* Main Content Area */}
      <main className="content-container">
        {children}
      </main>
    </StyledLPLayout>
  );
};

export default LPLayout;
