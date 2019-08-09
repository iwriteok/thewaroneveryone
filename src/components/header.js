import React from "react"
import PropTypes from "prop-types"

import logo from "../images/logo-wide.svg"
import { COLORS } from "../styles/constants";

const Header = ({ siteTitle }) => (

    <img src={logo} alt='' style={{
      maxWidth: '300vw',
      minHeight: '10vw',      
      maxHeight: '40vh',
      width: '300vw',
      marginLeft: '-100%',
    }}/>
    

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
