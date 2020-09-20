import React from "react";
import PropTypes from "prop-types";

import tw, { styled } from "twin.macro";

import SectionHeader from "../sectionHeader/SectionHeader.component";
import Button from "../buttons/Button.component";

import portraitImage from "../../images/portrait.jpg";

import SectionDivider from "../sectionDivider/SectionDivider.component";

const SectionContainer = styled.section`
  ${tw`relative flex flex-col items-center justify-center w-full py-10 bg-lightgrey md:py-16`}
`;

const SubSectionContainer = styled.section`
  ${tw`flex flex-wrap items-center w-full px-4 py-10 md:px-12 md:py-10 md:max-w-screen-lg font-display`}
`;

const SubSectionLayout = styled.div`
  ${tw`flex flex-wrap flex-1 md:flex-no-wrap space-y-3 md:space-x-5 md:justify-around`}
  ${({ reverse }) => reverse && tw`md:flex-row-reverse`}
`;

const TitleAndImageContainer = styled.div`
  ${tw`flex flex-col items-center w-full md:w-5/12 space-y-3 sm:space-y-5 md:justify-around `}
`;

const ImageHolder = styled.img`
  ${tw`object-contain w-1/3 mx-auto ml-auto md:w-full md:max-h-full lg:h-64 md:h-full md:object-cover lg:object-contain`};
`;

const TextAndButtonContainer = styled.div`
  ${tw`flex flex-col flex-wrap items-start justify-center w-full md:w-5/12 space-y-4`}
`;

const TextContainer = styled.div`
  ${tw`leading-5 md:leading-6 space-y-5 text-nearblack`}
  ${({ backgroundColor }) =>
    backgroundColor === "nearblack" && tw`text-lightgrey`}
`;

const About = ({ backgroundColor, imgUrl, text, reverse, id }) => {
  return (
    <SectionContainer id={id}>
      <SubSectionContainer className={`bg-${backgroundColor}`}>
        <SectionDivider
          isTop={true}
          topColor="nearblack"
          bottomColor="lightgrey"
        />
        <SubSectionLayout reverse={reverse}>
          <TitleAndImageContainer>
            <SectionHeader label="About me" />
            <ImageHolder src={imgUrl} />
          </TitleAndImageContainer>

          <TextAndButtonContainer>
            <TextContainer backgroundColor={backgroundColor}>
              {text}
            </TextContainer>
            <Button label="MY RESUME" />
          </TextAndButtonContainer>
        </SubSectionLayout>
      </SubSectionContainer>
    </SectionContainer>
  );
};

export default About;

About.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  text: PropTypes.any,
  reverse: PropTypes.bool.isRequired,
  id: PropTypes.string,
};

About.defaultProps = {
  backgroundColor: "lightgrey",
  imgUrl: portraitImage,
  text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
  reverse: false,
};
