import React from 'react'
import "./HomeScreen.css"
import Navbar from './Navbar'
import Banner from './Banner'
import Row from './Row'
import requests from './request'
const HomeScreen = () => {
  return (
    <div className='homescreen' >
        <Navbar/>
        <Banner/>
        <Row  title = "Movies"   fetchURL = {requests.fetchMovies } isLargeRow />
        <Row  title = "Trending"   fetchURL ={requests.fetchTrending}  />
        <Row  title = "Tv"  fetchURL={requests.fetchTv}  />
  
    </div>
  )
}

export default HomeScreen