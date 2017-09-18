import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addLine } from '../actions/adderActions';
import Adder from '../components/adder';

const mapStateToProp = () => ({
});

// "{}" around our action are IMPORTANT. Without it, your action will be "undefined"
const matchDispatchToProps = dispatch => bindActionCreators({ addLine }, dispatch);

export default connect(mapStateToProp, matchDispatchToProps)(Adder);
