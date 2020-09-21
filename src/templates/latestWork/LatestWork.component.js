import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

import Layout from "../layout/Layout.component";
import LatestWorkSubsection from "../../components/latestWorkSubsection/LatestWorkSubsection.component";
import GoBack from "../../components/goBack/GoBack.component";

const LatestWorkContainer = styled.div`
  ${tw`flex items-center justify-center w-full md:py-16 bg-lightgrey`}
`;

const LatestWorkLayout = ({ children, imgUrl, alt, headerLabel, linkTo }) => {
  return (
    <Layout>
      <LatestWorkContainer>
        <LatestWorkSubsection
          buttonLabel="GO TO PAGE"
          imgUrl={imgUrl}
          backgroundColor="lightgrey"
          reverse={false}
          alt={alt}
          headerLabel={headerLabel}
          linkTo={linkTo}
          objectFit="contain"
          layoutStyle="column"
        >
          {children}
        </LatestWorkSubsection>
      </LatestWorkContainer>
      <GoBack />
    </Layout>
  );
};

export default LatestWorkLayout;

LatestWorkLayout.propTypes = {
  children: PropTypes.node,
  imgUrl: PropTypes.string,
  alt: PropTypes.string,
  headerLabel: PropTypes.string,
  props: PropTypes.any,
  linkTo: PropTypes.string,
};
