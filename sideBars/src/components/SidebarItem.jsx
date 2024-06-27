import React from "react";

export default function SidebarItem({ Icon, text, span }) {
  return (
    <li>
      <a href="#">
        <Icon />
        <div className="text">
          <p>{text}</p>
          {span ? <span>{span}</span> : ""}
        </div>
      </a>
      <div className="tooltip">{text}</div>
    </li>
  );
}
