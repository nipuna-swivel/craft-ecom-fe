import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import CartDrawerItem from "../components/organisms/CartDrawerItem";

describe("CartDrawerItem", () => {
  it("should render name, price and quantity", () => {
    const mockFunction = jest.fn();

    const craft = {
      _id: "1",
      name: "Test Craft",
      price: 100,
      image: "test.jpg",
      description: "Test description",
      stock: 3,
      quantity: 1,
    };

    render(<CartDrawerItem item={craft} removeItem={mockFunction} />);

    expect(screen.getByText(craft.name)).toBeInTheDocument();
    expect(
      screen.getByText(`LKR ${craft.price} x ${craft.quantity}`)
    ).toBeInTheDocument();
  });

  it("should call removeItem when close button is clicked", () => {
    const mockFunction = jest.fn();

    const craft = {
      _id: "1",
      name: "Test Craft",
      price: 100,
      image: "test.jpg",
      description: "Test description",
      stock: 3,
      quantity: 1,
    };

    render(<CartDrawerItem item={craft} removeItem={mockFunction} />);

    const buttonElement = screen.getByLabelText("close-circle");
    fireEvent.click(buttonElement);

    expect(mockFunction).toHaveBeenCalled();
  });
});
