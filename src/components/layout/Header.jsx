import React from 'react'

const Header = () => {
  return (
    <>
      <section>
        <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
          <h1 className="text-2xl font-bold">My Website</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="/movie" className="hover:underline">Movies</a></li>
            </ul>
          </nav>
        </div>
      </section>
      
    </>
  )
}

export default Header
