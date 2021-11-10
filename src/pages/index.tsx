import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import HomeCover from "../sections/cover";
import Languages from "../sections/languages";
import Projects from "../sections/projects";
import Services from "../sections/services";
import Stacks from "../sections/stacks";
import Tools from "../sections/tools";

// const IndexPage = () => {
//   return <div>Hellooo</div>;
// };

export default function IndexPage() {
  return (
    <div className="">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Raelcode</title>
      </Helmet>
      <Layout>
        <div className="home">
          <HomeCover />
          <Services />
          <Projects />
          <Stacks />
          <Tools />
          <Languages />
        </div>
      </Layout>
    </div>
  );
}
