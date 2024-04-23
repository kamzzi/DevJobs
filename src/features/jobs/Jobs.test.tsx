import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Jobs } from "./Jobs";
import { MemoryRouter } from "react-router";
import { server } from "../../__mocks__/server";
import { HttpResponse, http } from "msw";
import { URL } from "./api/api";

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

      expect(jobs).toHaveLength(1);
    });
  });

  test("Should show a error when fetching is invalid", async () => {
    server.resetHandlers(
      http.get(`${URL}/jobs`, () => {
        return new HttpResponse(null, { status: 500 });
      })
    );

    render(
      <MemoryRouter>
        <Jobs />
      </MemoryRouter>
    );

    const loading = screen.getByTestId("spinner");

    expect(loading).toBeInTheDocument();

    await waitForElementToBeRemoved(loading).then(async () => {
      const error = screen.getByText(/500/i);
      expect(error).toBeInTheDocument();
    });
  });
});
