import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const About = () => (
  <Layout>
    <SEO title="About" />

    <p class="pageTitle">About</p>
    <br />

    <div classList="imgContainer">
      <img
        src="https://res.cloudinary.com/benjifri/image/upload/v1610006310/benjifriedman.com%202021/about/1.jpg"
        alt="Benji Friedman Studio"
      />
    </div>
  </Layout>
);

export default About;
