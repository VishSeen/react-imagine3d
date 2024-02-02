import React from 'react';
import StyledTitle from './style';

const Title = ({ className, text }) => {
  return (
    <StyledTitle className={className}>
      <span>{text}</span>
    </StyledTitle>
  );
};

export default Title;
