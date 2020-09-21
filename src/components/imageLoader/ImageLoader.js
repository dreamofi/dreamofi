import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const ImageLoader = ({ imgUrl, alt, objectFit }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
              ...GatsbyImageSharpFluidLimitPresentationSize
              originalName
            }
          }
        }
      }
    }
  `);
  const image = allImageSharp.edges.find(
    (edge) => edge.node.fluid.originalName === imgUrl
  );
  if (!image) {
    return null;
  }
  return (
    <Img
      style={{ maxHeight: "100%", height: "100%", minWidth: "100%" }}
      imgStyle={{ objectFit: objectFit }}
      fluid={image.node.fluid}
      alt={alt}
    />
  );
};

export default ImageLoader;

ImageLoader.propTypes = {
  imgUrl: PropTypes.string,
  alt: PropTypes.string,
  objectFit: PropTypes.oneOf(['contain', 'cover', 'fill', 'scale-down']),
};

ImageLoader.defaultProps = {
  alt: "",
  objectFit: "cover",
};
