import { fireEvent, render, screen } from "@testing-library/react";
import { Modal } from "./Modal";
import { ModalContext } from "./ModalContext/ModalContext";
import { vi } from "vitest";

describe("Modal testing", () => {
  test("Close modal on button/overlay click", () => {
    const open = vi.fn();
    const close = vi.fn();
    render(
      <ModalContext.Provider value={{ isOpen: true, open, close }}>
        <Modal>
          <h1>Modal!</h1>
          <button>Modal!</button>
        </Modal>
      </ModalContext.Provider>
    );
    const button = screen.getByRole("button", { name: /close/i });
    const overlay = screen.getByTestId("overlay");
    expect(button).toBeDefined();
    fireEvent.click(button);
    expect(close).toHaveBeenCalledTimes(1);
    fireEvent.click(overlay);
    expect(close).toHaveBeenCalledTimes(2);
  });
});
