import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import Img from "gatsby-image";

export default function HomeCover() {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "profile.jpg" }) {
          publicURL
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  console.log(data);

  return (
    <div className="h-screen w-full bg-gray-700 flex flex-col md:flex-row justify-between items-center overflow-hidden">
      {/* <div className="w-64 h-72 px-8 py-4 bg-blue-100 rounded-2xl">
        <Img
          fluid={data.file.childImageSharp.fluid}
          className="w-2/3 mx-auto rounded-full"
        />
      </div> */}
      {/* <Img
        fluid={data.file.childImageSharp.fluid}
        className="w-full md:w-1/2 h-1/2 md:h-full object-cover"
      /> */}

      <img
        src={data.file.publicURL}
        alt="profile photo"
        className="w-full md:w-1/2 h-1/2 md:h-full object-cover"
      />

      <div className="flex flex-col justify-center my-auto md:mx-auto items-center text-center space-y-8">
        <p className="text-2xl text-headline font-medium">Hey I am</p>
        <p className="text-5xl font-serif italic font-semibold">Raphael Kibe</p>
        <div className="flex flex-col space-y-2 items-center">
          <p className="text-3xl font-semibold font-mono text-headline">
            A frontend web and
          </p>
          <p className="text-3xl font-semibold font-mono text-headline">
            mobile developer
          </p>
        </div>
      </div>
    </div>
  );
}
