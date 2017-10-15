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
    this.addItem = this.addItem.bind(this);
    this.reset = this.reset.bind(this);
    this.defineState = this.defineState.bind(this);

    this.state = { name: '' };
  }

  addItem() {
    this.props.addItem(this.state);
  }

  reset() {
    $('#adder-component input').val('');
    $('#adder-component input').attr('value', '');
    this.setState({ name: '' }, console.log(this.state));
  }

  defineState(e) {
    this.setState({ name: e.target.value }, () => console.log(this.state));
  }

  render() {
    return (
      <div id="adder-component" className="form-input form-inline">
        <input
          className="form-control input-lg"
          type="Text"
          placeholder="Name"
          onChange={this.defineState}
        />
        <input type="number" className="form-control input-lg" defaultValue="0" min="0" />
        <input type="number" className="form-control input-lg" step="0.1" defaultValue="1" min="0.1" />

        <abbr title="Add your line ! :)">
          <button
            className="btn btn-success btn-lg"
            id="lineName"
            name="lineName"
            onClick={this.addItem}
          >
            <span className="glyphicon glyphicon-ok" />
          </button>
        </abbr>
        <abbr title="Erase the form... :(">
          <button
            className="btn btn-default btn-lg"
            onClick={this.reset}
          >
            <span className="glyphicon glyphicon-refresh" />
          </button>
        </abbr>
      </div>

    );
  }
}


Adder.propTypes = {
  addItem: PropTypes.func.isRequired,
};

// Adder.defaultProps = {
//   addLine: () => console.log('coucou'),
// };

export default Adder;
