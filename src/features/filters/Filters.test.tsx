import { fireEvent, render, screen } from "@testing-library/react";
import { Filters } from "./Filters";
import { ModalContextProvider } from "../modal/ModalContext/ModalContext";
import { MemoryRouter } from "react-router";

describe("Filters testing", () => {
  test("Correctly contained values on inputs when entered by user", () => {
    render(
      <ModalContextProvider>
        <MemoryRouter>
          <Filters />
        </MemoryRouter>
      </ModalContextProvider>
    );

    const titleInput =
      screen.getByPlaceholderText<HTMLInputElement>(/Filter by title.../);
    const locationInput = screen.getByPlaceholderText<HTMLInputElement>(
      /Filter by location.../
    );
    const fullTimeCheckbox =
      screen.getByLabelText<HTMLInputElement>(/Full Time/);

    expect(titleInput).toHaveValue("");
    expect(locationInput).toHaveValue("");
    expect(fullTimeCheckbox).not.toBeChecked();

    fireEvent.change(titleInput, { target: { value: "Senior" } });
    fireEvent.change(locationInput, { target: { value: "Polska" } });
    fireEvent.click(fullTimeCheckbox);

    expect(titleInput).toHaveValue("Senior");
    expect(locationInput).toHaveValue("Polska");
    expect(fullTimeCheckbox).toBeChecked();
  });

  test("Correctly contained values reading from url params", () => {
    render(
      <ModalContextProvider>
        <MemoryRouter
          initialEntries={["/?title=Senior&location=Polska&fullTime=full"]}
        >
          <Filters />
        </MemoryRouter>
      </ModalContextProvider>
    );

    const titleInput =
      screen.getByPlaceholderText<HTMLInputElement>(/Filter by title.../);
    const locationInput = screen.getByPlaceholderText<HTMLInputElement>(
      /Filter by location.../
    );
    const fullTimeCheckbox =
      screen.getByLabelText<HTMLInputElement>(/Full Time/);

    expect(titleInput).toHaveValue("Senior");
    expect(locationInput).toHaveValue("Polska");
    expect(fullTimeCheckbox).toBeChecked();
  });
});
