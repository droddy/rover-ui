import React from 'react';
import PropTypes from 'prop-types';
import iconColorsMap from './colors';

const ReplyAll = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill}
    {...props}
  >
    <path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z" />
  </svg>
);
ReplyAll.propTypes = { fill: PropTypes.string };
ReplyAll.defaultProps = { fill: iconColorsMap.mainicon };

export default ReplyAll;
