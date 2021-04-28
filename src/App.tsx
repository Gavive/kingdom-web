import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";
import Home from "./Views/Home/Home";
import { Calculators } from "Views/Calculators";
import styled from "styled-components";
import { RehandAndHoldCalculator } from "components/RehabAndHoldCalculator";

const AppWrapper = styled.div`
  background: #fafafa;
`;

function App() {
  return (
    <Router>
      <AppWrapper>
        <Switch>
          <Route path="/calculators/brrr">
            <RehandAndHoldCalculator />
          </Route>
          <Route path="/calculators">
            <Calculators />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </AppWrapper>
    </Router>
  );
}

export default App;
