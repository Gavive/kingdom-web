import React, { Component } from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Logo } from "components/Logo/Logo";
import { withRouter, RouteComponentProps } from "react-router-dom";

const Header = styled.div`
  width: 100%;
  height: 200px;
`;

const ContainerRoot = styled(Container)`
  height: 100%;
`;

const Bullet = styled.span`
  display: inline-block;
  margin: 0 2px;
  transform: scale(0.8);
`;

const CardRoot = styled(Card)`
  min-width: 275px;
`;

const Title = styled(Typography)`
  font-size: 14px;
`;

const SubTitle = styled(Typography)`
  margin-bottom: 12px;
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #fafafa;
`;

export class CalculatorsComponent extends Component<RouteComponentProps>{
  public getBRRRCard(): JSX.Element {
    const bull = <Bullet>•</Bullet>;

    return (
      <CardRoot>
      <CardContent>
        <Title color="textSecondary" gutterBottom>
          B{bull}R{bull}R{bull}R
        </Title>
        <SubTitle color="textSecondary">
        calculator
        </SubTitle>
        <Typography variant="body2" component="p">
          This strategy is where an investor buys a fixer-upper property
          using short-term funds (oftentimes cash, hard money, private money,
          or other creative means), fixes up the property, rents out the newly
          renovated property, and seeks a new long-term loan (a refinance) to pay
          off the old short-term loan. This refinance will free up the short-term
          capital that was used, allowing the investor to repeat the process again
          and again.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => this.props.history.push("/calculators/brrr")}
        >
          Start
        </Button>
      </CardActions>
    </CardRoot>
    );
  }

  public render(): React.ReactNode {
    return (
      <Wrapper>
        <Header>
          <Logo />
        </Header>
        <ContainerRoot>
          {this.getBRRRCard()}
        </ContainerRoot>
      </Wrapper>
    );
  }
}

export const Calculators = withRouter(CalculatorsComponent);
