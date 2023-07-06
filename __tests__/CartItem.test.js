import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import CartItem from "../components/organisms/CartItem";

describe("CartItem", () => {
  it("should render name, price and subtotal", () => {
    const mockFunction = jest.fn();

    const craft = {
      _id: "1",
      name: "Test Craft",
      price: 100,
      image: "test.jpg",
      description: "Test description",
      stock: 3,
      quantity: 2,
    };

    render(
      <CartItem
        item={craft}
        handleRemove={mockFunction}
        handleQuantityUpdate={mockFunction}
      />
    );

    expect(screen.getByText(craft.name)).toBeInTheDocument();
    expect(screen.getByText(`LKR ${craft.price}`)).toBeInTheDocument();
    expect(
      screen.getByText(`LKR ${craft.price * craft.quantity}`)
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

    render(
      <CartItem
        item={craft}
        handleRemove={mockFunction}
        handleQuantityUpdate={mockFunction}
      />
    );

    const buttonElement = screen.getByLabelText("close-circle");
    fireEvent.click(buttonElement);

    expect(mockFunction).toHaveBeenCalled();
  });
});
