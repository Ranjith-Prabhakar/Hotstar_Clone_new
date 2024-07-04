import React, { useEffect, useState, useRef, createContext } from 'react'
import GlobalApi from '../services/GlobalApi'
import MovieCard from './MovieCard'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'

import { AiFillCloseCircle } from 'react-icons/ai'
import YouTube from 'react-youtube'

const YouTubeContext = createContext()
function MovieList({ genereId, index_ }) {
  const [movieList, setMovieList] = useState([])
  const [movieUrl, setMovieUrl] = useState('')
  const [showYoutube, setShowYoutube] = useState(false)

  const elementRef = useRef(null)

  useEffect(() => {
    getMovieByGenreId()
  }, [])

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genereId).then((resp) => {
      setMovieList(resp.data.results)
    })
  }

  const slideRight = (element) => {
    element.scrollLeft += 500;
  }
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  }

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const handleMovie = (id) => {
    GlobalApi.getTrailer(id).then(resp => {
      console.log(resp.data.results[0].key)
      if (resp.data.results.length !== 0) {
        setMovieUrl(resp.data.results[0].key)
        setShowYoutube(true)

      }
    })
  }

  return (
    <div className='relative'>
      <HiChevronLeft className='hidden md:block text-white text-[30px] z-10 
       absolute mx-8 mt-[150px] cursor-pointer' onClick={() => slideLeft(elementRef.current)} />
      <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0 z-10' onClick={() => slideRight(elementRef.current)} />
      <div ref={elementRef} className='flex overflow-x-auto scrollbar-hide scroll-smooth gap-8 pt-5 pb-5 px-3'>
        <YouTubeContext.Provider value={{ handleMovie }}>
          {
            movieList.map((item, index) => (
              <>
                <MovieCard movie={item} />
              </>
            ))
          }
        </YouTubeContext.Provider>
        {
          showYoutube &&
          <>
            <div className='absolute top-60 right-60 z-40 '><AiFillCloseCircle className='w-10 h-10 text-yellow-400 hover:text-yellow-600' onClick={() => { setShowYoutube(false) }} /></div>
            <YouTube videoId={movieUrl} opts={opts} className='absolute top-20 left-96 z-30 rounded-lg' />
          </>
        }
      </div>


    </div>
  )
}

export default MovieList
export { YouTubeContext }