import React from "react";
import Logo from "../logo";
import Home from "../assets/Home";
import SideBarItem from "./SideBarItem";
import Explore from "../assets/Explore";
import Reels from "../assets/Reels";
import New from "../assets/New";
import Search from "../assets/Search";
import Notifications from "../assets/Notifications";
import Messenger from "../assets/Messenger";
import Profile from "../assets/Profiile.png";

const SideBar = () => {
  const navlist = [
    {
      icon: <Home />,
      name: "Home",
    },
    {
      icon: <Search />,
      name: "Search",
    },
    {
      icon: <Explore />,
      name: "Explore",
    },
    {
      icon: <Reels />,
      name: "Reels",
    },
    {
      icon: <Messenger />,
      name: "Messages",
    },
    {
      icon: <Notifications />,
      name: "Notifications",
    },
    {
      icon: <New />,
      name: "Create",
    },
    {
      icon: (
        <img
          src={Profile}
          style={{
            borderRadius: "50%",
            height: "24px",
            width: "24px",
          }}
        />
      ),
      name: "Profile",
    },
  ];
  return (
    <div
      style={{
        borderRight: "1px solid gray",
        flex: 2,
        paddingBlock: "2%",
        paddingInline: "1.5%",
      }}
    >
      <Logo />
      <ul style={{ paddingLeft: 0 }}>
        {navlist.map((item) => (
          <SideBarItem icon={item.icon} name={item.name} />
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
