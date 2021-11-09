import React, { useEffect, useState } from "react";
import useWindowDimensions from "../windowDimensions";

export default function Projects() {
  const { width, height } = useWindowDimensions();

  let maxWidth = 360;
  let padding = width < 1024 ? 48 : 96;
  let cols = width < 640 ? 1 : width < 1024 ? 2 : 3;
  let cardWidth = ((width - padding) / cols) * 0.9;

  let row: boolean = cardWidth > maxWidth;

  let projects: string[] = ["Pulsar", "ShopVille", "Portofolio"];

  return (
    <div className="mx-2 xsm:mx-4 sm:mx-6 md:mx-12 lg:mx-24 my-9">
      <h2>My Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project: string, index: number) => {
          return (
            <div
              key={index}
              style={{
                width: "90%",
              }}
              className={`h-auto mx-auto overflow-hidden bg-card my-6 shadow-md rounded-lg flex ${
                row ? "flex-row" : "flex-col space-y-2 pb-2"
              } items-center`}>
              <div
                className={`${
                  row ? "w-2/5 h-48" : "h-32 w-full"
                } bg-gray-800`}></div>
              <div
                className={`flex flex-col ${
                  row
                    ? "h-48 justify-evenly w-3/5 py-4"
                    : "items-center space-y-2 py-2"
                } px-8`}>
                <h4 className="font-semibold text-lg">{project}</h4>
                <p
                  className={`text-sm h-16 overflow-hidden ${
                    row ? "text-left" : "text-center"
                  }`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia, reiciendis, officiis, neque pariatur
                </p>
                <div className="flex flex-row w-full justify-between">
                  <p className="text-xs">@ www.{project.toLowerCase()}.com</p>
                  <div className="h-4 w-4 bg-gray-700 rounded-full"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
