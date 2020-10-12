import React from 'react';
import PropTypes from 'prop-types';
import { view } from '@risingstack/react-easy-state';

const year = (new Date()).getFullYear();

const Footer = ({
  links: {
    discord,
    github,
    medium,
    twitter,
  },
}) => (
  <div className="footer-container">
    <div className="left">
      <span className="footer-link">
        Strudel Finance &nbsp;
        { year }
      </span>
    </div>
    <div className="right">
      <a
        className="footer-link"
        href={discord}
        target="_blank"
        rel="noopener noreferrer"
      >
        Discord
      </a>
      <a
        className="footer-link"
        href={twitter}
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
      <a
        className="footer-link"
        href={medium}
        target="_blank"
        rel="noopener noreferrer"
      >
        Medium
      </a>
      <a
        className="footer-link"
        href={github}
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
    </div>
  </div>
);
Footer.propTypes = {
  links: PropTypes.shape({
    discord: PropTypes.string.isRequired,
    docs: PropTypes.string.isRequired,
    forum: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    medium: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired,
  }).isRequired,
};

export default view(Footer);
