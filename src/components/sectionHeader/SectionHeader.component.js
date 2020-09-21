import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

const SectionHeaderContainer = styled.div`
  transform: skewX(-20deg);
  ${tw`w-full px-2 py-3 m-auto bg-lightblue md:py-5 md:w-11/12`}
`;

const LabelContainer = styled.div`
  transform: skewX(20deg);
  ${tw`text-2xl font-bold text-center text-lightgrey md:text-4xl md:leading-8`}
`;

const SectionHeader = ({ label }) => {
  return (
    <SectionHeaderContainer>
      <LabelContainer>{label}</LabelContainer>
    </SectionHeaderContainer>
  );
};

export default SectionHeader;

SectionHeader.propTypes = {
  label: PropTypes.string.isRequired,
};
