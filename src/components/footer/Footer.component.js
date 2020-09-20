import React from "react";
import tw, { styled } from "twin.macro";
import Navbar from "../navbar/Navbar.component";

const FooterContainer = styled.div`
  ${tw`flex flex-col items-center bg-nearblack font-display text-lightgrey text-center space-y-2 py-2`}
`;

const RightsResverveText = styled.div`
  ${tw`text-center`}
`

const Footer = () => {
  return (
    <FooterContainer>
      <Navbar />
      <RightsResverveText>©2020 All rights reserved</RightsResverveText>
    </FooterContainer>
  );
};

export default Footer;
