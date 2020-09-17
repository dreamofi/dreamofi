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
      viewBox="0 0 1920 82"
    >
      {!isFooter ? (
        <>
          <polygon
            className={`fill-current text-${topColor} `}
            points="0,0 0,62 1920,20 1920,0"
          />
          <polygon
            className={`fill-current text-${bottomColor} `}
            points="0,62 0,82 1920,82 1920,20"
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
            points="0,82 1920,82 960,22"
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
