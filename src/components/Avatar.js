import React from 'react';
import PropTypes from 'prop-types';
import getImage from '../helpers/getImage';
import './Avatar.less';

const Avatar = ({ username, size }) => (
  <img
    className="Avatar"
    style={{ minWidth: `${size}px`, width: `${size}px`, height: `${size}px` }}
    alt={username}
    src={getImage(`@${username || 'steemconnect'}?s=${size}`)}
  />
);

Avatar.propTypes = {
  username: PropTypes.string,
  size: PropTypes.number,
};

Avatar.defaultProps = {
  username: undefined,
  size: 34,
};

export default Avatar;
