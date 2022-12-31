import axios from "axios"

export const getMovieList = async () => {
  const movie = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/movie/popular?page=1&api_key=${process.env.REACT_APP_APIKEY}`
  )
  return movie.data.results
}

export const searchMovie = async (q) => {
  const search = await axios.get(`${process.env.REACT_APP_BASE_URL}/search/movie?query=${q}&page=1&&api_key=${process.env.REACT_APP_APIKEY}`)
  return search.data
}

