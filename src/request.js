

const API_KEY = "568e8426f23a80efe494302ab02aa346";

const request = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&lanhuage=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,

}

export default request;