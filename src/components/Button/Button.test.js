import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it receives next as text", () => {
    test("Then it should render next inside the button", () => {
      const text = "next";
      const actionOnClick = jest.fn();
      const className = "next-button";

      render(
        <Button
          text={text}
          actionOnClick={actionOnClick}
          className={className}
        />
      );

      const button = screen.getByRole("button", { name: "next" });
      const result = button.textContent;

      expect(result).toEqual("next");
    });
  });

  describe("When it receives a function", () => {
    test("Then it should invoke that function", () => {
      const text = "next";
      const actionOnClick = jest.fn();
      const className = "text-button";

      render(
        <Button
          text={text}
          actionOnClick={actionOnClick}
          className={className}
        />
      );

      const button = screen.getByRole("button", { name: "next" });
      userEvent.click(button);
      expect(actionOnClick).toBeCalled();
    });
  });

  describe("When it receives a text-button className", () => {
    test("Then it should have a text-button className", () => {
      const text = "next";
      const actionOnClick = jest.fn();
      const className = "text-button";

      render(
        <Button
          text={text}
          actionOnClick={actionOnClick}
          className={className}
        />
      );

      const button = screen.getByRole("button", { name: "next" });
      const result = button.className;

      expect(result).toBe(className);
    });
  });
});
