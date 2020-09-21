import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";
import Button from "../buttons/Button.component";

import ImageLoader from "../imageLoader/ImageLoader";

const CardContainer = styled.div`
  ${tw`flex flex-col flex-auto w-full my-2 border-2 md:m-2 lg:m-4 hover:shadow-md md:w-3/12 font-display border-nearblack`}
`;

const CardImageContainer = styled.div`
  ${tw`w-full h-48 bg-lightblue`}
`;

const CardImage = styled(ImageLoader)`
  ${tw`h-16`};
`;

const CardContentContainer = styled.div`
  ${tw`flex flex-col flex-auto px-2 py-4 md:px-4 bg-golden`}
`;

const CardTitle = styled.div`
  ${tw`text-lg font-bold md:text-2xl`}
`;

const CardText = styled.div`
  ${tw`overflow-y-auto text-base space-y-1 leading-5 md:leading-6`}
`;

const ButtonContainer = styled.a`
  ${tw`w-full hover:bg-darkgrey`}
`;
const DetailButton = styled(Button)`
  ${tw`w-full hover:bg-darkgrey`}
`;

const Card = ({ title, content, imgUrl, pageUrl }) => {
  return (
    <CardContainer>
      <CardImageContainer>
        <CardImage imgUrl={imgUrl} alt={title} />
      </CardImageContainer>
      <CardContentContainer>
        <CardTitle>{title}</CardTitle>
        <CardText>{content}</CardText>
      </CardContentContainer>
      <ButtonContainer href={pageUrl} target="_blank">
        <DetailButton label="GO TO PAGE" buttonStyles="CARD" />
      </ButtonContainer>
    </CardContainer>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  pageUrl: PropTypes.string,
};
