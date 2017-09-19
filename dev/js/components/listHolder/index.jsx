import React from 'react';
import PropTypes from 'prop-types';

import './listHolder.scss';

class ListHolder extends React.Component {
  constructor() {
    super();

    // Binding function used to trigger our actions.
    // A you when you're using a compass to find the north,
    // event (here, onClick) need to know their context to execute correctly
    this.delete = this.delete.bind(this);
    this.listBuilder = this.listBuilder.bind(this);
  }

  delete(e) {
  }

  listBuilder() {
    return this.props.lines.map((line, index) => (
      <li key={index + line.name}>
        <div className="flex-container">

          <div className="flex-content">
            <button className="btn btn-warning" onClick={this.delete}>
              <span className="glyphicon glyphicon-remove" />
            </button>
          </div>

          <div className="flex-content">{line.name}</div>
          <div className="flext-content"><input type="number" className="form-control" /></div>
        </div>
      </li>
    ));
  }

  render() {
    return (
      <div id="listholder-component">
        <ul>
          {this.listBuilder()}
        </ul>
      </div>
    );
  }
}


ListHolder.propTypes = {
  lines: PropTypes.array, //eslint-disable-line
};

ListHolder.defaultProps = {
  lines: {},
};

export default ListHolder;
