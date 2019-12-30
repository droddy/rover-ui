import React from 'react';
import PropTypes from 'prop-types';
import iconColorsMap from './colors';

const Info2 = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill}
    {...props}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
  </svg>
);
Info2.propTypes = { fill: PropTypes.string };
Info2.defaultProps = { fill: iconColorsMap.mainicon };

export default Info2;
