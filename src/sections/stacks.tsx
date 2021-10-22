import React from "react";

export default function Stacks() {
  let web: string[] = ["React Js", "Next Js", "Tailwind Css", "Gatsby"];
  let mobile: string[] = ["Flutter", "Django"];

  return (
    <div className="mx-24 my-9 space-y-4">
      <h2>Stacks</h2>
      <div>
        <h3>Web</h3>
        <div className="grid grid-cols-2 gap-y-4">
          {web.map((stack: string, index: number) => {
            return (
              <div key={index} className="flex flex-row space-x-8">
                <div className="w-14 h-14 bg-gray-100"></div>
                <p>{stack}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h3>Mobile</h3>
        <div className="grid grid-cols-2 gap-y-4">
          {mobile.map((stack: string, index: number) => {
            return (
              <div key={index} className="flex flex-row space-x-8">
                <div className="w-14 h-14 bg-gray-100"></div>
                <p>{stack}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
