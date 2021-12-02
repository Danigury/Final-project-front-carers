import { LocationsToMock } from "../../mocks/mockDetails";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Location from "./Location";
describe("Given a Location component", () => {
  describe("When it receive a robot", () => {
    test("It should render the robot", () => {
      const location = LocationsToMock[0];

      render(
        <Router>
          <Location location={location} />
        </Router>
      );
      const name = screen.getByRole("heading", { name: location.name });
      const postcode = screen.getByText(location.address.postcode);
      const type = screen.getByText(
        `Capacidad para ${location.capacity} personas`
      );

      expect(name).toBeInTheDocument();
      expect(type).toBeInTheDocument();
      expect(postcode).toBeInTheDocument();
    });
  });
});
