import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

import SectionDivider from "../sectionDivider/SectionDivider.component";

const SectionDividerContainer = styled.div`
  ${tw`relative content-center w-full font-display`}
`;

const RibbonContainer = styled.div`
  ${tw`w-full px-2 py-4 text-center bg-darkgrey sm:py-8`}
`;

const Ribbon = styled.div`
  ${tw`relative z-10 flex flex-col items-center justify-center w-4/5 h-12 m-auto my-8 md:h-20 bg-golden lg:w-2/3 md:my-12`}
  transform: skewX(-20deg) rotate(-3.013deg);
`;

const LabelContainer = styled.div`
  transform: skewX(20deg);
  ${tw`text-4xl font-bold text-center md:text-5xl`}
`;

const WorkSectionHeader = ({ label }) => {
  return (
    <SectionDividerContainer>
      <SectionDivider
        isTop={true}
        isFooter={false}
        topColor="lightgrey"
        bottomColor="grey"
      />
      <RibbonContainer>
        <Ribbon>
          <LabelContainer>{label}</LabelContainer>
        </Ribbon>
      </RibbonContainer>
      <SectionDivider
        isTop={false}
        isFooter={false}
        topColor="grey"
        bottomColor="lightgrey"
      />
    </SectionDividerContainer>
  );
};

export default WorkSectionHeader;

WorkSectionHeader.propTypes = {
  label: PropTypes.string,
};

WorkSectionHeader.defaultProps = {
  label: "Latest works",
};
