import PropTypes from "prop-types"
import React from "react"

import "./footer.scss"

const Footer = ({ siteTitle }) => (
  <footer>
    <div>© Smartval.nu</div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
