import React from 'react';
import Adder from '../../containers/adder';
import ListHolder from '../../containers/listHolder';

const Home = () => (
  <div id="home-component">
    <div className="flex-container flex-col">
      <div className="flex-content">
        <Adder className="flex-content" />
      </div>
      <div className="flex-content">
        <ListHolder className="flex-content" />
      </div>
    </div>
  </div>
);

export default Home;
