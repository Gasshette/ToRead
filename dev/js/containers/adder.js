import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem } from '../actions/adderActions';
import Adder from '../components/adder';

const mapStateToProps = () => ({
});

// "{}" around our action are IMPORTANT. Without it, your action will be "undefined"
const matchDispatchToProps = dispatch => bindActionCreators({ addItem }, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Adder);

