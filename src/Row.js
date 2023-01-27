import axios from './axios'
import React, { useEffect, useState } from 'react'

const Row = ({title,fetchURL,islargeRow = false}) => {
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
            {
                movies.map((movie,index)=>(
                    <img src = {`${base_URL}${islargeRow ? movie.poster_path : movie.backdrop_path }`} alt = {movie?.name} key={index}/>
                ))
            }
    </div>
  )
}

export default Row