import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledItem } from './style';

const NavBarItem = ({ index, title, slug, onOpenMenu }) => {
  return (
    <>
      <StyledItem>
        <span>{index}</span>
        <NavLink
          to={slug}
          onClick={onOpenMenu}
        >
          {title}
        </NavLink>
      </StyledItem>
    </>
  );
};

export default NavBarItem;
