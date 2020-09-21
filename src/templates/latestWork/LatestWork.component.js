import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

import { MDXProvider } from "@mdx-js/react";
// import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../layout/Layout.component";
import LatestWorkSubsection from "../../components/latestWorkSubsection/LatestWorkSubsection.component";
import GoBack from "../../components/goBack/GoBack.component";

const LatestWorkContainer = styled.div`
  ${tw`flex items-center justify-center w-full md:py-16 bg-lightgrey`}
`;

const Header1 = styled.h1`
  ${tw`text-xl font-bold`}
`;

const Header2 = styled.h2`
  ${tw`text-lg font-bold`}
`;

const UList = styled.ul`
  ${tw`list-disc list-inside`}
`;

const components = {
  h1: Header1,
  h2: Header2,
  ul: UList,
};

const LatestWorkLayout = (props) => {
  const { img, imgAlt, title, url } = props.pageContext.frontmatter;
  return (
    <Layout>
      <LatestWorkContainer>
        <MDXProvider components={components}>
          <LatestWorkSubsection
            buttonLabel="GO TO PAGE"
            imgUrl={img}
            backgroundColor="lightgrey"
            reverse={false}
            alt={imgAlt}
            headerLabel={title}
            linkTo={url}
            objectFit="contain"
            layoutStyle="column"
          >
            {props.children}
          </LatestWorkSubsection>
        </MDXProvider>
      </LatestWorkContainer>
      <GoBack />
    </Layout>
  );
};

export default LatestWorkLayout;

LatestWorkLayout.propTypes = {
  // children: PropTypes.node,
  // imgUrl: PropTypes.string,
  // alt: PropTypes.string,
  // headerLabel: PropTypes.string,
  pageContext: PropTypes.any,
  props: PropTypes.any,
  children: PropTypes.any,
  // linkTo: PropTypes.string,
};
