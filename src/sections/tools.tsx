import React from "react";

export default function Tools() {
  let tools: string[] = ["Git", "Figma", "Vs Code"];
  return (
    <div className="mx-24 my-9">
      <h2>Tools</h2>
      <div className="flex flex-row justify-evenly">
        {tools.map((tool: string, index: number) => {
          return (
            <div key={index} className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-gray-100"></div>
              <p>{tool}</p>
              <p>Lorem ipsum dolor</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
