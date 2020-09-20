import React from "react";
import tw, { styled } from "twin.macro";
import PropTypes from "prop-types";

import Obfuscate from "react-obfuscate";

import emailSVG from "./email-plain.svg";

import SectionDivider from "../sectionDivider/SectionDivider.component";

const ContactContainer = styled.div`
  ${tw`relative py-8 bg-nearblack text-lightgrey font-display md:py-12`}
`;

const ContentContainer = styled.div`
  ${tw`w-4/5 px-2 py-12 m-auto md:w-2/3 space-y-8 md:py-32`}
`;

const CallPitch = styled.div`
  ${tw`text-lg md:text-3xl`}
`;

const EmailContainer = styled(Obfuscate)`
  ${tw`block w-full`}
`;
const Email = styled.img`
  ${tw`w-full`}
`;

const ContactLink = styled.div`
  ${tw`text-sm md:text-base space-x-4`}
`;

const LinkElement = styled.a`
  ${tw`inline-block font-bold no-underline text-lightgrey hover:text-lightblue`}
`;

const Contact = ({ id }) => {
  return (
    <ContactContainer id={id}>
      <SectionDivider
        isFooter={true}
        topColor="lightgrey"
        bottomColor="nearblack"
      />
      <ContentContainer>
        <CallPitch>{`Let's work together!`}</CallPitch>
        <EmailContainer email="dxt90.business@gmail.com" aria-label="Email me">
          <Email src={emailSVG} />
        </EmailContainer>

        <ContactLink>
          <LinkElement href="#">Linkedln</LinkElement>
          <LinkElement href="#">Vietnamwork</LinkElement>
        </ContactLink>
      </ContentContainer>
    </ContactContainer>
  );
};

export default Contact;

Contact.propTypes = {
  id: PropTypes.string,
};
