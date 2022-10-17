import React from "react";

const ColorItems = ({ children }) => {
  return (
    <div className="colorWrapper">
      <div className="colorItems">{children}</div>
    </div>
  );
};

export default ColorItems;
