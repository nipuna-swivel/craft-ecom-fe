import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CartIcon from "../components/organisms/CartIcon";

describe("CarIcon", () => {
  it("should render total price and items count", () => {
    render(<CartIcon totalPrice={200} itemsCount={2} />);

    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("LKR 200")).toBeInTheDocument();
  });
});
