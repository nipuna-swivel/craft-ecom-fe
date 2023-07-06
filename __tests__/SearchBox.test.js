import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBox from "../components/molecules/SearchBox";

describe("SearchBox", () => {
  it("render with placeholder", () => {
    const mockFunction = jest.fn();

    render(<SearchBox placeholder="Search" onSearch={mockFunction} />);

    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
  });

  it("calls onSearch when search button is clicked", () => {
    const mockFunction = jest.fn();

    render(<SearchBox placeholder="Search" onSearch={mockFunction} />);
    fireEvent.click(screen.getByRole("button"));

    expect(mockFunction).toHaveBeenCalled();
  });
});
