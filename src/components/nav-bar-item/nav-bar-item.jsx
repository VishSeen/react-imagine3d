import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledItem } from './style';

const NavBarItem = ({ index, title, slug, state, image, onOpenMenu }) => {
  return (
    <>
      <StyledItem image={image}>
        <span>{index}</span>
        <NavLink
          to={slug}
          onClick={onOpenMenu}
          state={state}
        >
          {title}
        </NavLink>
      </StyledItem>
    </>
  );
};

export default NavBarItem;
