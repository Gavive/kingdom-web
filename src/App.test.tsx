import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  it("can render not found if invalid path", () => {
    render(
      <MemoryRouter initialEntries={["/invalid"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "404 Not Found"
    );
  });
});
