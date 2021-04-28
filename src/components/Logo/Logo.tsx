import React from "react";
import styled, { keyframes } from "styled-components";
import Crown from "../../Assets/crown.png";

const bounce = keyframes`
  0% {
    top: -1em;
  }

  100% {
    top: 0em;
  }
`;

const shadow = keyframes`
  0% {
    width: 2.2em;
    height: 8px;
    opacity: 0.5;
  }

  100% {
    width: 1.1em;
    height: 6px;
    opacity: 0.8;
  }
`;

const AnimatedIcon = styled.div`
  padding: 25px 0px 0px 0px;
  height: 7em;
  display: flex;
  width: 7em;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 3em;
  position: relative;
  top: 0em;
  animation-name: ${bounce};
  animation-duration: 0.9s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
`;

const Shadow = styled.div`
  margin: 10px auto;
  width: 60px;
  height: 10px;
  background: #000;
  opacity: 0.5;
  border-radius: 80%;
  animation-name: ${shadow};
  animation-duration: 0.9s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
`;

export const Logo = () => (
  <AnimatedIcon>
    <Image src={Crown} />
    <Shadow />
  </AnimatedIcon>
);
