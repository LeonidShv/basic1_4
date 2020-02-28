import React from 'react';
import PropTypes from 'prop-types';

export default function HelloName(props) {
  const { name } = props;

  return (
    <h1>
      Hello
      { name }
    </h1>
  );
}

HelloName.propTypes = {
  name: PropTypes.string.isRequired,
};
