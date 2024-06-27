import React, { useState } from "react";
import { BsHammer, BsVoicemail } from "react-icons/bs";
import {
  FaContao,
  FaHamburger,
  FaHome,
  FaMailchimp,
  FaMap,
  FaPhone,
  FaUser,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosMailOpen } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { PiHamburger } from "react-icons/pi";
import { Si99Designs } from "react-icons/si";
import SidebarItem from "./SidebarItem";

export default function Sidebar({ isExpanded, setIsExpanded }) {
  if (isExpanded) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
  return (
    <div className={isExpanded ? "backdrop" : ""}>
      <aside className={isExpanded ? "" : "shrink"}>
        <div className="sidebar_head">
          <div className="text">
            <h1>sidebar</h1>
          </div>
          <GiHamburgerMenu
            className="icon"
            onClick={() => {
              setIsExpanded((prev) => !prev);
            }}
          />
        </div>
        <nav>
          <ul className="sidebar_nav">
            <SidebarItem Icon={FaHome} text={"home"} />
            <SidebarItem Icon={FaMessage} text={"message"} />
            <SidebarItem Icon={FaMap} text={"explore"} />
            <SidebarItem Icon={FaUser} text={"profile"} />
            <SidebarItem Icon={FaPhone} text={"Phone"} />
          </ul>
        </nav>
        <div className="user_details">
          <ul className="sidebar_nav">
            <SidebarItem
              Icon={MdEmail}
              text={"rupzKumar5@gamil.com"}
              span={"new user"}
            />
          </ul>
        </div>
      </aside>
    </div>
  );
}
