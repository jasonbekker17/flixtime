import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MovieCard from '../components/MovieCard'
import useFetch from '../hooks/useFetch'

function MovieList({api}) {

  const {data:movies}=useFetch(api);



  return (
    <main>
        <section className='max-w-7xl mx-auto py-7'>
          <div className='flex justify-start flex-wrap other:justify-evenly'>
                {movies.map((movie)=>(
                  <MovieCard key={movie.id} movie={movie}/>
                ))}
                
                
                

          </div>
        </section>
    
    </main>
  )
}

export default MovieList
