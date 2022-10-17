import React from "react";

const RenderColors = ({ rgb }) => {
  return (
    <div style={{ backgroundColor: rgb }} className="square button-img"></div>
  );
};

export default RenderColors;
