import React, { useRef, useEffect } from 'react';
import StyledTitle from './style';
import gsap from 'gsap';


const Title = ({ text }) => {
  let extractedTxt = text.split('');

  useEffect(() => {
    var tl = gsap.timeline();
    tl.fromTo('.title-letters',
    { opacity: 0, yPercent: -10, delay: 1 },
    {
      duration: 0.5, opacity: 1, yPercent: 0,
      stagger: {
        amount: 0.2
      }
    })
  }, [extractedTxt]);


  return (
    <StyledTitle className="title">
      {
        extractedTxt.map((letter, key) => {
          return (
            <span className='title-letters' key={key}>{letter}</span>
          )
        })
      }
    </StyledTitle>
  );
};

export default Title;
