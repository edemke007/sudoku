import React from "react";
import HeaderItem from "./header-item/HeaderItem";

const Header = () => {
  return (
    <div className="flex justify-end pt-2">
      <HeaderItem path="home" label="Home" />
      <HeaderItem path="sudoku" label="Sudoku" />
    </div>
  );
};

export default Header;
