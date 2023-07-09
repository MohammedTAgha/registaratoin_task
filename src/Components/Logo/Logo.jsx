import React from "react";

const Logo = ({ image, height, width }) => {
  return <img src={image} alt="Logo" height={height} width={width} />;
};

export default Logo;
