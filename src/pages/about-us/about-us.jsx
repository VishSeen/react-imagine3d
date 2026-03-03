import React from 'react';
import styled from 'styled-components';
import LPLayout from '../../components/layout/lp-layout';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-bottom: 6rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
    }

    .stat-item {
      text-align: center;
      padding: 2rem;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 20px; /* Rounded corners for stats */

      h4 {
        font-family: 'Syne', sans-serif;
        font-size: 2.5rem;
        color: #fff;
        margin-bottom: 0.5rem;
      }

      p {
        font-family: 'Poppins', sans-serif;
        font-size: 0.9rem;
        color: #888;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
    }
  }

  .content-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }

    .section {
      h3 {
        font-family: 'Syne', sans-serif;
        font-size: 24px;
        color: #fff;
        margin-bottom: 1.5rem;
        text-transform: uppercase;
        border-bottom: 1px solid #333;
        padding-bottom: 1rem;
      }

      p {
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        line-height: 1.8;
        color: #888;
        margin-bottom: 1rem;
      }
    }
  }

  .image-banner {
    width: 100%;
    height: 60vh;
    margin: 4rem 0;
    position: relative;
    overflow: hidden;
    border-radius: 32px; /* Large rounded corners for the banner */

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: grayscale(100%);
    }

    &::after {
      content: '';
      position: absolute;
      top:0; left:0; width:100%; height:100%;
      background: rgba(0,0,0,0.3);
    }
  }
`;

const AboutUs = () => {
  return (
    <LPLayout
      title="About Us"
      subtitle="Designing spaces that live. Imagine 3D is a premier interior design and architectural visualization studio bridging the gap between imagination and reality."
    >
      <AboutContainer>
        <div className="stats-grid">
          <div className="stat-item">
            <h4>15+</h4>
            <p>Years Experience</p>
          </div>
          <div className="stat-item">
            <h4>200+</h4>
            <p>Projects Done</p>
          </div>
          <div className="stat-item">
            <h4>50+</h4>
            <p>Awards Won</p>
          </div>
          <div className="stat-item">
            <h4>12</h4>
            <p>Design Experts</p>
          </div>
        </div>

        <div className="content-grid">
          <div className="section">
            <h3>Interior Design</h3>
            <p>
              We believe valid design serves the human experience. Our interior concepts focus on optimal spatial flow, sustainable materiality, and personalized aesthetics. Whether residential or commercial, we curate environments that are both functional and inspiring.
            </p>
          </div>

          <div className="section">
            <h3>2D Planning & Drafting</h3>
            <p>
              Precision is our language. Our 2D services provide the technical backbone for any successful build. From detailed floor plans to electrical layouts and elevations, we deliver clear, accurate blueprints that ensure seamless execution on site.
            </p>
          </div>
        </div>

        <div className="image-banner">
          <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop" alt="Interior Design Studio" />
        </div>
      </AboutContainer>
    </LPLayout>
  )
}

export default AboutUs;
