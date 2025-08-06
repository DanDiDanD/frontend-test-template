import "./catalog.setup";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Catalog from "@/components/features/catalog/Catalog";
import { resetMocks, mockRouter } from "./catalog.setup";

describe("Catalog", () => {
  beforeEach(() => {
    resetMocks();
  });

  it("displays game cards with correct information", async () => {
    render(await Catalog({ genre: "" }));

    await waitFor(() => {
      expect(screen.getByLabelText("Genre")).toBeInTheDocument();
      expect(screen.getByText("Cyberpunk 2077")).toBeInTheDocument();
      expect(screen.getByText("The Witcher 3: Wild Hunt")).toBeInTheDocument();
      expect(
        screen.getByText("The Legend of Zelda: Breath of the Wild")
      ).toBeInTheDocument();

      expect(screen.queryByText("Grand Theft Auto V")).not.toBeInTheDocument();
    });
  });

  it("loads more games when SEE MORE button is clicked", async () => {
    render(await Catalog({ genre: "" }));

    await waitFor(() => {
      expect(screen.queryByText("Grand Theft Auto V")).not.toBeInTheDocument();
      expect(screen.getByText("Cyberpunk 2077")).toBeInTheDocument();
      expect(screen.getByText("The Witcher 3: Wild Hunt")).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /see more/i })
      ).toBeInTheDocument();
    });

    const seeMoreButton = screen.getByRole("button", { name: /see more/i });
    fireEvent.click(seeMoreButton);
  });

  it("changes genre filter when option is selected", async () => {
    render(await Catalog({ genre: "" }));

    await waitFor(() => {
      const select = screen.getByDisplayValue("All");
      fireEvent.change(select, { target: { value: "Action" } });
    });

    expect(mockRouter.replace).toHaveBeenCalledWith("/?genre=Action");
  });

  it("shows filter and content working together with genre", async () => {
    render(await Catalog({ genre: "Action" }));

    await waitFor(() => {
      const genreFilter = screen.getByRole("combobox");
      expect(genreFilter).toBeInTheDocument();

      const gameCards = screen.getAllByRole("article");
      expect(gameCards).toHaveLength(2);

      expect(screen.getByText("Cyberpunk 2077")).toBeInTheDocument();
      expect(screen.getByText("Grand Theft Auto V")).toBeInTheDocument();
      expect(
        screen.queryByText("The Witcher 3: Wild Hunt")
      ).not.toBeInTheDocument();
      expect(screen.getByText("2 games loaded")).toBeInTheDocument();
    });
  });
});
