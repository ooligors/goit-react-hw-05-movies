import { SearchMoviesForm } from './SearchMovieForm';
import { getMoviesBySearch } from 'services/Api';
import { useState, useEffect } from 'react';
import { MovieList } from './../../Movies/MovieList';
import { useSearchParams } from 'react-router-dom';

 const SearchMoviesPage = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const[searchParams, setSearchParams]=useSearchParams();
  const search=searchParams.get("query");
  console.log(search)
  
  useEffect(() => {
    const fetchMovieBySearch = async () => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
        }));
        const data = await getMoviesBySearch(search);
        setState(prevState => ({
          ...prevState,
          items: data.results,
        }));
      } catch (error) {
        setState(prevState => ({ ...prevState, error }));
      } finally {
        setState(prevState => ({
          ...prevState,
          loading: false,
        }));
      }
    };
    if (search) {
      fetchMovieBySearch();
    }
  }, [search]);
  const changeSearch = ({search} ) => {
    // if(search)
    setSearchParams({
      query:search
    });
  };
  const { items } = state;
  return (
  <>
      <SearchMoviesForm  onSubmit={changeSearch} />
  {
    items.length > 0 && <MovieList items={items}/>
  }
  </>
  )
};
export default SearchMoviesPage;