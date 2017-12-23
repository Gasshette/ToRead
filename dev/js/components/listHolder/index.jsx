import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';

import './listHolder.scss';

class ListHolder extends React.Component {
  constructor() {
    super();

    // Binding function used to trigger our actions.
    // A you when you're using a compass to find the north,
    // event (here, onClick) need to know their context to execute correctly
    this.getItemDatas = this.getItemDatas.bind(this);
    this.delete = this.delete.bind(this);
    this.update = this.update.bind(this);
    this.listBuilder = this.listBuilder.bind(this);
  }

  getItemDatas(e) {
    return $(e.target).closest('li').data('item');
  }
  delete(e) {
    const itemToDelete = this.getItemDatas(e);
    this.props.deleteItem(JSON.stringify(itemToDelete));
  }

  update(e) {
    const itemToUpdate = this.getItemDatas(e);
    itemToUpdate.chapterNumber = e.target.value;
    this.props.updateItem(JSON.stringify(itemToUpdate));
  }

  listBuilder() {
    return this.props.items._embedded.items.map(item => (
      <li key={item._links.item.href} data-item={JSON.stringify(item)}>
        <div className="flex-container">

          <div className="flex-content">
            <button className="btn btn-warning" onClick={this.delete} >
              <span className="glyphicon glyphicon-remove" />
            </button>
          </div>

          <div className="flex-content">{item.name}</div>
          <div className="flext-content"><input type="number" step={item.step} className="form-control" defaultValue={item.chapterNumber} onChange={this.update} /></div>
        </div>
      </li>
    ));
  }

  render() {
    let content;
    if (JSON.stringify(this.props.items) !== JSON.stringify({})) {
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
  deleteItem: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
  items: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
      PropTypes.number,
    ])).isRequired,
};

export default ListHolder;
