import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Mirrors = () => (
  <Layout>
    <SEO title="Mirrors" />

    <p class="pageTitle">Mirrors</p>
    <br />

    <div className="imgContainer">
      <img
        alt=""
        src="https://res.cloudinary.com/benjifri/image/upload/v1610006301/benjifriedman.com%202021/photography/mirrors/1.jpg"
      />
    </div>
    <div className="imgContainer">
      <img
        alt=""
        src="https://res.cloudinary.com/benjifri/image/upload/v1610006301/benjifriedman.com%202021/photography/mirrors/2.jpg"
      />
    </div>
    <div className="imgContainer">
      <img
        alt=""
        src="https://res.cloudinary.com/benjifri/image/upload/v1610006301/benjifriedman.com%202021/photography/mirrors/3.jpg"
      />
    </div>
    <div className="imgContainer">
      <img
        alt=""
        src="https://res.cloudinary.com/benjifri/image/upload/v1610006301/benjifriedman.com%202021/photography/mirrors/4.jpg"
      />
    </div>
    <div className="imgContainer">
      <img
        alt=""
        src="https://res.cloudinary.com/benjifri/image/upload/v1610006301/benjifriedman.com%202021/photography/mirrors/5.jpg"
      />
    </div>
    <div className="imgContainer">
      <img
        alt=""
        src="https://res.cloudinary.com/benjifri/image/upload/v1610006301/benjifriedman.com%202021/photography/mirrors/6.jpg"
      />
    </div>
  </Layout>
);

export default Mirrors;
