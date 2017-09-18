import React from 'react';
import PropTypes from 'prop-types';

import './counter.scss';

class Counter extends React.Component {
  constructor() {
    super();

    // Binding function used to trigger our actions.
    // A you when you're using a compass to find the north,
    // event (here, onClick) need to know their context to execute correctly
    this.counterUp = this.counterUp.bind(this);
    this.counterDown = this.counterDown.bind(this);
  }

  counterUp() {
    this.props.increaseCounter(this.props.counter);
  }

  counterDown() {
    this.props.decreaseCounter(this.props.counter);
  }

  render() {
    return (
      <div id="counter-component">
        <h3>Wonderful Counter tool</h3>

        <div className="counter-tool">
          <div className="flex-container">
            <button className="flex-content btn" onClick={this.counterDown}><span className="glyphicon glyphicon-minus btn-lg" /></button>
            <span className="counter">{this.props.counter}</span>
            <button className="flex-content btn" onClick={this.counterUp}><span className="glyphicon glyphicon-plus btn-lg" /></button>
          </div>

          <div className="log">
            {this.props.message}
          </div>
        </div>
      </div>
    );
  }
}


Counter.propTypes = {
  increaseCounter: PropTypes.func.isRequired,
  decreaseCounter: PropTypes.func.isRequired,
  counter: PropTypes.number,
  message: PropTypes.string,
};

Counter.defaultProps = {
  counter: 0,
  message: 'Nothing done yet',
};

export default Counter;
