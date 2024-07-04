import React, { useContext } from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"
import { YouTubeContext } from './MovieList'
function MovieCard({ movie }) {
  const { handleMovie } = useContext(YouTubeContext)
  return (
    <>
      <img onClick={() => { handleMovie(movie.id) }} src={IMAGE_BASE_URL + movie.poster_path} className='w-[110px] md:w-[200px] rounded-lg hover:border-[3px] cursor-pointer border-gray-400 hover:scale-110 transition-all duration-150 ease-in ' />
    </>
  )
}

export default MovieCard