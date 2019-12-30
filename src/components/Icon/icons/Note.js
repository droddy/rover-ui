import React from 'react';
import PropTypes from 'prop-types';
import iconColorsMap from './colors';

const Note = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill}
    {...props}
  >
    <path d="M22 10l-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99l16-.01c1.1 0 2-.89 2-1.99v-8zm-7-4.5l5.5 5.5H15V5.5z" />
  </svg>
);
Note.propTypes = { fill: PropTypes.string };
Note.defaultProps = { fill: iconColorsMap.mainicon };

export default Note;
