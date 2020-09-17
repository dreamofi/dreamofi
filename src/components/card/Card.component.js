import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";
import Button from "../buttons/Button.component";

const CardContainer = styled.div`
  ${tw`hover:shadow md:w-4/12 flex flex-col max-h-screen`}
`;

const CardImageContainer = styled.div`
  ${tw`bg-lightblue p-2 md:p-4 h-40 md:h-48`}
`;

const CardImage = styled.div`
  background: ${({ imgUrl }) => `url(${imgUrl}) center center no-repeat`};
  ${tw`h-full w-full`};
  background-size: cover;
`;

const CardContentContainer = styled.div`
  ${tw`bg-golden p-2 md:p-4 space-y-2`}
`;

const CardTitle = styled.div`
  ${tw`text-base md:text-xl font-bold`}
`;

const CardText = styled.div`
  ${tw`text-xs md:text-sm overflow-y-auto h-64 space-y-1 leading-5 md:leading-6`}
`;

const DetailButton = styled(Button)`
  ${tw`w-full hover:bg-darkblue`}
`;

const Card = ({ title, content, imgUrl }) => {
  return (
    <div>
      <CardContainer>
        <CardImageContainer>
          <CardImage imgUrl={imgUrl} />
        </CardImageContainer>
        <CardContentContainer>
          <CardTitle>{title}</CardTitle>
          <CardText>{content}</CardText>
        </CardContentContainer>
        <DetailButton label="MORE DETAILS" buttonStyles="CARD" />
      </CardContainer>
    </div>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};
