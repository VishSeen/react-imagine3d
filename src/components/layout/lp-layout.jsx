import React from 'react';
import Title from '../title/title';
import StyledLPLayout from './style';

const LPLayout = ({ title, subtitle, children, showTitle = true }) => {
  return (
    <StyledLPLayout className="lp-layout">
      {/* Background Fixed Title - keeping it for texture but adding real hero title */}
      {showTitle && <Title text={title} />}

      {/* Explicit Hero Page Header */}
      <header className="page-hero">
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
