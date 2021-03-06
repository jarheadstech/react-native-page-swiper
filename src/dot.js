'use strict';

import React, { Component } from 'react';
import { View ,ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

export default class Dot extends Component {

  render() {
    const { color, diameter } = this.props;

    return React.createElement(View, {
      style: [{
        backgroundColor: color,
        width: 15,
        height: 3,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
      }, this.props.style]
    });
  }
}
Dot.propTypes = {
  color: PropTypes.string,
  diameter: PropTypes.number,
  style: ViewPropTypes.style,
};
Dot.defaultProps = {
  color: 'rgba(192, 192, 192, 1)',
  diameter: 10
};