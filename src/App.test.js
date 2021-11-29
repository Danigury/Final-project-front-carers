import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Has visto a alguien en la calle/i);
  expect(linkElement).toBeInTheDocument();
});
