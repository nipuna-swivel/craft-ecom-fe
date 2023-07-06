import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CartTotalPriceCard from "../components/organisms/CartTotalPriceCard";

describe("CartTotalPriceCard", () => {
  it("should render total price", () => {
    const price = 100;
    render(<CartTotalPriceCard totalPrice={price} />);

    expect(screen.getByText(`LKR ${price}`)).toBeInTheDocument();
  });
});
