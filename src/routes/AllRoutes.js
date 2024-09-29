import { Routes, Route } from "react-router-dom";
import { MovieList,MovieDescription,PageNotFound,Search} from'../pages'

import React from 'react'
import Header from "../components/Header";

function AllRoutes() {
  return (
   <>
   <Routes>
            
            <Route path="/"  element={<MovieList/>}/>
            <Route path="/movie/:id"  element={<MovieDescription/>}/>
            <Route path="/movies/popular"  element={<MovieList/>}/>
            <Route path="/movies/top"  element={<MovieList/>}/>
            <Route path="/movies/now"  element={<MovieList/>}/>
            <Route path="/search"  element={<Search/>}/>
            <Route path="*"  element={<PageNotFound/>}/>
            
        </Routes>
   </>
  )
}

export default AllRoutes





