import React from 'react'
import useFetch from '../hooks/useFetch'
import MovieCard from '../components/MovieCard'
import { useSearchParams } from 'react-router-dom';

function Search({api}) {
  const[searchParams]=useSearchParams();
  const queryTerm=searchParams.get("q")
  const {data:movies}=useFetch(api,queryTerm);
  return (
    <main>
      <section>
        <p className='text-3xl'>{movies.length===0?`No results for ${queryTerm}`:`Results for ${queryTerm}`}</p>
      </section>
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

export default Search
