import React, { useRef, useState } from "react";
import profile from "../../assets/profile.jpg";
import Dropdown from "./Dropdown";
function Header() {
  const [hamburger, setHamburger] = useState(false);
  const [profileVisible, setISProfileVisible] = useState(false);
  // const dropdownRef = useRef();
  // window.addEventListener("click", (e) => {
  //   console.log(e.target == dropdownRef.current);
  // });
  return (
    <header>
      <div className="logo">NavBars.</div>
      <nav>
        <ul className={hamburger ? "active" : ""}>
          <li>
            <a href="#" onClick={() => setHamburger(false)}>
              home
            </a>
          </li>
          <li>
            <a href="#">products</a>
          </li>
          <li>
            <a href="#">
              services
              <Dropdown />
            </a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>

          <div
            className="profile"
            onClick={() => setISProfileVisible((prev) => !prev)}
          >
            <img src={profile} alt="" />
            <Dropdown className={profileVisible ? "active" : ""} />
          </div>
        </ul>
      </nav>

      <div
        className={`hamburger ${hamburger ? "active" : ""}`}
        onClick={() => setHamburger((prev) => !prev)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
}

export default Header;
