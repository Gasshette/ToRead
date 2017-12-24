import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import './adder.scss';
import './mobileAdder.scss';

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
    this.setState({ name: '', chapterNumber: 0, step: 0 });
  }

  defineState() {
    this.setState({
      name: $("input[name=itemName").val().substr(0, 1).toUpperCase() + $("input[name=itemName").val().substr(1),
      chapterNumber: $("input[name=chapterNumber").val(),
      step: $("input[name=step").val(),
    });
  }

  render() {
    return (
      <div id="adder-component" className="form-input form-inline">
        <span className="unbreakable">
          <input
            className="form-control input-lg"
            type="Text"
            placeholder="Chapter name"
            name="itemName"
            onChange={this.defineState}
          />
          <abbr title="Chapter number"><input type="number" className="form-control input-lg" name="chapterNumber" defaultValue="0" min="0" onChange={this.defineState} /></abbr>
          <abbr title="Chapters step (1 par 1, 0,5 par 0,5, etc.)"><input type="number" className="form-control input-lg" name="step" step="0.1" defaultValue="1" min="0.1" onChange={this.defineState} /></abbr>
        </span>
        <span className="unbreakable">
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
          <abbr title="Erase the form... :/">
            <button
              className="btn btn-default btn-lg"
              onClick={this.reset}
            >
              <span className="glyphicon glyphicon-refresh" />
            </button>
          </abbr>
        </span>
      </div>

    );
  }
}


Adder.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default Adder;
