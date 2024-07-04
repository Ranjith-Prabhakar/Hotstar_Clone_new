import axios from "axios";
const api_key = `${import.meta.env.VITE_API_KEY}`;
console.log(import.meta.env.VITE_API_KEY)
const movieBaseUrl = "https://api.themoviedb.org/3"
const movieByGenreBaseUrl = 'https://api.themoviedb.org/3/discover/movie'

const getTrendingVideos = axios.get(movieBaseUrl + "/trending/movie/day?language=en-US&api_key=" + api_key)
const getMovieByGenreId = (id) => axios.get(movieByGenreBaseUrl + '?api_key=' + api_key + "&with_genres=" + id)
const getTrailer = (id) => axios.get(movieBaseUrl + "/movie/"+ id +"/videos?language=en-US&api_key="+ api_key)
export default {
  getTrendingVideos,
  getMovieByGenreId,
  getTrailer
}


// import axios from "axios";
// import dotenv from 'dotenv';

// dotenv.config();
// const movieBaseUrl = "https://api.themoviedb.org/3"
// // const api_key = "7dc7867319017f1ee1e72c1ca2e45d88"
// const api_key = process.env.api_key
// console.log(api_key)
// const movieByGenreBaseUrl = 'https://api.themoviedb.org/3/discover/movie'

// const getTrendingVideos = axios.get(movieBaseUrl + "/trending/movie/day?language=en-US&api_key=" + api_key)
// const getMovieByGenreId = (id) => axios.get(movieByGenreBaseUrl + '?api_key=' + api_key + "&with_genres=" + id)
// export default {
//   getTrendingVideos,
//   getMovieByGenreId
// }