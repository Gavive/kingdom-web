import React from "react";
import styled from "styled-components";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Paper from "@material-ui/core/Paper";
import Divider from '@material-ui/core/Divider';
import { Props, State, BRRRStep } from "components/RehabAndHoldCalculator/RehabAndHoldCalculators.types";
import { TextField, Grid } from "@material-ui/core";

const Root = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #fafafa;
`;

const StyledPaper = styled(Paper)`
  width: 90%;
  background: blue;
  padding: 20px;
  margin: 50px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;


export class RehandAndHoldCalculator extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      activeStep: BRRRStep.Buy,
      isPanelOpen: false
    };
  }

  public getBuyStep() {
    return (
      <Step key="buy" onClick={() => this.setState({ activeStep: BRRRStep.Buy })}>
        <StepLabel>Buy</StepLabel>
        <StepContent>
          dfgdfsdfgdfg
        </StepContent>
      </Step>
    );
  }

  public getRehabStep() {
    return (
      <Step key="rehab" onClick={() => this.setState({ activeStep: BRRRStep.Rehab })}>
        <StepLabel>Rehab</StepLabel>
        <StepContent></StepContent>
      </Step>
    );
  }

  public getRentStep() {
    return (
      <Step key="rent" onClick={() => this.setState({ activeStep: BRRRStep.Rent })}>
        <StepLabel>Rent</StepLabel>
        <StepContent></StepContent>
      </Step>
    );
  }

  public getRefinanceStep() {
    return (
      <Step key="refinance" onClick={() => this.setState({ activeStep: BRRRStep.Refinance })}>
        <StepLabel>Refinance</StepLabel>
        <StepContent></StepContent>
      </Step>
    );
  }

  public getInputSpace() {
    return (
      <Stepper style={{ background: "#fafafa" }} activeStep={this.state.activeStep} orientation="vertical">
        {this.getBuyStep()}
        {this.getRehabStep()}
        {this.getRentStep()}
        {this.getRefinanceStep()}
      </Stepper>
    );
  }

  public getOutputSpace() {
    return (
      <Stepper style={{ background: "#fafafa" }} activeStep={this.state.activeStep} orientation="vertical">
        {this.getBuyStep()}
        {this.getRehabStep()}
        {this.getRentStep()}
        {this.getRefinanceStep()}
      </Stepper>
    );
  }

  public render(): React.ReactNode {
    return (
      <Root>
        <StyledPaper elevation={3}>
          <Grid container spacing={3}>
          <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            🏠
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="With a grid" />
          </Grid>
        </Grid>
            <Grid item xs={12}>
            <TextField label="Street"/>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <TextField label="City"/>
          </Grid>
          <Grid item xs={4}>
            <TextField label="State"/>
          </Grid>
          <Grid item xs={4}>
          <TextField label="Zipcode"/>
          </Grid>
          <TextField label="Country"/>
        </StyledPaper>
        <Container>
          {this.getInputSpace()}
          <Divider orientation="vertical" flexItem />
          {this.getOutputSpace()}
        </Container>
      </Root>
    );
  }
}
