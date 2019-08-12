import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ siteTitle }) => (
  <footer>
    <div className='footer-grid'>
      <div>
        <div>
          <a href='https://www.behindthebastards.com/' className='white-text' target="_blank" rel="noopener noreferrer">
            Behind the Bastards
          </a>
        </div>
        <div>
          <a href='https://www.itcouldhappenherepod.com/about.htm' className='white-text' target="_blank" rel="noopener noreferrer">
            It Could Happen Here
          </a>
        </div>
        <div>
          <a href='https://www.gofundme.com/f/the-war-on-everyone' className='white-text' target="_blank" rel="noopener noreferrer">
            Our Indiegogo
          </a>
        </div>
        <div>
          <a href='https://twitter.com/iwriteok' className='white-text' target="_blank" rel="noopener noreferrer">
            Robert Evans on Twitter
          </a>
        </div>
      </div>
      <div className='copyright'>
        © {new Date().getFullYear() + ` ` + siteTitle}
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
