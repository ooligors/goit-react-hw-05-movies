import { MoviesHome } from 'components/Movies/MoviesHome';
import css from '../MoviesPage/SingleMoviePage.module.css';

const HomePage = () => {
  return (
    <div className={css.home}>
      <h2>Trending today</h2>
      <MoviesHome />
    </div>
  );
};
export default HomePage;
