import React from 'react';
import PropTypes from 'prop-types';

export default function getInfo(props) {
  const { name, position } = props;
  return (
    <p>
      {name}
      is
      {position}
    </p>
  );
}

getInfo.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};
