import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Photography = () => (
  <Layout>
    <SEO title="Photography" />
    
   <p style={{ fontWeight: 'bold' }}>Photography</p>

   <Link to="/mirrors">Mirrors</Link>
   <br />
   <Link to="/street-photography">Street Photography</Link>
   <br />
   <br />

           <div classList='imgContainer'>
      <img src="https://64.media.tumblr.com/8901121bb817901ea9dad548bd83d28d/e0e0460715ddd70b-d0/s2048x3072/d8bad1486fdb30764a322f0009439994c18d5556.jpg" />
    </div>


    <div classList='imgContainer'>
      <img src="https://benjifriedmanart.files.wordpress.com/2020/10/screen-shot-2020-10-28-at-6.56.46-pm.jpg" />
    </div>

        <div classList='imgContainer'>
      <img src="https://64.media.tumblr.com/19f37e7ada92d02022868a11850eb44e/bc21319ea7116a18-a1/s500x750/c43f46d266904f7511e2d392be4400a4ede2e312.jpg" />
    </div>

            <div classList='imgContainer'>
      <img src="https://benjifriedmanart.files.wordpress.com/2020/01/5.jpg" />
    </div>

                <div classList='imgContainer'>
      <img src="https://64.media.tumblr.com/5a7858d36b0dbd606aea19f93df40cbe/4e321956ac4d3f72-bd/s500x750/4906af22c8adcd9cd48fad95dbd1a7bc57f31ef6.jpg" />
    </div>

        <div classList='imgContainer'>
      <img src="https://assets2.ello.co/uploads/asset/attachment/12001967/ello-optimized-d585cec9.jpg" />
    </div>

            <div classList='imgContainer'>
      <img src="    https://64.media.tumblr.com/b79691d723acadb4ccc77c7a3f757463/1aa083ca57c85ce2-81/s500x750/e3c0a4eee7174af8e35219441f409938026a2a89.jpg
" />
    </div>

    
    
  </Layout>
)

export default Photography
