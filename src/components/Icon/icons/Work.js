import React from 'react';
import PropTypes from 'prop-types';
import iconColorsMap from './colors';

const Work = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill}
    {...props}
  >
    <path d="M22 6h-6V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H2v15h20V6zm-8 0h-4V4h4v2z" />
  </svg>
);
Work.propTypes = { fill: PropTypes.string };
Work.defaultProps = { fill: iconColorsMap.mainicon };

export default Work;
