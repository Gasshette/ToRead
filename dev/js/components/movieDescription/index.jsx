import React from 'react';
import PropTypes from 'prop-types';

class MovieDescription extends React.Component {
  componentWillMount() {
    if (JSON.stringify(this.props.match) !== JSON.stringify({})) {
      this.props.getMovie(this.props.match.params.movieid);
    }
  }
  render() {
    return (
      <div className="movieDescription-component">
        <h3>{this.props.movie.title}</h3>
        <p><em>{this.props.movie.title}</em> has been released in <em>{this.props.movie.releaseYear}</em></p>
      </div>
    );
  }
}

MovieDescription.propTypes = {
  match: PropTypes.object.isRequired, // eslint-disable-line
  getMovie: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    title: PropTypes.string,
    releaseYear: PropTypes.string,
  }),
};

MovieDescription.defaultProps = {
  movie: PropTypes.shape({
    title: '',
    releaseYear: '',
  }),
};

export default MovieDescription;
