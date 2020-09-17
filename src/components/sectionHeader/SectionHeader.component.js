import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

const SectionHeaderContainer = styled.div`
  transform: skewX(-20deg);
  ${tw`bg-lightblue py-3 md:py-5 px-2 w-full`}
`;

const LabelContainer = styled.div`
  transform: skewX(20deg);
  ${tw`text-lightgrey font-bold text-2xl md:text-4xl md:leading-8 text-center`}
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
