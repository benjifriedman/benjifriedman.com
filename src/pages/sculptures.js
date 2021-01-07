import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Sculptures = () => (
  <Layout>
    <SEO title="Sculptures" />

    <p style={{ fontWeight: `bold` }}>Sculptures</p>
    <br />

    <div className="imgContainer">
      <img
        alt=""
        src="https://res.cloudinary.com/benjifri/image/upload/v1610006311/benjifriedman.com%202021/sculptures/1.jpg"
      />
    </div>
    <div className="imgContainer">
      <img
        alt=""
        src="https://res.cloudinary.com/benjifri/image/upload/v1610006311/benjifriedman.com%202021/sculptures/2.jpg"
      />
    </div>
    <div className="imgContainer">
      <img
        alt=""
        src="https://res.cloudinary.com/benjifri/image/upload/v1610006311/benjifriedman.com%202021/sculptures/3.jpg"
      />
    </div>
    <div className="imgContainer">
      <img
        alt=""
        src="https://res.cloudinary.com/benjifri/image/upload/v1610006311/benjifriedman.com%202021/sculptures/4.jpg"
      />
    </div>
  </Layout>
);

export default Sculptures;
