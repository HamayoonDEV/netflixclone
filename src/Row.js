import axios from './axios'
import React, { useEffect, useState } from 'react'
import './Row.css'

const Row = ({title,fetchURL,isLargeRow = false}) => {
    const base_URL = "https://image.tmdb.org/t/p/original/"
    const [movies,setMovies] = useState([])
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchURL)

            setMovies(request.data.results)
            return request
        }
        fetchData()
    },[fetchURL])
    
  return (
    <div className='row'>
            <h1>{title}</h1>
            <div className='row_poster'>
            {
                movies.map((movie)=>
                ((isLargeRow && movie.poster_path)||(!isLargeRow && movie.backdrop_path ))&&
                (<img className={`row_posters ${isLargeRow && "poster_Larger"}`}  
                 src = {`${base_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path }`} alt = {movie?.name} key={movie.id}/>
                )
                )}
            </div>
    </div>
  )
}

export default Row