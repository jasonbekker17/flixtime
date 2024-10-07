import { Routes, Route } from "react-router-dom";
import { MovieList,MovieDescription,PageNotFound,Search} from'../pages'

import React from 'react'
import Header from "../components/Header";

function AllRoutes() {
  return (
   <>
   <Routes>
            
            <Route path="/"  element={<MovieList api="movie/now_playing"/> }/>
            <Route path="/movie/:id"  element={<MovieDescription/>}/>
            <Route path="/movies/popular"  element={<MovieList api="movie/popular"/>}/>
            <Route path="/movies/top_rated"  element={<MovieList  api="movie/top_rated"/>}/>
            <Route path="/movies/upcoming"  element={<MovieList api="/movie/upcoming"/>}/>
            <Route path="/search"  element={<Search/>}/>
            <Route path="*"  element={<PageNotFound/>}/>
            
        </Routes>
   </>
  )
}

export default AllRoutes





