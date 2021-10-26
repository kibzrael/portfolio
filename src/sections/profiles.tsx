import React from "react";

export default function Profiles() {
  let profiles: string[] = ["Twitter", "Github", "Medium"];
  return (
    <div className="w-full mx-24 my-2">
      <div className="flex flex-wrap justify-evenly">
        {profiles.map((profile: string, index: number) => {
          return (
            <div key={index} className="flex flex-row space-x-4 items-center">
              <div className="w-8 h-8 rounded-full bg-gray-100"></div>
              <p>{profile}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
