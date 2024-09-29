import React from 'react'

import {Link,NavLink} from 'react-router-dom'

function Footer() {
  return (
    
      

<footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <NavLink to="/" className="hover:underline">FlixTIME™</NavLink>. All Rights Reserved.</span>
    <ul className="flex flex-wrap space-x-2 items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
    <li>
                    <NavLink to="/" className="hover:underline me-4 md:me-6">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/movies/popular" className="hover:underline me-4 md:me-6">Popluar</NavLink>
                </li>
                <li>
                    <NavLink to="/movies/now" className="hover:underline">Now Playing</NavLink>
                </li>
                <li>
                    <NavLink to="/movies/top" className="hover:underline me-4 md:me-6">Top Rated</NavLink>
                </li>
               
    </ul>
    </div>
</footer>
  )
}

export default Footer
