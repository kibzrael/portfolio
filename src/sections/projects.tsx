import React from "react";

export default function Projects() {
  let projects: string[] = ["Pulsar", "ShopVille", "Portofolio"];
  return (
    <div className="mx-24 my-9">
      <h2>My Work</h2>
      <div className="flex flex-row justify-between">
        {projects.map((project: string, index: number) => {
          return (
            <div
              key={index}
              className="w-1/4 h-48 bg-white my-6 shadow-md rounded-lg flex flex-col items-center justify-center">
              {project}
            </div>
          );
        })}
      </div>
    </div>
  );
}
