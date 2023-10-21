import Home from "./index";
import { render, screen } from "@testing-library/react";
describe("Home", () => {
  it("should render the heading", () => {
    render(<Home />);
    expect(screen.getByText("Volta comigo bb")).toBeInTheDocument();
  });
});
