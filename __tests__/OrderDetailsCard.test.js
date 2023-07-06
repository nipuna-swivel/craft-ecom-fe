import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import OrderDetailsCard from "../components/organisms/OrderDetailsCard";

describe("CartDrawerItem", () => {
  it("should render name, price, quantity and total", () => {
    const items = [
      {
        _id: "1",
        name: "Test Craft",
        price: 100,
        image: "test.jpg",
        description: "Test description",
        stock: 2,
        quantity: 1,
      },
      {
        _id: "2",
        name: "Test Craft2",
        price: 150,
        image: "test2.jpg",
        description: "Test description2",
        stock: 3,
        quantity: 2,
      },
    ];

    const totalPrice = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    render(<OrderDetailsCard totalPrice={totalPrice} items={items} />);

    expect(
      screen.getByText(`${items[0].name} x ${items[0].quantity}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`LKR ${items[0].price * items[0].quantity}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${items[1].name} x ${items[1].quantity}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`LKR ${items[1].price * items[1].quantity}`)
    ).toBeInTheDocument();

    expect(screen.getByText(`LKR ${totalPrice}`)).toBeInTheDocument();
  });
});
