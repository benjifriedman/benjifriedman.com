import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Photography = () => (
  <Layout>
    <SEO title="Photography" />

    <p style={{ fontWeight: "bold" }}>Photography</p>

    <Link to="/mirrors">Mirrors</Link>
    <br />
    <Link to="/street-photography">Street Photography</Link>
    <br />
    <br />

    <div className="imgContainer">
      <img
        alt=""
        src="https://res.cloudinary.com/benjifri/image/upload/v1610006292/benjifriedman.com%202021/photography/1.jpg"
      />
    </div>
    <div className="imgContainer">
      <img
        alt=""
        src="https://res.cloudinary.com/benjifri/image/upload/v1610006292/benjifriedman.com%202021/photography/2.jpg"
      />
    </div>
    <div className="imgContainer">
      <img
        alt=""
        src="https://res.cloudinary.com/benjifri/image/upload/v1610006292/benjifriedman.com%202021/photography/3.jpg"
      />
    </div>
    <div className="imgContainer">
      <img
        alt=""
        src="https://res.cloudinary.com/benjifri/image/upload/v1610006292/benjifriedman.com%202021/photography/4.jpg"
      />
    </div>
    <div className="imgContainer">
      <img
        alt=""
        src="https://res.cloudinary.com/benjifri/image/upload/v1610006292/benjifriedman.com%202021/photography/5.jpg"
      />
    </div>
    <div className="imgContainer">
      <img
        alt=""
        src="https://res.cloudinary.com/benjifri/image/upload/v1610006292/benjifriedman.com%202021/photography/6.jpg"
      />
    </div>
    <div className="imgContainer">
      <img
        alt=""
        src="https://res.cloudinary.com/benjifri/image/upload/v1610006292/benjifriedman.com%202021/photography/7.jpg"
      />
    </div>
  </Layout>
);

export default Photography;
