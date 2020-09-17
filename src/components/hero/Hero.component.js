import React from "react";
// import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

import heroImage from "./hero-image.svg";

const HeroContainer = styled.div`
  ${tw`flex flex-wrap-reverse md:flex-row w-full bg-nearblack h-auto pb-3 pt-2 px-2 font-display relative`}
`;

const HeroImageContainer = styled.img`
  ${tw`ml-auto w-full md:w-3/5 h-full`};
  object-fit: contain;
`;

const TitleContainer = styled.div`
  ${tw`flex flex-wrap flex-col justify-center items-center w-full md:w-3/5 md:absolute md:left-2 md:z-10 md:top-1/2`}
`;

const MainTitleContainer = styled.svg`
  ${tw`w-full`}
`;

const MainTitle = styled.text`
  ${tw`text-golden font-bold text-center w-full`}
  fill: #FFCE64;
`;

const SubtitleContainer = styled.svg`
  ${tw`w-2/3`}
`;

const SubTitle = styled.text`
  ${tw`text-lightgrey font-bold text-center w-full`}
  fill: #F4F4F4;
`;

const DecoratorBlock = styled.div`
  ${tw`absolute right-0 md:left-0 md:right-auto h-24 w-4 bg-pink top-1/2 md:top-38pr`}
`;

const Hero = () => {
  return (
    <HeroContainer>
      <DecoratorBlock />
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
    </HeroContainer>
  );
};

export default Hero;
