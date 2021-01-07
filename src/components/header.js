import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <header style={{ marginBottom: `1.8rem` }}>
    <h1>
      <Link to="/">Benji Friedman</Link>
    </h1>
    <p style={{ fontWeight: "bold" }}>
      <a
        href="https://www.google.com/search?q=berkeley%2C+ca&oq=berkeley"
        target="_blank"
        rel="noreferrer"
      >
        Berkeley, CA
      </a>
    </p>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
