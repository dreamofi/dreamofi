import React from "react";
import tw, { styled } from "twin.macro";
import { Link } from "gatsby";

import { ReactComponent as Hamburger } from "../../images/hamburger.svg";
import { useShowVisibleWhenPassYOffset } from "../../utils/hooks";

const HamburgerContainer = styled(Link)`
  ${tw`fixed z-50 block w-10 h-10 p-1 border-2 border-solid rounded-full cursor-pointer bg-nearblack`}
  bottom: 1rem;
  left: 1rem;
`;

const HamburgerStyle = styled(Hamburger)`
  ${tw`block w-full h-full fill-current text-lightgrey`}
`;

const BottomHamburger = () => {
  const checkVisible = useShowVisibleWhenPassYOffset(600);

  return (
    <HamburgerContainer to="/menu" className={`${checkVisible}`}>
      <HamburgerStyle viewBox="0 0 32 32" />
    </HamburgerContainer>
  );
};

export default BottomHamburger;
