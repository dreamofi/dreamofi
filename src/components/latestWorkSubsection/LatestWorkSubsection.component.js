import React from "react";
import PropTypes from "prop-types";
import SuperLink from "gatsby-plugin-superlink";

import tw, { styled, css } from "twin.macro";

import SectionHeader from "../sectionHeader/SectionHeader.component";
import Button from "../buttons/Button.component";
import ImageLoader from "../imageLoader/ImageLoader";

const SubSectionContainer = styled.section`
  ${tw`flex flex-wrap items-center justify-center w-full px-4 py-10 md:px-10 md:px-12 md:py-24 font-display`}
`;

const TitleAndImageContainer = styled.div`
  ${tw`relative flex flex-col flex-auto w-full space-y-3 sm:space-y-6 md:justify-center`}
`;

const ImageHolder = styled(ImageLoader)`
  ${tw`w-full m-auto`};
`;

const TextAndButtonContainer = styled.div`
  ${tw`flex flex-col flex-wrap items-start justify-center w-full space-y-4`}
`;

const SectionHeaderStyled = styled(SectionHeader)`
  ${tw`w-4/5`}
`

const SubSectionLayout = styled.div`
  ${tw`flex flex-wrap flex-1 md:flex-no-wrap space-y-3 md:justify-around md:max-w-screen-lg`}

  ${({ reverse }) => {
    if (reverse) {
      return css`
        ${tw`md:flex-row-reverse md:space-x-0 `}
        ${TextAndButtonContainer} {
          ${tw`md:mr-8`}
        }
      `;
    } else {
      return css`
        ${tw`md:space-x-8`}
      `;
    }
  }}

  ${({ layoutStyle }) => {
    if (layoutStyle === "column") {
      return css`
        ${tw`flex-col w-full max-w-full`}
        ${TitleAndImageContainer} {
          ${tw`md:w-full md:max-w-full`}
        }
        ${TextAndButtonContainer} {
          ${tw`md:w-full md:max-w-full`}
        }
      `;
    } else {
      return css`
        ${TitleAndImageContainer} {
          ${tw`md:w-5/12`}
        }
        ${TextAndButtonContainer} {
          ${tw`md:w-5/12`}
        }
      `;
    }
  }}
`;

const TextContainer = styled.div`
  ${tw`leading-5 md:leading-6 space-y-5 text-nearblack`}
  ${({ backgroundColor }) =>
    backgroundColor === "nearblack" && tw`text-lightgrey`}
`;

const LinkStyled = styled(SuperLink)`
  ${tw`w-full`}
`;

const LatestWorkSubsection = ({
  backgroundColor,
  imgUrl,
  children,
  reverse,
  headerLabel,
  buttonLabel,
  linkTo,
  alt,
  objectFit,
  layoutStyle,
}) => {
  return (
    <SubSectionContainer className={`bg-${backgroundColor}`}>
      <SubSectionLayout reverse={reverse} layoutStyle={layoutStyle}>
        <TitleAndImageContainer>
          <SectionHeaderStyled label={headerLabel} />
          <ImageHolder imgUrl={imgUrl} alt={alt} objectFit={objectFit} />
        </TitleAndImageContainer>

        <TextAndButtonContainer>
          <TextContainer backgroundColor={backgroundColor}>
            {children}
          </TextContainer>
          <LinkStyled to={linkTo} target="_blank">
            <Button label={buttonLabel} />
          </LinkStyled>
        </TextAndButtonContainer>
      </SubSectionLayout>
    </SubSectionContainer>
  );
};

export default LatestWorkSubsection;

LatestWorkSubsection.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  alt: PropTypes.string,
  children: PropTypes.node,
  reverse: PropTypes.bool,
  headerLabel: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  linkTo: PropTypes.string,
  objectFit: PropTypes.string,
  layoutStyle: PropTypes.string,
};

LatestWorkSubsection.defaultProps = {
  backgroundColor: "lightgrey",
  headerLabel: "Website",
  children: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
  reverse: true,
  buttonLabel: "MORE DETAILS",
};
