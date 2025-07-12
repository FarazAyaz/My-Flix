import React from 'react'

const GetApiData = async () => {
  try {
    const response = await fetch(
        `https://www.omdbapi.com/?i=tt3896198&apikey=6cf9ba50&s=titanic&page=1`
    )
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error)
  }
  return (
    <div>
      
    </div>
  )
}

export default GetApiData
