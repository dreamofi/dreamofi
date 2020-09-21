import React from "react";
import tw, { styled } from "twin.macro";
import Navbar from "../navbar/Navbar.component";

const FooterContainer = styled.div`
  ${tw`flex flex-col items-center pt-2 pb-16 text-center bg-nearblack font-display text-lightgrey space-y-2`}
`;

const RightsResverveText = styled.div`
  ${tw`mb-16 text-center`}
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
