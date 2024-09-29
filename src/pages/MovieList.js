import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MovieCard from '../components/MovieCard'

function MovieList() {

  const [movies ,setMovies]=useState([])
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjJiOGZlMTY1YzhhZGY2MDNjMWJhNjRlNjFlZTQ1NyIsIm5iZiI6MTcyNzI1NzU2My41NzI4LCJzdWIiOiI2NmYzZDY3YjgyNDcwMWRiMmYyMmYwMjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.XJJPRb9ZusqHtTuT4VYsNU6UB3H4Q1ElQHCF2UtPOk4'
    }
  };

  useEffect(()=>{
    async function fetchMovies() {
      const response=await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
      const data=await response.json();
      setMovies(data.results);
    }
    fetchMovies();
  },[])


  return (
    <main>
        <section className='max-w-7xl mx-auto py-7'>
          <div className='flex justify-start flex-wrap m-3'>
                {movies.map((movie)=>(
                  <MovieCard key={movie.id} movie={movie}/>
                ))}
                
                
                

          </div>
        </section>
    
    </main>
  )
}

export default MovieList
