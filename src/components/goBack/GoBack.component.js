import React from "react";
import tw, { styled } from "twin.macro";
import {navigate} from '@reach/router';

import { ReactComponent as ArrowLeft } from "../../images/arrowleft.svg";

import { useShowVisibleWhenPassYOffset } from "../../utils/hooks";

const GoBackContainer = styled.div`
  ${tw`fixed inset-x-0 z-50 block w-10 h-10 p-1 mx-auto border-2 border-solid rounded-full cursor-pointer bg-nearblack`}
  bottom: 1rem;  
`;

const ArrowStyle = styled(ArrowLeft)`
  ${tw`block w-full h-full fill-current text-lightgrey`}
`;

const GoBack = () => {
  const checkVisible = useShowVisibleWhenPassYOffset(600);

  const handleClose = () => {
    navigate(-1);
  }

  return (
    <GoBackContainer onClick={handleClose} className={`${checkVisible}`}>
      <ArrowStyle viewBox="0 0 1792 1792" />
    </GoBackContainer>
  );
};

export default GoBack;
