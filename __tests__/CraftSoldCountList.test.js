import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CraftSoldCountList from "../components/organisms/CraftSoldCountList";

describe("CraftSoldCountList", () => {
  it("should render craft selling details", () => {
    const items = [
      {
        name: "Test Craft 1",
        quantity: 15,
      },
      {
        name: "Test Craft 2",
        quantity: 10,
      },
    ];

    render(
      <CraftSoldCountList items={items} title="Top 5 best-selling crafts" />
    );

    expect(screen.getByText("Top 5 best-selling crafts")).toBeInTheDocument();
    expect(screen.getByText(items[0].name)).toBeInTheDocument();
    expect(screen.getByText(items[0].quantity)).toBeInTheDocument();
    expect(screen.getByText(items[1].name)).toBeInTheDocument();
    expect(screen.getByText(items[1].quantity)).toBeInTheDocument();
  });
});
