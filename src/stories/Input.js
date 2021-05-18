import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

export function Input({ inputVariant, children, ...props }) {
  return <input type="text" className={`input ${inputVariant}`} {...props} />;
}

Input.propTypes = {
  inputVariant: PropTypes.string,
};

Input.defaultProps = {
  inputVariant: 'input-md',
};
