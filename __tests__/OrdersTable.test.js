import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import OrdersTable from "../components/organisms/OrdersTable";

describe("OrdersTable", () => {
  // Mock window.matchMedia
  window.matchMedia = jest.fn().mockImplementation(() => ({
    matches: true,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  }));

  it("should render orders table", () => {
    const orders = [
      {
        _id: "1",
        firstName: "First Name",
        lastName: "Last Name",
        email: "test@gmail.com",
        deliveryAddress: "Test Address",
        postalCode: "10220",
        phoneNumber: "0771234567",
        orderTotal: 1200,
        orderItems: [
          {
            _id: "2",
            craft: {
              _id: "3",
              name: "Test Craft",
              description: "Test Description",
              price: 1200,
              image: "image.jpg",
              stock: 3,
            },
            quantity: 1,
          },
        ],
      },
    ];

    render(<OrdersTable orders={orders} />);

    expect(
      screen.getByText(`${orders[0].firstName} ${orders[0].lastName}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${orders[0].deliveryAddress} ${orders[0].postalCode}`)
    ).toBeInTheDocument();
    expect(screen.getByText(orders[0].phoneNumber)).toBeInTheDocument();
    expect(screen.getByText(orders[0].orderTotal)).toBeInTheDocument();
    expect(
      screen.getByText(
        `${orders[0].orderItems[0].craft.name} x ${orders[0].orderItems[0].quantity}`
      )
    ).toBeInTheDocument();
  });
});
