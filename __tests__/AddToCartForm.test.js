import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import AddToCartForm from "../components/organisms/AddToCartForm";

describe("Add to cart form", () => {
  // Mock window.matchMedia
  window.matchMedia = jest.fn().mockImplementation(() => ({
    matches: true,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  }));

  it("should renders craft details with name, description and price", () => {
    const craft = {
      _id: "1",
      name: "Test Craft",
      price: 100,
      image: "test.jpg",
      description: "Test description",
      stock: 3,
    };

    const mockFunction = jest.fn();

    render(<AddToCartForm craft={craft} handleAddToCart={mockFunction} />);

    expect(screen.getByText(craft.name)).toBeInTheDocument();
    expect(screen.getByText(craft.description)).toBeInTheDocument();
    expect(screen.getByText(`LKR ${craft.price}`)).toBeInTheDocument();
  });
});
