import React from 'react';
import PropTypes from 'prop-types';
// import Breadcrumbs from '../../components/breadcrumbs';
import Breadcrumbs from '../../components/breadcrumbs';

import './displayer.scss';

// Object describing our routes for the breadcrumbs
// IMPORTANT : all apthes must return a result, as expected from REST URLs
const routes = {
  '/': 'Home',
  '/about': 'About',
  '/counter': 'Counter',
  '/movies': 'Movies',
  '/movies/:movieid': params => params.movieid,
};

const Displayer = props => (
  <div id="displayer-component">
    <Breadcrumbs routes={routes} />

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
