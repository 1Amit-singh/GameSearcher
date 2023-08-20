import React, { useState } from "react";
import "./Nav.css";
import { FaSearch } from "react-icons/fa";

const Nav = () => {
  const [name, setName] = useState("");

  return (
    <div className="nav">
      <a className="logo">LOGO</a>
      <ul>
        <li>
          <a>Store</a>
        </li>
        <li>
          <a>Community</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Support</a>
        </li>
      </ul>
      <div className="searchDiv">
        <input
          className="navSearch"
          type="text"
          placeholder="Search"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <FaSearch className="searchIcon" />
      </div>
    </div>
  );
};

export default Nav;
