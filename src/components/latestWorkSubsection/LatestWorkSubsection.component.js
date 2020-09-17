import React from "react";
import PropTypes from "prop-types";

import tw, { styled } from "twin.macro";

import SectionHeader from "../sectionHeader/SectionHeader.component";
import Button from "../buttons/Button.component";

import sampleProduct from "../../images/3-devices-black.png";

const SubSectionContainer = styled.section`
  ${tw`flex flex-wrap md:px-10 md:px-12 md:py-10  justify-center items-center w-full md:max-w-screen-lg`}
`;

const SubSectionLayout = styled.div`
  ${tw`flex flex-1 flex-wrap md:flex-no-wrap space-y-3 md:space-x-5 md:justify-around`}
  ${({ reverse }) => reverse && tw`md:flex-row-reverse`}
`;

const TitleAndImageContainer = styled.div`
  ${tw`w-full md:w-5/12 flex flex-col space-y-3 sm:space-y-5 md:justify-between`}
`;

const ImageHolder = styled.img`
  ${tw`ml-auto w-full h-full`};
  object-fit: contain;
`;

const TextAndButtonContainer = styled.div`
  ${tw`w-full md:w-5/12 space-y-4`}
`;

const TextContainer = styled.div`
  ${tw`leading-5 md:leading-6 space-y-5 text-nearblack`}
  ${({ backgroundColor }) =>
    backgroundColor === "nearblack" && tw`text-lightgrey`}
`;

const LatestWorkSubsection = ({ backgroundColor, imgUrl, text, reverse }) => {
  return (
    <SubSectionContainer className={`bg-${backgroundColor}`}>
      <SubSectionLayout reverse={reverse}>
        <TitleAndImageContainer>
          <SectionHeader label="Something" />
          <ImageHolder src={imgUrl} />
        </TitleAndImageContainer>

        <TextAndButtonContainer>
          <TextContainer backgroundColor={backgroundColor}>
            {text}
          </TextContainer>
          <Button />
        </TextAndButtonContainer>
      </SubSectionLayout>
    </SubSectionContainer>
  );
};

export default LatestWorkSubsection;

LatestWorkSubsection.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  text: PropTypes.any,
  reverse: PropTypes.bool.isRequired,
};

LatestWorkSubsection.defaultProps = {
  backgroundColor: "lightgrey",
  imgUrl: sampleProduct,
  text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
  reverse: true,
};
