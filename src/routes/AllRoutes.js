import { Routes, Route } from "react-router-dom";
import { MovieList,MovieDescription,PageNotFound,Search} from'../pages'

import React from 'react'


function AllRoutes() {
  return (
   <div className="dark:bg-darkbg">
   <Routes>
            <Route path="/"  element={<MovieList api="movie/now_playing" title="Home"/>  }/>
            <Route path="/movie/:id"  element={<MovieDescription api="movie/movie_id" />}/>
            <Route path="/movies/popular"  element={<MovieList api="movie/popular" title="Popular"/>}/>
            <Route path="/movies/top_rated"  element={<MovieList  api="movie/top_rated" title="Top Rated"/>}/>
            <Route path="/movies/upcoming"  element={<MovieList api="/movie/upcoming" title="Upcoming"/>}/>
            <Route path="/search"  element={<Search api="/search/multi"/>}/>
            <Route path="*"  element={<PageNotFound title="Page Not Found"/>}/>
   </Routes>
   </div>
  )
}

export default AllRoutes





