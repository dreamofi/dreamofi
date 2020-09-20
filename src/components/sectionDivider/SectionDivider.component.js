import React from "react";
import tw, { styled } from "twin.macro";
import PropTypes from "prop-types";

const DividerContainer = styled.svg`
  width: 100%;
  overflow: hidden;
  ${({ isTop }) =>
    isTop ? tw`absolute inset-x-0 top-0` : tw`absolute inset-x-0 bottom-0`}
`;

const SectionDivider = ({ topColor, bottomColor, isTop, isFooter }) => {
  return (
    <DividerContainer
      isTop={isTop}
      isFooter={isFooter}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1900 100"
    >
      {!isFooter ? (
        <>
          <polygon
            className={`fill-current text-${topColor} `}
            points="0,-2 0,100 1900,0 1900,-2"
          />
          <polygon
            className={`fill-current text-${bottomColor} `}
            points="0,100 0,102 1900,102 1920,0"
          />
        </>
      ) : (
        <>
          <polygon
            className={`fill-current text-${topColor} `}
            points="0,0 0,82 960,22 1920,82 1920,0"
          />
          <polygon
            className={`fill-current text-${bottomColor} `}
            points="0,102 1900,102 950,30"
          />
        </>
      )}
    </DividerContainer>
  );
};

export default SectionDivider;

SectionDivider.propTypes = {
  topColor: PropTypes.string.isRequired,
  bottomColor: PropTypes.string.isRequired,
  isTop: PropTypes.bool.isRequired,
  isFooter: PropTypes.bool,
};

SectionDivider.defaultProps = {
  topColor: "nearblack",
  bottomColor: "lightgrey",
  isTop: true,
  isFooter: false,
};
