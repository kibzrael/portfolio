import { Link } from "gatsby";
import React from "react";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white h-14 shadow-lg flex flex-row justify-between items-center px-9">
      <Link className="text-gray-900 font-semibold text-xl" to="/">
        Home
      </Link>
      <div className="space-x-7">
        <Link className="link" to="/">
          Contact
        </Link>
        <Link className="link" to="/">
          Projects
        </Link>
        <Link className="link" to="/">
          About
        </Link>
      </div>
    </nav>
  );
}
