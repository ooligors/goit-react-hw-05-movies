import css from './SingleMovie.module.css';
import PropTypes from 'prop-types';

export const SingleMovie = ({ item }) => {
  const { poster_path, title, overview, vote_average, genres } = item;
 
  const User_Score = Math.round(vote_average * 10);
  const Genres = genres?.map(genre => genre.name).join(' ');
  return (
    <div>
      <div className={css.card}>
        {poster_path && (
          <img
            className={css.img}
            src={`https://image.tmdb.org/t/p/w300/${poster_path} `}
            alt=""
          />
        )}
      </div>
      <div>
        <h3 className={css.h3}>{title}</h3>
        <p className={css.text}>User Score: {User_Score} %</p>
        <h4 className={css.result}>Overview</h4>
        <p className={css.text}>{overview}</p>
        <h4 className={css.result}>Genres</h4>
        <p className={css.text}>{Genres}</p>
      </div>
    </div>
  );
};

SingleMovie.propTypes = {
  item: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    overview: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
  }).isRequired,
};
