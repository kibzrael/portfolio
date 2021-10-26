import React from "react";

export default function Services() {
  let services: string[] = [
    "Responsive Websites",
    "Backend Support",
    "Web Analytics",
    "Hosting",
  ];
  return (
    <div className="mx-12 lg:mx-24 py-9">
      {services.map((service: string, index: number) => {
        return (
          <div
            key={index}
            className={
              `flex flex-col md:${
                index % 2 == 0 ? "flex-row" : "flex-row-reverse"
              } py-9 mx-4 items-center justify-evenly`
              // "flex " +
              // (index % 2 == 0 ? "flex-row" : "flex-row-reverse ") +
              // "py-9 items-center justify-evenly"
            }>
            <div className="w-1/2">
              <div className="h-48 w-32 bg-blue-100 mx-auto"></div>
            </div>
            <div className="w-1/2">
              <h2>{service}</h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
              omnis! Eius atque ipsa cupiditate beatae voluptates porro nostrum
              totam ipsam magni, vel facere! Delectus laudantium magni eligendi
              officia eum totam.
            </div>
          </div>
        );
      })}
    </div>
  );
}
