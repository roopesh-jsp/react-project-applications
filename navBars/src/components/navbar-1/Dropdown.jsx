import React from "react";

function Dropdown({ className }) {
  return (
    <div className={`dropdown ${className}`}>
      <ul>
        <li>
          <a href="#">phone number</a>
        </li>
        <li>
          <a href="#">e-mail</a>
        </li>
        <li>
          <a href="#">achivements</a>
        </li>
        <li>
          <a href="#">privacy</a>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
