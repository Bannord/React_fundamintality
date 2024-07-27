import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar_wrapper">
      <div className="navbal_links">
        <Link to="/posts">Посты</Link>
        <Link to="/about">О сайте</Link>
      </div>
    </div>
  );
};

export default Navbar;
