import React from "react";
import Logo from "../logo";

const SideBar = () => {
  return (
    <div
      style={{
              borderRight: "1px solid gray",
          flex: 2
      }}
    >
      <Logo />
    </div>
  );
};

export default SideBar;
