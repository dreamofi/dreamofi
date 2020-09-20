import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

import heroImage from "./hero-image.svg";

const HeroContainer = styled.div`
  ${tw`relative flex flex-col items-center justify-center w-full h-auto px-2 pt-2 pb-3 md:pb-6 bg-nearblack font-display`}
`;

const HeroContentContainer = styled.div`
  ${tw`relative flex flex-wrap flex-wrap-reverse w-11/12 md:flex-row`}
`;
const HeroImageContainer = styled.img`
  ${tw`w-full h-full ml-auto md:w-7/12`};
  object-fit: contain;
`;

const TitleContainer = styled.div`
  ${tw`flex flex-col flex-wrap items-center justify-center w-full md:w-3/5 md:absolute md:left-2 md:z-10 md:top-2/5`}
`;

const MainTitleContainer = styled.svg`
  ${tw`w-full`}
`;

const MainTitle = styled.text`
  ${tw`w-full font-bold text-center text-golden`}
  fill: #FFCE64;
`;

const SubtitleContainer = styled.svg`
  ${tw`w-2/3`}
`;

const SubTitle = styled.text`
  ${tw`w-full font-bold text-center text-lightgrey`}
  fill: #F4F4F4;
`;

const DecoratorBlock = styled.div`
  ${tw`absolute right-0 w-4 h-24 md:left-0 md:right-auto bg-pink top-1/2 md:top-38pr`}
`;

const Hero = ({ id }) => {
  return (
    <HeroContainer id={id}>
      <DecoratorBlock />
      <HeroContentContainer>
        <TitleContainer>
          <MainTitleContainer
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 90 18"
          >
            <MainTitle x="0" y="15">
              WELCOME
            </MainTitle>
          </MainTitleContainer>

          <SubtitleContainer
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 18"
          >
            <SubTitle x="0" y="15">
              TO MY PAGE!
            </SubTitle>
          </SubtitleContainer>
        </TitleContainer>
        <HeroImageContainer src={heroImage} />
      </HeroContentContainer>
    </HeroContainer>
  );
};

export default Hero;

Hero.propTypes = {
  id: PropTypes.string,
};
