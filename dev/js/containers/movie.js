import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovie } from '../actions/moviesActions';
import MovieDescription from '../components/movieDescription';

const mapStateToProps = (state) => {
  return {
    movie: state.movieReducer,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ getMovie }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieDescription);
