import React from 'react'

import  PageNotFoundImg  from '../Assets/404.png' 
import { Link } from 'react-router-dom'
function PageNotFound() {
  return (
   <main>
    <section className='flex flex-col justify-center px-2'>
      <div className='flex flex-col items-center my-4'>
          <p className='text-7xl text-gray-700 font-bold my-10 dark:text-white'>404, oops!</p>
          <div className='max-w-lg max-h-lg'>
          
          <img  className="rounded" src={PageNotFoundImg} alt='404 Page Not Found'/>
          </div>
      </div>
      <div className='flex justify-center my-4 '>
        <Link to="/">
        <button className='w-64  text-white text-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium'>Back To FlixTime</button>
        </Link>
      </div>
    </section>
   </main>
  )
}

export default PageNotFound
