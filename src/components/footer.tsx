import React from "react";
import Contact from "../sections/contact";
import Profiles from "../sections/profiles";

export default function Footer() {
  return (
    <div className="w-full px-2 xsm:px-4 sm:px-6 md:px-12 lg:px-24 py-6 bg-blue-800 text-white flex flex-col items-center">
      <Profiles />
      <Contact />
      <p className="text-center">Copyright 2021 @kibzrael</p>
    </div>
  );
}
