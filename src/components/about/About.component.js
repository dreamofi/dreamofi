import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

import SectionHeader from "../sectionHeader/SectionHeader.component";
import Button from "../buttons/Button.component";
import ImageLoader from "../imageLoader/ImageLoader";
import SectionDivider from "../sectionDivider/SectionDivider.component";

const SectionContainer = styled.section`
  ${tw`relative flex flex-col items-center justify-center w-full py-10 bg-lightgrey md:py-16`}
`;

const SubSectionContainer = styled.section`
  ${tw`flex flex-wrap items-center w-full px-4 py-10 md:px-12 md:py-10 md:max-w-screen-lg font-display`}
`;

const SubSectionLayout = styled.div`
  ${tw`flex flex-wrap flex-1 md:flex-no-wrap space-y-3 md:space-x-5 md:justify-around`}
  ${({ reverse }) => reverse && tw`md:flex-row-reverse`}
`;

const TitleAndImageContainer = styled.div`
  ${tw`flex flex-col items-center w-full md:w-5/12 space-y-3 sm:space-y-5 md:justify-around `}
`;

const ImageHolder = styled(ImageLoader)`
  ${tw`object-contain w-1/3 mx-auto ml-auto md:w-full md:max-h-full lg:h-64 md:h-full md:object-cover lg:object-contain`};
`;

const TextAndButtonContainer = styled.div`
  ${tw`flex flex-col flex-wrap items-start justify-center w-full md:w-5/12 space-y-4`}
`;

const ButtonContainer = styled.a`
  ${tw`block`}
`;

const TextContainer = styled.div`
  ${tw`leading-5 md:leading-6 space-y-5 text-nearblack`}
  ${({ backgroundColor }) =>
    backgroundColor === "nearblack" && tw`text-lightgrey`}
`;

const About = ({ backgroundColor, reverse, id }) => {
  return (
    <SectionContainer id={id}>
      <SubSectionContainer className={`bg-${backgroundColor}`}>
        <SectionDivider
          isTop={true}
          topColor="nearblack"
          bottomColor="lightgrey"
        />
        <SubSectionLayout reverse={reverse}>
          <TitleAndImageContainer>
            <SectionHeader label="About me" />
            <ImageHolder imgUrl="portrait.jpg" />
          </TitleAndImageContainer>

          <TextAndButtonContainer>
            <TextContainer backgroundColor={backgroundColor}>
              <p>
                {`
                My name is Duong Xuan Truong and I have a Bachelor's Degree in
                English Language and with a second major in Finance and Banking.
                After working in roles centered around doing English-Vietnamese
                interpretation and translation and project management assistance
                for five years, I realized that working with and understanding
                computers really does give me joy. So, I decided to redirect my
                focuses.`}
              </p>
              <p>
                {`I first started my re-education with the Python programming
                language. Immediately, I fell in love with its simplistic and
                readable syntax. I continued to learn and tinker with the
                language for several months. Then, I stumbled upon the
                fascinating world of Web Development after discovering
                Freecodecamp site. From that point on, I have spent countless
                hours working with HTML, CSS, Javascript, and the React library,
                in hopes that I can someday put my technical know-how to good
                use.`}
              </p>
            </TextContainer>
            <ButtonContainer
              href="https://drive.google.com/file/d/1vmYwNXkI_UJ44SUWWMndDj23UeVPJSVu/view?usp=sharing"
              target="_blank"
            >
              <Button label="MY RESUME" />
            </ButtonContainer>
          </TextAndButtonContainer>
        </SubSectionLayout>
      </SubSectionContainer>
    </SectionContainer>
  );
};

export default About;

About.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  text: PropTypes.any,
  reverse: PropTypes.bool.isRequired,
  id: PropTypes.string,
};

About.defaultProps = {
  backgroundColor: "lightgrey",
  reverse: false,
};
