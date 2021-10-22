import React from "react";

export default function Services() {
  let services: string[] = [
    "Responsive Websites",
    "Backend Support",
    "Web Analytics",
    "Hosting",
  ];
  return (
    <div className="py-9">
      {services.map((service: string, index: number) => {
        return (
          <div
            key={index}
            className={
              `flex ${
                index % 2 == 0 ? "flex-row" : "flex-row-reverse"
              } py-9 items-center justify-evenly`
              // "flex " +
              // (index % 2 == 0 ? "flex-row" : "flex-row-reverse ") +
              // "py-9 items-center justify-evenly"
            }>
            <div
              className="h-32 w-32 bg-blue-100"
              style={{
                minWidth: "64px",
              }}></div>
            <div className="w-1/3">
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
