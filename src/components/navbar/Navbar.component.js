import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

const NavbarButton = styled.li`
  ${tw`text-xl`}
`;

const NavbarContainer = styled.ul`
  ${tw`flex flex-wrap font-display space-x-4 space-y-0`}
  ${({ isAlone }) =>
    isAlone && tw`flex-col space-x-0 space-y-3`}
  ${NavbarButton} {
    ${tw`mb-0 `}
    & > a {
      ${tw`no-underline font-bold hover:text-lightblue`}
      ${({ isAlone }) =>
        isAlone
          ? tw`text-nearblack text-5xl py-2 hover:border-b-8 hover:border-lightblue`
          : tw`text-lightgrey py-3 hover:border-b-8 hover:border-lightblue`}
    }
  }
`;

//isAlone props is to check if the navbar is in the full menu when the screen is small

const Navbar = ({ isAlone }) => {
  return (
    <NavbarContainer isAlone={isAlone}>
      <NavbarButton>
        <a href="#Home">HOME</a>
      </NavbarButton>
      <NavbarButton>
        <a href="#About">ABOUT</a>
      </NavbarButton>
      <NavbarButton>
        <a href="#Works">WORKS</a>
      </NavbarButton>
      <NavbarButton>
        <a href="#Contact">CONTACT</a>
      </NavbarButton>
    </NavbarContainer>
  );
};

export default Navbar;

Navbar.propTypes = {
  isAlone: PropTypes.bool,
};

Navbar.defaultProps = {
  isAlone: false,
};
