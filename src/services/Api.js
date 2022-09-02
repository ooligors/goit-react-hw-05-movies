import axios from 'axios';

export const getMovies = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=7af231239b59455ee05c6b874689512b`
  );

  return data;
};

export const getSingleMovie = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=7af231239b59455ee05c6b874689512b`
  );

  return data;
};

export const getMoviesBySearch = async search => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=7af231239b59455ee05c6b874689512b&query=${search}&page=1&include_adult=false`
  );

  return data;
};

export const getSingleMovieCast = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=7af231239b59455ee05c6b874689512b`
  );

  return data;
};

export const getSingleMovieReviews = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=7af231239b59455ee05c6b874689512b`
  );

  return data;
};






// const Key = "7af231239b59455ee05c6b874689512b";

// export const fetchApi =()=>{
// const response = axios.get(`events?size=20&apikey=${Key}`)
// console.log(response);
// return response;
// }

// const instance = axios.create({
// baseURL:"https://api.themoviedb.org"
// baseURL:`https://api.themoviedb.org/3/movie/550?api_key=7af231239b59455ee05c6b874689512b`

// baseURL:"https://api.themoviedb.org/3/movie/550?api_key=7af231239b59455ee05c6b874689512b"
// https://api.themoviedb.org/3/movie/777670?api_key=7af231239b59455ee05c6b874689512b
// });
// export const getMovies=async(_page=1)=>{
//    const {data} = await instance.get("/",{
//     params:{
// api_key=`${Key}`,
//         _page,
//     }
//    });
//    return data;
// }
