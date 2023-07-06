import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import OrderStats from "../components/organisms/OrderStats";

describe("Order Stats", () => {
  it("should render order stats", () => {
    render(
      <OrderStats totalOrders={10} totalSales={2000} totalSoldCrafts={50} />
    );

    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("2,000")).toBeInTheDocument();
    expect(screen.getByText("50")).toBeInTheDocument();
  });
});
