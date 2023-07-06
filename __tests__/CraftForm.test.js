import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CraftForm from "../components/organisms/CraftForm";

describe("CraftForm", () => {
  // Mock window.matchMedia
  window.matchMedia = jest.fn().mockImplementation(() => ({
    matches: true,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  }));

  it("should render edit craft form with values", () => {
    const mockFunction = jest.fn();
    const craft = {
      _id: "1",
      name: "Test Craft",
      description: "Test Description",
      price: 100,
      image: "test.jpg",
      stock: 3,
    };

    render(
      <CraftForm craft={craft} loading={false} handleSuccess={mockFunction} />
    );

    expect(screen.getByDisplayValue(craft.name)).toBeInTheDocument();
    expect(screen.getByDisplayValue(craft.description)).toBeInTheDocument();
    expect(screen.getByDisplayValue(craft.price)).toBeInTheDocument();
    expect(screen.getByDisplayValue(craft.stock)).toBeInTheDocument();
  });
});
