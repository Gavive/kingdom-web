import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Landing } from "./views/landing";
import { NotFound } from "./views/notFound";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export const WrapperApp: React.FC = () => {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
};
