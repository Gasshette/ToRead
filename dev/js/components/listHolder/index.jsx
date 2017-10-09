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
    return this.props.items.map(item => (
      <li key={item.id}>
        <div className="flex-container">

          <div className="flex-content">
            <button className="btn btn-warning" onClick={this.delete}>
              <span className="glyphicon glyphicon-remove" />
            </button>
          </div>

          <div className="flex-content">{item.name}</div>
          <div className="flext-content"><input type="number" className="form-control" defaultValue={item.chapterNumber} /></div>
        </div>
      </li>
    ));
  }

  render() {
    let content;
    if (this.props.items.length > 0) {
      content = (
        <div id="listholder-component">
          <ul>
            {this.listBuilder()}
          </ul>
        </div>
      );
    } else {
      content = <div>Loading...</div>;
    }
    return content;
  }
}

ListHolder.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ])).isRequired,
};

export default ListHolder;
