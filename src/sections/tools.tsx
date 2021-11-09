import React from "react";

export default function Tools() {
  let tools: string[] = ["Git", "Figma", "Vs Code"];
  return (
    <div className="mx-12 lg:mx-24 my-9">
      <h2>Tools</h2>
      <div className="flex flex-wrap justify-evenly">
        {tools.map((tool: string, index: number) => {
          return (
            <div key={index} className="mx-2 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-card"></div>
              <h4>{tool}</h4>
              <p className="text-sm text-subtitle flex-nowrap">Lorem ipsum</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
