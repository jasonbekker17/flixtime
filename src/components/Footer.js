import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import {Link, NavLink} from 'react-router-dom'

function Footer() {
  return (
    
      

<footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
    <Link to="https://www.linkedin.com/in/j-bekker/" className="hover:underline me-4 md:me-6"><FaLinkedinIn /></Link>
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <NavLink to="/" className="hover:underline">FlixTIME™</NavLink>. All Rights Reserved.  </span>
    </div>
</footer>
  )
}

export default Footer
