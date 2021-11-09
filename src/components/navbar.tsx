import { Link } from "gatsby";
import React, { useLayoutEffect, useState } from "react";
import "../styles/navbar.css";
import useWindowDimensions from "../windowDimensions";

export default function Navbar() {
  let [scrollPosition, updateScroll] = useState(window.scrollY);

  let { width, height } = useWindowDimensions();

  useLayoutEffect(() => {
    const handleScroll = () => {
      updateScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav
      style={{
        backgroundColor: `rgba(18, 18, 18,${
          scrollPosition / height >= 1 ? 1 : scrollPosition / height
        })`,
      }}
      className={`fixed w-full h-14 shadow-${
        scrollPosition > height ? "lg" : "none"
      } flex flex-row justify-between items-center px-9`}>
      <Link className="font-bold tracking-wide text-2xl" to="/">
        raelcode
      </Link>
      <div className="flex flex-col space-y-1">
        <div className="w-8 h-1 rounded-full bg-white md:hidden"></div>
        <div className="w-8 h-1 rounded-full bg-white md:hidden"></div>
        <div className="w-8 h-1 rounded-full bg-white md:hidden"></div>
      </div>
      <div className="space-x-7 hidden md:inline">
        <Link className="link" to="/">
          Contact
        </Link>
        <Link className="link" to="/projects">
          Projects
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
      </div>
    </nav>
  );
}
