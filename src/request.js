

const API_KEY = "568e8426f23a80efe494302ab02aa346";

const requests = {
    fetchTv:`/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchMovies:`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTrending:`/trending/all/day?api_key=${API_KEY}`
}

export default requests;
