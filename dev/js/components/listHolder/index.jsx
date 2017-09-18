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
  }

  delete() {
  }

  listBuilder() {

  }

  render() {
    return (
      <div id="listholder-component">
        {JSON.stringify(this.props.lines)}
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
