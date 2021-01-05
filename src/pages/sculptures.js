import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Sculptures = () => (
  <Layout>
    <SEO title="Sculptures" />
    
    <p style={{ fontWeight:`bold` }}>Sculptures</p>
    <br />


    <div classList='imgContainer'>
      <img src="    https://assets2.ello.co/uploads/asset/attachment/11996528/ello-optimized-7a55fe6f.jpg" />
    </div>


        <div classList='imgContainer'>
      <img src="https://assets2.ello.co/uploads/asset/attachment/12187427/ello-optimized-cd4d37b6.jpg" />
    </div>


            <div classList='imgContainer'>
      <img src="https://64.media.tumblr.com/012e0fde8e82bc6f1a1ff8bfcce79bb1/ee0525112aee6390-28/s500x750/72c1a5c5efdbf38a59d4a1313f7713c9fc927b31.jpg" />
    </div>


            <div classList='imgContainer'>
      <img src="https://64.media.tumblr.com/63560847acc3ae6250f245ed9a7cb139/9f28e5e916609e06-40/s500x750/d37d8d547a494677e2ced8e33fa246f42312e89d.jpg" />
    </div>
   
  </Layout>
)

export default Sculptures
