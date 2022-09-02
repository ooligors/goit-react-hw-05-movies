import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import css from '../Movies/MovieList.module.css';

export const MovieList = items => {
  const location = useLocation();
  console.log({ items });
  const elements = items.items.map(
    ({ id, name, original_title, original_name, title }) => (
      <li className={css.li} key={id}>
        <Link
          className={css.link}
          state={{ from: location }}
          to={`/movies/${id}`}
        >
          {name || original_title || title || original_name}
        </Link>
      </li>
    )
  );

  return <ul className={css.ul}>{elements}</ul>;
};

MovieList.defaultProps = {
  items: [],
};
