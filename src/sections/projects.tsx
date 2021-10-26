import React from "react";

export default function Projects() {
  let projects: string[] = ["Pulsar", "ShopVille", "Portofolio"];
  return (
    <div className="mx-12 lg:mx-24 my-9">
      <h2>My Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project: string, index: number) => {
          return (
            <div
              key={index}
              style={{
                width: "90%",
              }}
              className="h-auto overflow-hidden bg-white my-6 shadow-md rounded-lg flex flex-col items-center space-y-2 pb-2">
              <div className="h-32 bg-gray-100 w-full"></div>

              <h4 className="font-semibold text-lg">{project}</h4>
              <p className="text-sm h-16 px-2 overflow-hidden text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, reiciendis, officiis, neque pariatur
              </p>
              <div className="flex flex-row">
                <p className="text-xs">www.{project.toLowerCase()}.com</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
