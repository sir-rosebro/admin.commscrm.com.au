import React from 'react';
import PropTypes from 'prop-types';

const StatBox = ({text, number, icon}) => {
    return (
        <div className="d-flex flex-column stats justify-content-center">
        <h2> {text}</h2>
        <div className="d-flex justify-content-between">
          <div className="stats-number"> {number}</div>
          <div> {icon}</div>
        </div>
      </div>
    )
}

export default StatBox;

StatBox.propTypes = {
    text: PropTypes.string,
    number: PropTypes.number,
    icon: PropTypes.node,
  }
