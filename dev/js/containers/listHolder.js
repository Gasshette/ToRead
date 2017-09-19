import { connect } from 'react-redux';
import ListHolder from '../components/listHolder';

const mapStateToProp = state => ({
  lines: state.lines,
});

// "{}" around our action are IMPORTANT. Without it, your action will be "undefined"
// const matchDispatchToProps = dispatch => bindActionCreators({ getAllLines }, dispatch);

export default connect(mapStateToProp)(ListHolder);

