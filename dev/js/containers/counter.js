import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseCounter, decreaseCounter } from '../actions/counterActions';
import Counter from '../components/counter';

const mapStateToProp = state => ({
  counter: state.counterReducer.counter,
  message: state.counterReducer.message,
});

// "{}" around our action are IMPORTANT. Without it, your action will be "undefined"
const matchDispatchToProps = dispatch => bindActionCreators({ increaseCounter, decreaseCounter }, dispatch);

export default connect(mapStateToProp, matchDispatchToProps)(Counter);
