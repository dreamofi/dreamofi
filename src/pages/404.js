import React from "react";

import tw, { styled } from "twin.macro";

import Layout from "../templates/layout/Layout.component";
import abductionIllustration from "../images/abduction-illustration.svg";

const NotFoundContainer = styled.div`
  ${tw`flex flex-col items-center justify-center bg-lightgrey`}
`;

function NotFoundPage() {
  return (
    <Layout>
      <NotFoundContainer>
        <img
          alt="Ghost getting abducted by aliens"
          className="block w-1/2 mx-auto"
          src={abductionIllustration}
        />
        <h2 className="inline-block p-3 my-8 text-2xl font-bold bg-yellow-400">
          Looks like this page is a ghost that got abducted by aliens...
        </h2>
      </NotFoundContainer>
    </Layout>
  );
}

export default NotFoundPage;
