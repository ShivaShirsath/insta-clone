import React from "react";

const SideBarItem = ({ icon, name }) => {
  return (
    <li
      style={{
        color: "white",
              listStyle: "none",
        margin: "2.5%",
        paddingBlock: "10%",
        padding: "5%",
        display: "flex",
        gap: "5%",
        alignItems: "center",
        fontWeight: "500",
        fontFamily:
          "BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      {icon}
      {name}
    </li>
  );
};

export default SideBarItem;
