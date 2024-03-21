import React from "react";

const SideBarItem = ({ icon, name, badge, onClick, onDoubleClick }) => {
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
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    >
      <div style={{ position: "relative" }}>
        {icon}
        {badge && (
          <div
            style={{
              position: "absolute",
              top: "0",
              transform: "translate(40%, -40%)",
              right: "0",
              color: "white",
              width: "80%",
              height: "70%",
              borderRadius: "50%",
              background: "red",
              fontSize: "1vmin",
              display: "grid",
              placeItems: "center",
            }}
          >
            {badge}
          </div>
        )}
      </div>
      {name}
    </li>
  );
};

export default SideBarItem;
