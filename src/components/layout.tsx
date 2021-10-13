import React, { ReactNode } from "react";
import Footer from "./footer";
import Navbar from "./navbar";

interface LayoutInterface {
  children: ReactNode;
}

export default function Layout({ children, ...props }: LayoutInterface) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
