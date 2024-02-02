import React from 'react';
import StyledTitle from './style';

const Title = ({ text }) => {
  return (
    <>
      <StyledTitle className="title">
        <span>{text}</span>
      </StyledTitle>
    </>
  );
};

export default Title;
