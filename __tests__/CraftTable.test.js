import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CraftTable from "../components/organisms/CraftTable";

describe("CraftTable", () => {
  // Mock window.matchMedia
  window.matchMedia = jest.fn().mockImplementation(() => ({
    matches: true,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  }));

  it("should render craft table", () => {
    const mockFunction = jest.fn();
    const crafts = [
      {
        _id: "1",
        name: "Test Craft",
        description: "Test Description",
        price: 100,
        image: "test.jpg",
        stock: 3,
      },
    ];

    render(
      <CraftTable loading={false} crafts={crafts} handleDelete={mockFunction} />
    );

    expect(screen.getByText(crafts[0].name)).toBeInTheDocument();
    expect(screen.getByText(crafts[0].description)).toBeInTheDocument();
    expect(screen.getByText(crafts[0].price)).toBeInTheDocument();
    expect(screen.getByText(crafts[0].stock)).toBeInTheDocument();
  });
});
