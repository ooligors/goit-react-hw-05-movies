import css from './MovieCastReview.module.css';
import PropTypes from 'prop-types';

export const MovieCast = ({ items }) => {
  const elements = items.map(({ id, profile_path, name, character }) => (
    <li className={css.li} key={id}>
      {profile_path ? (
        <img
          className={css.li}
          src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${profile_path}`}
          alt=""
        />
      ) : (
        <div>
          <span>No photo</span>
        </div>
      )}
      <p>{name}</p>
      <p>Character: {character}</p>
    </li>
  ));
  return elements;
};

MovieCast.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};
