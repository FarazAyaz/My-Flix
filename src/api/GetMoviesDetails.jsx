const GetMoviesDetails = async ({params}) => {
    const id = params.movieId;
    console.log(id);
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=6cf9ba50`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default GetMoviesDetails;
