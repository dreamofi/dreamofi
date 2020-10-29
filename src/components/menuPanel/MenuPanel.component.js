import React from "react";
import tw, { styled } from "twin.macro";
import { navigate } from "@reach/router";

import Navbar from "../navbar/Navbar.component";
import Button from "../buttons/Button.component";

import portraitLogo from "../../images/portraitLogo.svg";
import { ReactComponent as CloseButton } from "../../images/close.svg";

const HeaderContainer = styled.div`
  ${tw`flex items-center justify-between w-full px-2 py-4 md:justify-around space-x-4`}
`;

const LogoContainer = styled.img`
  ${tw`h-16`}
`;

const ButtonContainer = styled.a`
  ${tw`block`}
`;

const CloseButtonContainer = styled(CloseButton)`
  ${tw`w-12 h-16 cursor-pointer fill-current text-nearblack`}
`;

const MenuScreenContainer = styled.div`
  ${tw`flex flex-col items-center justify-start w-full h-screen pb-4 bg-lightgrey space-y-4`}
`;

const MenuPanel = () => {
  const handleClose = () => {
    navigate(-1);
  };

  return (
    <MenuScreenContainer>
      <HeaderContainer>
        <LogoContainer src={portraitLogo} alt="Logo" />
        <CloseButtonContainer viewBox="0 0 500 500" onClick={handleClose} />
      </HeaderContainer>

      <Navbar isAlone={true} />
      <ButtonContainer
        href="https://github.com/dreamofi/portfolioPageResoures/blob/master/Duong-Xuan-Truong_Resume_22_09_2020.pdf"
        target="_blank"
      >
        <Button label="MY RESUME" buttonStyles="RESUME" />
      </ButtonContainer>
    </MenuScreenContainer>
  );
};

export default MenuPanel;
