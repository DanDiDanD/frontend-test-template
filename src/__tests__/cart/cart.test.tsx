import "./cart.setup";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cart from "@/components/features/cart/Cart";
import { resetMocks, setMockCartItems } from "./cart.setup";
import { testGames } from "./cart.testData";

describe("Cart Integration Tests", () => {
  beforeEach(() => {
    resetMocks();
  });

  it("displays empty cart message when no items are present", async () => {
    setMockCartItems([]);

    render(<Cart />);

    await waitFor(() => {
      expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
      expect(screen.getByText("0 items")).toBeInTheDocument();
    });

    expect(screen.queryByText("Order Summary")).not.toBeInTheDocument();
    expect(screen.queryByText("Checkout")).not.toBeInTheDocument();
  });

  it("displays cart items with correct information and order summary", async () => {
    setMockCartItems(testGames);

    const totalPrice = testGames
      .reduce((sum, game) => sum + game.price, 0)
      .toFixed(2);

    render(<Cart />);

    await waitFor(() => {
      expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
        "2 items"
      );
    });

    expect(
      screen.getByRole("article", { name: "Cyberpunk 2077" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("article", { name: "The Witcher 3: Wild Hunt" })
    ).toBeInTheDocument();

    expect(screen.getByText(`$${totalPrice}`)).toBeInTheDocument();
    expect(screen.getByText("Order Total")).toBeInTheDocument();
    expect(screen.getByText("Order Summary")).toBeInTheDocument();
    expect(screen.getByText("Checkout")).toBeInTheDocument();
  });

  it("updates cart data correctly after removing an item", async () => {
    const user = userEvent.setup();
    setMockCartItems(testGames);

    const { rerender } = render(<Cart />);

    await waitFor(() => {
      expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
        "2 items"
      );
    });

    expect(
      screen.getByRole("article", { name: "Cyberpunk 2077" })
    ).toBeInTheDocument();

    const removeButtons = screen.getAllByRole("button", {
      name: "Remove Cyberpunk 2077 from cart",
    });

    await user.click(removeButtons[0]);
    rerender(<Cart />);

    await waitFor(() => {
      expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
        "1 items"
      );
    });

    expect(
      screen.queryByRole("heading", { level: 3, name: "Cyberpunk 2077" })
    ).not.toBeInTheDocument();

    expect(
      screen.queryByRole("article", { name: "Cyberpunk 2077" })
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("article", { name: "The Witcher 3: Wild Hunt" })
    ).toBeInTheDocument();
  });
});
