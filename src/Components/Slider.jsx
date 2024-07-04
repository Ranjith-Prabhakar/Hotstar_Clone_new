import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"
const screenWidth = window.innerWidth
import { AiFillCloseCircle } from 'react-icons/ai'
import YouTube from 'react-youtube'

function Slider() {

  const [movieList, setMovieList] = useState([])
  const [movieUrl, setMovieUrl] = useState('')
  const [showYoutube, setShowYoutube] = useState(false)
  const elementRef = useRef()
  useEffect(() => {
    getTrendingMovies()
  }, [])

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then(resp => {
      setMovieList(resp.data.results)
      console.log("movieList", movieList)
    })
  }

  const slideRight = (element) => {
    element.scrollLeft += screenWidth - 110 // here the 110 is the padding which already given 
  }

  const slideLeft = (element) => {
    element.scrollLeft -= screenWidth - 110
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
    <div>
      <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[250px] cursor-pointer' onClick={() => slideLeft(elementRef.current)} />
      <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[250px] cursor-pointer right-0' onClick={() => slideRight(elementRef.current)} />
      <div ref={elementRef} className='flex overflow-x-auto w-screen px-16 py-4 scrollbar-hide  scroll-smooth ' > {/* here the width was w-full */}
        {
          movieList.map((item, index) => index < 3 && (
            <img onClick={() => { handleMovie(item.id) }} src={IMAGE_BASE_URL + item.backdrop_path} className='min-w-full md:h-[470px] object-cover object-top  mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in-out ' />
          ))
        }
        {/* object-left-top */}
      </div>
      {
        showYoutube &&
        <>
          <div className='absolute top-60 right-96 z-40 '><AiFillCloseCircle className=' w-10 h-10 text-gray-700 opacity-30 hover:text-slate-700 hover:opacity-100' onClick={() => { setShowYoutube(false) }} /></div>
          <YouTube videoId={movieUrl} opts={opts} className='absolute top-20 left-96 z-30 rounded-lg' />
        </>
      }


    </div>
  )
}

export default Slider