import { useEffect, useState } from 'react';

function useFetch(api, queryTerm = "") {
  const [data, setData] = useState([]);
  
  // Correct URL construction with "?" before query
  const url = `https://api.themoviedb.org/3/${api}?query=${queryTerm}`;

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        // Ensure correct Authorization header format with "Bearer" and correct environment variable
        Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`,
      },
    };

    async function fetchMovies() {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const json = await response.json();
        setData(json.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchMovies();
  }, [url]);

  return { data };
}

export default useFetch;