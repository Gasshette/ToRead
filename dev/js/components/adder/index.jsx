import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import './adder.scss';

class Adder extends React.Component {
  constructor() {
    super();

    // Binding function used to trigger our actions.
    // A you when you're using a compass to find the north,
    // event (here, onClick) need to know their context to execute correctly
    this.addLine = this.addLine.bind(this);
    this.reset = this.reset.bind(this);
    this.defineState = this.defineState.bind(this);

    this.state = { name: '' };
  }

  addLine() {
    this.props.addLine(this.state);
  }

  reset() { //eslint-disable-line
    $('#adder-component input').val('');
    $('#adder-component input').attr('value', '');
    this.setState({ name: '' }, console.log(this.state));
  }

  defineState(e) {
    this.setState({ name: e.target.value }, () => console.log(this.state));
  }

  render() {
    return (
      <div id="adder-component">
        <div className="flex-container">
          <input
            className="flex-content form-control input-lg"
            type="Text"
            placeholder="Name your line.."
            onChange={this.defineState}
          />
          <div className="flex-content">
            <div className="flex-container flex-row">
              <div className="flex-content">
                <abbr title="Add your line ! :)">
                  <button
                    className="btn btn-success btn-circle btn-xl"
                    id="lineName"
                    name="lineName"
                    onClick={this.addLine}
                  >
                    <span className="glyphicon glyphicon-plus" />
                  </button>
                </abbr>
              </div>
              <div className="flex-content">
                <abbr title="Erase the form... :(">
                  <button
                    className="btn btn-warning btn-circle btn-lg"
                    onClick={this.reset}
                  >
                    <span className="glyphicon glyphicon-refresh" />
                  </button>
                </abbr>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


Adder.propTypes = {
  addLine: PropTypes.func.isRequired,
};

// Adder.defaultProps = {
//   addLine: () => console.log('coucou'),
// };

export default Adder;
