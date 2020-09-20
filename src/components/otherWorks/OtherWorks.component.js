import React from "react";
import tw, { styled } from "twin.macro";

import Card from "../card/Card.component";
import WorkSectionHeader from "../workSectionHeader/WorkSectionHeader.component";

const OtherWorksContainer = styled.div`
  ${tw`flex flex-wrap items-center justify-center w-full py-8 bg-lightgrey font-display`}
`;

const CardsContainer = styled.div`
  ${tw`flex flex-wrap items-stretch justify-center w-full px-4 py-8 md:w-5/6 bg-lightgrey`}
`;

const OtherWorks = () => {
  const data = [
    {
      title: "Face detection",
      description:
        "A small webapp to detect face(s) from image link; built with React and Postgresql. Test with this credential: demo@demo.com/demo12345",
      thumbnail: "facedetection.png",
      url: "https://ztmfinal.herokuapp.com/",
    },
    {
      title: "Freeplane scripts",
      description:
        "Scripts for use with Freeplane (an open source mindmap app), written in Groovy",
      thumbnail: "freeplane.png",
      url: "https://github.com/dreamofi/Freeplane-save-pasted-images",
    },
    {
      title: "Simon Game",
      description: "A small game to practice memory",
      thumbnail: "simon.png",
      url: "https://codepen.io/truongtfg/pen/dmmLxX",
    },
    {
      title: "Pomodoro Clock",
      description: "A simple pomodoro clock",
      thumbnail: "pomodoro.png",
      url: "https://codepen.io/truongtfg/pen/VQbaXJ",
    },
    {
      title: "Random Quote",
      description: "Get a quote to inspire a new day",
      thumbnail: "randomquote.png",
      url: "https://codepen.io/truongtfg/pen/RZxBvp",
    },
    {
      title: "TicTacToe",
      description:
        "An implementation of TicTacToe game using MiniMax algorithms",
      thumbnail: "tictactoe.png",
      url: "https://codepen.io/truongtfg/pen/MVjvzg",
    },
  ];

  return (
    <OtherWorksContainer>
      <WorkSectionHeader label="OTHER WORKS" />
      <CardsContainer>
        {data.map((card, index) => (
          <Card
            key={`card${index}`}
            title={card.title}
            content={card.description}
            imgUrl={card.thumbnail}
            pageUrl={card.url}
          />
        ))}
      </CardsContainer>
    </OtherWorksContainer>
  );
};

export default OtherWorks;
