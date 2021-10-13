import { graphql } from "gatsby";
import React from "react";

interface ProjectData {
  id: string;
  name: string;
  description: string;
}

export default function Project({ ...props }) {
  var data: ProjectData = props.data.projectsJson;
  return (
    <div>
      <p>{data.id}</p>
      <p>{data.name}</p>
      <p>{data.description}</p>
    </div>
  );
}

export const query = graphql`
  query ($id: String!) {
    projectsJson(id: { eq: $id }) {
      id
      name
      description
    }
  }
`;
