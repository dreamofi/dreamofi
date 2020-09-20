import React from "react";
import tw, { styled } from "twin.macro";

import Layout from "../templates/layout/Layout.component";

import Hero from "../components/hero/Hero.component";
import About from "../components/about/About.component";
import LatestWork from "../components/latestWork/LatestWork.component";
import OtherWorks from "../components/otherWorks/OtherWorks.component";

const LayoutContainer = styled(Layout)`
  ${tw`font-display`}
`;

function IndexPage() {
  return (
    <LayoutContainer>
      <Hero id="Home" />
      <About id="About" />
      <LatestWork id="Works" />
      <OtherWorks />
    </LayoutContainer>
  );
}

export default IndexPage;
