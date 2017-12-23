import { connect } from 'react-redux';
import ListHolder from '../components/listHolder';
import { bindActionCreators } from 'redux';
import { deleteItem } from '../actions/listHolderActions';

const mapStateToProp = state => ({
  items: state.items,
});

// "{}" around our action are IMPORTANT. Without it, your action will be "undefined"
const matchDispatchToProps = dispatch => bindActionCreators({ deleteItem }, dispatch);

export default connect(mapStateToProp, matchDispatchToProps)(ListHolder);

