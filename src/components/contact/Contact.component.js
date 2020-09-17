import React from "react";
import tw, { styled } from "twin.macro";
import Obfuscate from "react-obfuscate";

import emailSVG from "./email-plain.svg";

const ContactContainer = styled.div`
  ${tw`bg-nearblack text-lightgrey font-display py-8 md:py-12`}
`;

const ContentContainer = styled.div`
  ${tw`w-4/5 md:w-2/3 space-y-8 m-auto px-2`}
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
  ${tw`inline-block no-underline text-lightgrey hover:text-lightblue font-bold`}
`;

const Contact = () => {
  return (
    <ContactContainer>
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
