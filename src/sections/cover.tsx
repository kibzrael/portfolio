import React from "react";

export default function HomeCover() {
  return (
    <div className="h-screen pb-14 w-full bg-blue-50 flex flex-row justify-around items-center p-16">
      <div className="w-5/12 h-1/2 bg-blue-100 rounded-2xl"></div>

      <div className="flex flex-col justify-center items-center space-y-4">
        <p>Hey I am</p>
        <p>Raphael</p>
        <p>A frontend web and</p>
        <p>mobile developer</p>
      </div>
    </div>
  );
}
