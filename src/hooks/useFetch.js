import {useEffect, useState} from 'react'


function useFetch(api) {
    const [data ,setData]=useState([])
    const url=`https://api.themoviedb.org/3/${api}`

  

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `${process.env.Authorization}`
            }
          };
        async function fetchMovies() {
            const response=await fetch(url,options);
            const json= await response.json();
            setData(json.results)
        }
        fetchMovies();
    },[url])
  return {
   data
  }
}

export default useFetch
