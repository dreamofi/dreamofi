import React from "react";
import PropTypes from "prop-types";

import tw, { styled } from "twin.macro";

import WorkSectionDivider from "../workSectionHeader/WorkSectionHeader.component";
import LatestWorkSubsection from "../latestWorkSubsection/LatestWorkSubsection.component";

import { useStaticQuery, graphql } from "gatsby";

const LatestWorkContainer = styled.div`
  ${tw`relative flex flex-col items-center w-full`}
`;

const LatestWork = ({id}) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMdx(sort: { fields: frontmatter___date }) {
        edges {
          node {
            frontmatter {
              description
              title
              date(formatString: "YYYY/MM/DD")
              path
              img
            }
          }
        }
      }
    }
  `);

  return (
    <LatestWorkContainer id={id}>
      <WorkSectionDivider label="Latest works"/>
      {data.allMdx.edges.map((edge, index) => {
        const { title, description, path, img } = edge.node.frontmatter;
        return (
          <LatestWorkSubsection
            key={`latestWork${index}`}
            headerLabel={title}
            buttonLabel="MORE DETAILS"
            imgUrl={img}
            linkTo={path}
            reverse={index % 2 === 0 ? false : true}
            backgroundColor={index % 2 === 0 ? "lightgrey" : "nearblack"}
          >
            {description}
          </LatestWorkSubsection>
        );
      })}
    </LatestWorkContainer>
  );
};

LatestWork.propTypes = {
  id: PropTypes.string,
};

export default LatestWork;
