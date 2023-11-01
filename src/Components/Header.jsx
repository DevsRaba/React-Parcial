import React from "react";

const Header = () => {
  const titles = ["Home", "Shop", "About", "Contact"];
  return (
    <div>
      {titles.map((title, index) => {
        return <h5 key={index}>{title}</h5>;
      })}
    </div>
  );
};

export default Header;
