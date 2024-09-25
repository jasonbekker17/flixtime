import React from 'react'
import MovieList from './MovieList'
import MovieDescription from './MovieDescription'
import PageNotFound from './PageNotFound'
import Search from './Search'

function index() {
  return (
    <div>
      <MovieList/>
      <MovieDescription/>
      <PageNotFound/>
      <Search/>
    </div>
  )
}

export default index
