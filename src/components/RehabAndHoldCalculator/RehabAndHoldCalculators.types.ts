export type Props = {};

export type State = {
  activeStep: BRRRStep;
  isPanelOpen: boolean
};

export enum BRRRStep {
  Buy,
  Rehab,
  Rent,
  Refinance
};
