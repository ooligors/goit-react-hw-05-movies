import { useState, useEffect } from 'react';
import { getMovies } from 'services/Api';
import { MovieList } from './MovieList';
export const MoviesHome = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });
  useEffect(() => {
    const fetchMovies = async () => {
      setState(prevState => ({
        ...prevState,
        loading: true,
        error: null,
      }));
      try {
        const data = await getMovies();
        console.log(data);
        setState(prevState => {
          return {
            ...prevState,
            items: [...prevState.items, ...data.results],
          };
        });
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          error,
        }));
      } finally {
        setState(prevState => {
          return {
            ...prevState,
            loading: false,
          };
        });
      }
    };
    fetchMovies();
  }, [setState]);

  const { items, loading, error } = state;
  console.log(items);

  return (
    <>
      {items.length > 0 && <MovieList items={items} />}
      {loading && <p> Movies load....</p>}
      {error && <p> Movies load failed</p>}
    </>
  );
};
