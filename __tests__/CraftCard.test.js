import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import CraftCard from "../components/organisms/CraftCard";

describe("CraftCard", () => {
  it("renders a card with a title, image, and price", () => {
    const craft = {
      name: "Test Craft",
      price: 100,
      image: "test.jpg",
    };
    render(
      <CraftCard image={craft.image} name={craft.name} price={craft.price} />
    );

    expect(screen.getByText(craft.name)).toBeInTheDocument();
    expect(screen.getByText(`LKR ${craft.price}`)).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", craft.image);
  });
});
