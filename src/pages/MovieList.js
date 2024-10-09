
import MovieCard from '../components/MovieCard'
import useFetch from '../hooks/useFetch'
import useTitle from '../hooks/useTitle';

function MovieList({api,title}) {

  const {data:movies}=useFetch(api);
useTitle(`${title}`)


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
