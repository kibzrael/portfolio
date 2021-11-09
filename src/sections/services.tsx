import React from "react";

export default function Services() {
  let services: string[] = [
    "Responsive Websites",
    "Backend Support",
    "Web Analytics",
    "Hosting",
  ];
  return (
    <div className="mx-6 md:mx-12 lg:mx-24 py-9">
      {services.map((service: string, index: number) => {
        return (
          <div
            key={index}
            className={
              `flex flex-col md:${
                index % 2 == 1 ? "flex-row" : "flex-row-reverse"
              } h-screen py-9 space-y-4 md:space-y-0 items-center justify-evenly`
              // "flex " +
              // (index % 2 == 0 ? "flex-row" : "flex-row-reverse ") +
              // "py-9 items-center justify-evenly"
            }>
            <div className="w-4/5 md:w-1/2">
              <div className="h-56 w-48 bg-gray-600 mx-auto"></div>
            </div>
            <div className="w-4/5 md:w-1/2 md:px-12 space-y-6">
              <h2 className="text-center md:text-left">{service}</h2>
              <p className="text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
                omnis! Eius atque ipsa cupiditate beatae voluptates porro
                nostrum totam ipsam magni, vel facere! Delectus laudantium magni
                eligendi officia eum totam.
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
