import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

import SectionDivider from "../sectionDivider/SectionDivider.component";

const SectionDividerContainer = styled.div`
  ${tw`content-center relative`}
`;

const RibbonContainer = styled.div`
  ${tw`bg-darkgrey w-full text-center py-4 sm:py-8 px-2`}
`;

const Ribbon = styled.div`
  ${tw`bg-golden lg:w-1/3 w-4/5 m-auto my-2 md:my-6 relative z-10 h-12`}
  transform: skewX(-20deg) rotate(-1.253deg);
`;

const LabelContainer = styled.div`
  transform: skewX(20deg);
  ${tw`text-center font-bold text-4xl`}
`;

const WorkSectionHeader = ({ label }) => {
  return (
    <div>
      <SectionDividerContainer>
        <SectionDivider
          isTop={true}
          isFooter={false}
          topColor="lightgrey"
          bottomColor="darkgrey"
        />
        <RibbonContainer>
          <Ribbon>
            <LabelContainer>{label}</LabelContainer>
          </Ribbon>
        </RibbonContainer>
        <SectionDivider
          isTop={false}
          isFooter={false}
          topColor="darkgrey"
          bottomColor="lightgrey"
        />
      </SectionDividerContainer>
    </div>
  );
};

export default WorkSectionHeader;

WorkSectionHeader.propTypes = {
  label: PropTypes.string.required,
};

WorkSectionHeader.defaultProps = {
  label: "Latest works",
};
