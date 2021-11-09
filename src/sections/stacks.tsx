import React from "react";

export default function Stacks() {
  let web: string[] = ["React Js", "Next Js", "Tailwind Css", "Gatsby"];
  let mobile: string[] = ["Flutter", "Django"];

  return (
    <div className="mx-2 xsm:mx-4 sm:mx-12 md:mx-12 lg:mx-24 my-9 space-y-4">
      <h2>Stacks</h2>
      <div>
        <h3 className="text-center m-4">Web</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4">
          {web.map((stack: string, index: number) => {
            return <Stack key={index} stack={stack} />;
          })}
        </div>
      </div>
      <div>
        <h3 className="text-center m-4">Mobile</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4">
          {mobile.map((stack: string, index: number) => {
            return <Stack key={index} stack={stack} />;
          })}
        </div>
      </div>
    </div>
  );
}

function Stack(props: { stack: string }) {
  return (
    <div className="flex flex-row space-x-8">
      <div className="w-14 h-14 bg-card rounded-md shadow-md"></div>
      <div className="flex flex-col">
        <h4>{props.stack}</h4>
        <p className="text-sm text-subtitle">lorem ipsum dolor sit amet</p>
      </div>
    </div>
  );
}
