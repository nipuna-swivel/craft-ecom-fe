import React, { useCallback } from "react";
import { Input } from "antd";
const _ = require("lodash");

interface ISearchBoxProps {
  placeholder: string;
  onSearch: (value: string) => void;
  style?: any;
  size?: "large" | "middle" | "small";
}

const SearchBox: React.FC<ISearchBoxProps> = ({
  placeholder,
  onSearch,
  style,
  size,
}) => {
  const { Search } = Input;

  const request = _.debounce((text: string) => {
    onSearch(text);
  }, 1000);

  const debounceRequest = useCallback(
    (value: string) => request(value),
    [request]
  );

  const handleChange = (value: string) => {
    let text = value ? value : "ALL";
    debounceRequest(text);
  };

  return (
    <Search
      size={size}
      style={style}
      onSearch={onSearch}
      placeholder={placeholder}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export default SearchBox;
