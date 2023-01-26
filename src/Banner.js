import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from './axios'
import requests from './request'

const Banner = () => {
        const [movies,setMovies] = useState([])

        useEffect(()=>{
            async function fetchData(){
                const request = await axios.get(requests.fetchTv)
                setMovies(
                    request.data.results[
                        Math.floor(Math.random() * request.data.results.length-1)
                    ]
                )
                return request;
            }
             fetchData();
        },[])
        console.log(movies)

    function truncate(string,n){
        return string?.length > n ? string.substr(0,n-1) + "..." : string;
    }
  return (
    <header className='banner' style={{
        backgroundImage : `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`
    }} > 

    <div className='banner-content'>
        <h1 className='banner-title' > {movies?.name}</h1>
        <div className='banner-buttons' >
            <button className='banner-button'>play</button>
            <button className='banner-button' >My list</button>
        </div>
        <h1 className='banner-description'> 
        {truncate(movies?.overview,150)}
         </h1>
    </div>
    <div className='banner-fadebutton' />
    </header>
  )
}

export default Banner