import React from 'react';
import PropTypes from 'prop-types';
import iconColorsMap from './colors';

const ChartDonut = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill}
    {...props}
  >
    <path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z" />
  </svg>
);
ChartDonut.propTypes = { fill: PropTypes.string };
ChartDonut.defaultProps = { fill: iconColorsMap.mainicon };

export default ChartDonut;
