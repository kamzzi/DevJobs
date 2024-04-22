import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Jobs } from "./Jobs";
import { MemoryRouter } from "react-router";

describe("Jobs testing", () => {
  test("Should initialy show loading spinner", async () => {
    render(
      <MemoryRouter>
        <Jobs />
      </MemoryRouter>
    );

    const loading = screen.getByTestId("spinner");

    expect(loading).toBeInTheDocument();
  });

  test("Should show jobs when success", async () => {
    render(
      <MemoryRouter>
        <Jobs />
      </MemoryRouter>
    );

    const loading = screen.getByTestId("spinner");

    expect(loading).toBeInTheDocument();

    await waitForElementToBeRemoved(loading).then(async () => {
      const jobs = await screen.findAllByRole("listitem");

      expect(jobs).toHaveLength(3);
    });
  });
});
