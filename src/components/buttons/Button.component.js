import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

const StyledButtonComponent = styled.button`
  ${tw`bg-pink text-lightgrey hover:bg-golden  text-center font-bold font-display py-2 px-4 text-lg`}

  ${({ buttonStyles }) => {
    switch (buttonStyles) {
      case "RESUME":
        return tw`rounded-full border-4 border-lightgrey`;
      case "CARD":
        return tw`hover:bg-darkgrey w-full`;
      default:
        return tw`max-w-xs`;
    }
  }}
`;

const Button = ({ label, buttonStyles }) => {
  return (
    <StyledButtonComponent buttonStyles={buttonStyles}>
      {label}
    </StyledButtonComponent>
  );
};

export default Button;

Button.propTypes = {
  label: PropTypes.string.isRequired,
  buttonStyles: PropTypes.string,
};

Button.defaultProps = {
  buttonStyles: "default",
  label: "MORE DETAILS",
};
