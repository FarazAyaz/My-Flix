import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    if (error.status === 404) {
        return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100 gap-6'>
         <figure>
            <img
              src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
              alt="404 page"
            />
          </figure>
            <h1 className='text-4xl font-bold '>Page Not Found</h1>
            
               <NavLink to="/" className='mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'>
                    Go to Home
                </NavLink>
    </div>
  )
    }
  
}

export default ErrorPage
