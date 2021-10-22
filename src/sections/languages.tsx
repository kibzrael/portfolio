import React from "react";

export default function Languages() {
  let languages: string[] = ["Python", "Typescript", "Dart", "Javascript"];
  return (
    <div className="mx-24 my-9">
      <h2>Languages</h2>
      <div className="flex flex-row justify-evenly">
        {languages.map((language: string, index: number) => {
          return (
            <div key={index} className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-gray-100"></div>
              <p>{language}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
