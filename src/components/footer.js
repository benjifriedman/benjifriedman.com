import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./layout.css"

const Footer = ({ siteTitle }) => (
  <>
  <footer style={{ marginTop: `2rem` }}>
    <Link to="/">Home</Link> <br /> 
    <Link to="/about">About</Link> <br /> 
    <br />
		<Link to="/paintings/">Paintings</Link> <br />
		<Link to="/photography/">Photography</Link> <br />
		<Link to="/digital/">Digital</Link> <br />
		<Link to="/sculptures/">Sculptures</Link> <br />
		<br />
		<Link to="/selections1/">1/4/21</Link> <br />

		<br />
		<Link to="https://www.facebook.com/benjifriedman.art" target="_blank">Facebook</Link> <br />
		<Link to="https://instagram.com/benjifriedman" target="_blank">Instagram</Link> <br />
		<Link to="https://benji-friedman.tumblr.com" target="_blank">Tumblr</Link> <br />
		<Link to="https://ello.co/benjifriedman" target="_blank">Ello</Link> <br />
		<br />
		© {new Date().getFullYear()}, Built with
		{` `}
		<a href="https://www.gatsbyjs.com">Gatsby</a>
		<br />
  </footer>	
  </>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: `Benji Friedman`,
}

export default Footer







