

const API_KEY = "568e8426f23a80efe494302ab02aa346";

const requests = {
    fetchTv:`/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,

}

export default requests;
//https://api.themoviedb.org/3/tv/popular?api_key=568e8426f23a80efe494302ab02aa346&language=en-US&page=1