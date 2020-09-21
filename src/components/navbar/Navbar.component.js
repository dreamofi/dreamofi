import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

import { AnchorLink } from "gatsby-plugin-anchor-links";

const NavbarButton = styled.li`
  ${tw`text-xl`}
`;

const NavbarContainer = styled.ul`
  ${tw`flex flex-wrap items-center justify-center p-0 font-display space-x-4 space-y-0`}
  ${({ isAlone }) =>
    isAlone && tw`flex-col space-x-0 space-y-8`}
  ${NavbarButton} {
    ${tw`mb-0 text-center`}
    & > a {
      ${tw`font-bold no-underline hover:text-lightblue`}
      ${({ isAlone }) =>
        isAlone
          ? tw`py-2 text-4xl text-nearblack hover:border-b-4 hover:border-lightblue`
          : tw`py-1 text-lightgrey md:py-2 hover:border-b-2 md:hover:border-b-4 hover:border-lightblue`}
    }
  }
`;

//isAlone props is to check if the navbar is in the full menu when the screen is small

const Navbar = ({ isAlone }) => {
  return (
    <NavbarContainer isAlone={isAlone}>
      <NavbarButton>
        <AnchorLink to="/#Home" stripHash>
          HOME
        </AnchorLink>
      </NavbarButton>
      <NavbarButton>
        <AnchorLink to="/#About" stripHash>
          ABOUT
        </AnchorLink>
      </NavbarButton>
      <NavbarButton>
        <AnchorLink to="/#Works" stripHash>
          WORKS
        </AnchorLink>
      </NavbarButton>
      <NavbarButton>
        <AnchorLink to="/#Contact" stripHash>
          CONTACT
        </AnchorLink>
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
