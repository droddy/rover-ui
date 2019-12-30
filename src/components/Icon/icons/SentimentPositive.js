import React from 'react';
import PropTypes from 'prop-types';
import iconColorsMap from './colors';

const SentimentPositive = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill}
    {...props}
  >
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1.97-4.53c1 1.13.04.06 1.01 1.15a5.49 5.49 0 01-5.95.01c.15-.17.89-1.01 1.01-1.15.58.34 1.23.52 1.96.52s1.38-.18 1.97-.53zM15.5 8a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-7 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
  </svg>
);
SentimentPositive.propTypes = { fill: PropTypes.string };
SentimentPositive.defaultProps = { fill: iconColorsMap.mainicon };

export default SentimentPositive;
