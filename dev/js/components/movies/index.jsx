import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './movies.scss';

class Movies extends React.Component {
  constructor() {
    super();

    this.buildMoviesList = this.buildMoviesList.bind(this);
  }

  // LifeCycle method triggered before the component is mount
  componentDidMount() {
    this.props.getMovies();
  }

  buildMoviesList() {
    // We have to test if our prop is filled because the component is rendered twice :
    // First at the loading, then when action is triggered
    if (JSON.stringify(this.props.movies) !== JSON.stringify({})) {
      return this.props.movies.movies.map((movie, index) => <li key={movie.releaseYear + movie.title}><Link to={`/movies/${index}`}>{movie.title}</Link></li>,
      );
    }
    return null;
  }

  render() {
    return (
      <div id="movies-component">
        <h3>{this.props.movies.title}</h3>
        <h4>{this.props.movies.description}</h4>

        <ul>
          {this.buildMoviesList()}
        </ul>
      </div>
    );
  }
}

Movies.propTypes = {
  getMovies: PropTypes.func,
  movies: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        releaseYear: PropTypes.string,
      }),
    ),
  }),
};

Movies.defaultProps = {
  getMovies: () => {},
  movies: PropTypes.shape({
    title: '',
    description: '',
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: '',
        releaseYear: '',
      }),
    ),
  }),
};


export default Movies;
