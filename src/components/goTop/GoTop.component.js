import React from "react";
import tw, { styled } from "twin.macro";

import { ReactComponent as ArrowUp } from "../../images/arrowup.svg";

import { useShowVisibleWhenPassYOffset } from "../../utils/hooks";

const GoTopContainer = styled.div`
  ${tw`fixed z-50 block w-10 h-10 p-1 border-2 border-solid rounded-full cursor-pointer bg-nearblack`}
  bottom: 1rem;
  right: 1rem;
`;

const ArrowStyle = styled(ArrowUp)`
  ${tw`block w-full h-full fill-current text-lightgrey`}
`;

const GoTop = () => {
  const checkVisible = useShowVisibleWhenPassYOffset(600);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <GoTopContainer onClick={scrollToTop} className={`${checkVisible}`}>
      <ArrowStyle viewBox="0 0 1792 1792" />
    </GoTopContainer>
  );
};

export default GoTop;
