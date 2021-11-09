import React from "react";

export default function Languages() {
  let languages: string[] = ["Python", "Typescript", "Dart", "Javascript"];
  return (
    <div className="mx-2 xsm:mx-4 sm:mx-6 md:mx-12 lg:mx-24 my-9">
      <h2>Languages</h2>
      <div className="flex flex-wrap justify-evenly">
        {languages.map((language: string, index: number) => {
          return (
            <div key={index} className="mx-2 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-card"></div>
              <h4>{language}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
