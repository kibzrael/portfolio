import { Link } from "gatsby";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/">Contact</Link>
      <Link to="/">Projects</Link>
      <Link to="/">About</Link>
    </nav>
  );
}
