import React from 'react';
import PropTypes from 'prop-types';
import './displayer.scss';

const Displayer = props => (
  <div id="displayer-component">

    <div className="displayer-content">
      {props.children}
    </div>
  </div>
);

/*eslint-disable */
Displayer.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Displayer;
