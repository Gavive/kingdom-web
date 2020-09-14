import React, { Component, Fragment } from "react";
import styled, { keyframes } from "styled-components";
import Crown from "../../Assets/crown.png";
import { DropDown, Button } from "@gavive/empire";


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
    width: 5em;
    height: 8px;
    opacity: 0.5;
  }

  100% {
    width: 2.2em;
    height: 6px;
    opacity: 0.8;
  }
`;

const Image = styled.img`
  width: 6em;
  position: relative;
  top: 0em;
  animation-name: ${bounce};
  animation-duration: 0.9s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
`;

const Shadow = styled.div`
  margin: 15px auto;
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

const HomeWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #fafafa;
`;

const Title = styled.h1`
  padding: 0 1em;
  margin: 0 auto;
  max-width: 20em;
  color: #444;
  font-weight: 600;
  font-size: 60px;
  line-height: 125%;
  text-align: center;
`;

const SubTitle = styled.h2`
  margin: 0 auto;
  max-width: 780px;
  color: #444;
  font-weight: 600;
  font-size: 36px;
  line-height: 60px;
  text-align: center;
`;

const Header = styled.div`
  width: 100%;
  padding: 0.5em;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  div {
    margin-left: 1em;
  }
`;

const AnimatedIcon = styled.div`
  margin-bottom: 1em;
`;

const HomeWelcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15em;
`;

export default class Home extends Component {

  public render(): React.ReactNode {
    return (
      <HomeWrapper>
            <Header>
              <DropDown title="Features" options={[ { label: "Team management", linkTo: "" }]}/>
              <DropDown title="About" />
              <Button label="Login" />
            </Header>
            <HomeWelcome>
              <AnimatedIcon>
                <Image src={Crown} />
                <Shadow />
              </AnimatedIcon>
              <Title>Delightful property planning and management</Title>
              <SubTitle>Start by building your kingdom here</SubTitle>
            </HomeWelcome>
            {/* Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
        </HomeWrapper>
    );
  }
}
