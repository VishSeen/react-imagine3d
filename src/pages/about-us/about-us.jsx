import React, { useRef } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../utils/animations';
import LPLayout from '../../components/layout/lp-layout';
import ABOUT_PAGE_QUERY from '../../gql-query/AboutPageQuery';

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
  const { data, loading } = useQuery(ABOUT_PAGE_QUERY);
  const containerRef = useRef(null);
  const aboutPage = data?.aboutPageCollection?.items?.[0];

  const description = aboutPage?.aboutDescription || '';
  const infoCards = aboutPage?.aboutInfoCardListCollection?.items || [];
  const services = aboutPage?.listOfServicesCollection?.items || [];
  const outroImage = aboutPage?.outroImage;

  useGSAP(() => {
    const el = containerRef.current;
    if (!el || !aboutPage) return;

    const stats = el.querySelectorAll('.stat-item');
    const sects = el.querySelectorAll('.section');
    const banner = el.querySelector('.image-banner');
    const trig = { start: 'top 85%' };

    if (stats.length) gsap.fromTo(stats, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: stats[0], ...trig } });
    if (sects.length) gsap.fromTo(sects, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: sects[0], ...trig } });
    if (banner) gsap.fromTo(banner, { scale: 0.96, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.1, ease: 'power2.out', scrollTrigger: { trigger: banner, start: 'top 88%' } });
  }, { scope: containerRef, dependencies: [aboutPage] });

  if (loading) return null;

  return (
    <LPLayout
      title="About Us"
      subtitle={description}
    >
      <AboutContainer ref={containerRef}>
        {infoCards.length > 0 && (
          <div className="stats-grid">
            {infoCards.map((card, i) => (
              <div className="stat-item" key={i}>
                <h4>{card.infoCardCount}</h4>
                <p>{card.title}</p>
              </div>
            ))}
          </div>
        )}

        {services.length > 0 && (
          <div className="content-grid">
            {services.map((service, i) => (
              <div className="section" key={i}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        )}

        {outroImage && (
          <div className="image-banner">
            <img src={outroImage.url} alt={outroImage.title || 'About banner'} />
          </div>
        )}
      </AboutContainer>
    </LPLayout>
  )
}

export default AboutUs;
