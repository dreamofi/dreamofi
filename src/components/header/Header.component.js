import React from "react";
import tw, { styled } from "twin.macro";
import { Link } from "@reach/router";

import Navbar from "../navbar/Navbar.component";
import Button from "../buttons/Button.component";

import portraitLogo from "../../images/portraitLogo.svg";
import { ReactComponent as Hamburger } from "../../images/hamburger.svg";

const HeaderContainer = styled.div`
  ${tw`flex items-center justify-between w-full px-2 py-4 md:justify-around space-x-4 bg-nearblack`}
`;

const NavbarContainer = styled.div`
  ${tw`items-center hidden md:flex space-x-4`}
`;

const ButtonContainer = styled.a`
  ${tw`block`}
`;

const LogoContainer = styled.img`
  ${tw`h-16`}
`;

const HamburgerContainer = styled(Link)`
  ${tw`block w-16 h-16 cursor-pointer md:hidden`}
`;

const HamburgerStyle = styled(Hamburger)`
  ${tw`block w-16 h-16 fill-current md:hidden text-lightgrey`}
`;

const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <LogoContainer src={portraitLogo} alt="Logo" />
        <NavbarContainer>
          <Navbar />
          <ButtonContainer
            href="https://github.com/dreamofi/portfolioPageResoures/blob/master/Duong-Xuan-Truong_Resume_22_09_2020.pdf"
            target="_blank"
          >
            <Button label="MY RESUME" buttonStyles="RESUME" />
          </ButtonContainer>
        </NavbarContainer>
        <HamburgerContainer to="/menu/">
          <HamburgerStyle viewBox="0 0 40 32" />
        </HamburgerContainer>
      </HeaderContainer>
    </div>
  );
};

export default Header;
