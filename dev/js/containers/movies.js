import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovies } from '../actions/moviesActions';
import Movies from '../components/movies';

const mapStateToProps = state => ({
  movies: state.moviesReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators({ getMovies }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
