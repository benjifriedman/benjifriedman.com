import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const StreetPhotography = () => (
  <Layout>
    <SEO title="StreetPhotography" />

    <p style={{ fontWeight: "bold" }}>Street Photography</p>

    <br />
    <div className="imgContainer">
      <img
        alt=""
        src="https://res.cloudinary.com/benjifri/image/upload/v1610006290/benjifriedman.com%202021/photography/streetphotography/1.jpg"
      />
    </div>
    <div className="imgContainer">
      <img
        alt=""
        src="https://res.cloudinary.com/benjifri/image/upload/v1610006290/benjifriedman.com%202021/photography/streetphotography/2.jpg"
      />
    </div>
    <div className="imgContainer">
      <img
        alt=""
        src="https://res.cloudinary.com/benjifri/image/upload/v1610006290/benjifriedman.com%202021/photography/streetphotography/3.jpg"
      />
    </div>
    <div className="imgContainer">
      <img
        alt=""
        src="https://res.cloudinary.com/benjifri/image/upload/v1610006290/benjifriedman.com%202021/photography/streetphotography/4.jpg"
      />
    </div>
    <div className="imgContainer">
      <img
        alt=""
        src="https://res.cloudinary.com/benjifri/image/upload/v1610006290/benjifriedman.com%202021/photography/streetphotography/5.jpg"
      />
    </div>
    <div className="imgContainer">
      <img
        alt=""
        src="https://res.cloudinary.com/benjifri/image/upload/v1610006290/benjifriedman.com%202021/photography/streetphotography/6.jpg"
      />
    </div>
  </Layout>
);

export default StreetPhotography;
