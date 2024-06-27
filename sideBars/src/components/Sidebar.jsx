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

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  if (isExpanded) {
    document.getElementById("p").style.overflow = "hidden";
  } else {
    document.getElementById("p").style.overflow = "unset";
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
            <li>
              <a href="#">
                <FaHome />
                <div className="text">
                  {" "}
                  <p>Home </p>{" "}
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <FaMessage />
                <div className="text">
                  <p>message </p>
                </div>
              </a>
            </li>

            <li>
              <a href="#">
                <FaMap />
                <div className="text">
                  <p>Explore </p>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <FaUser />
                <div className="text">
                  <p>USer </p>
                </div>
              </a>
            </li>

            <li>
              <a href="#">
                <FaPhone />
                <div className="text">
                  <p>contact </p>
                </div>
              </a>
            </li>
          </ul>
        </nav>
        <div className="user_details">
          <ul className="sidebar_nav">
            <li>
              <a href="#">
                <MdEmail />
                <div className="text mail">
                  <p>rupxkumar5@gmail.com</p>
                  <span>new user</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
