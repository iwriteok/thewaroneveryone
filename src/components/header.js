import React from "react"
import PropTypes from "prop-types"

import logo from "../images/logo.svg"
import { COLORS } from "../styles/constants";

const Header = ({ siteTitle }) => (

    <img src={logo} alt='' style={{
      maxWidth: '400vw',
      minHeight: '10vw',      
      maxHeight: '40vh',
      width: '400vw',
      marginLeft: '-150%',
      marginRight: '-150%'
    }}/>
    

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
