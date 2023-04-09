const request = {
  fatchNetflixShow:
    "/discover/tv?api_key=4208d8f49955b6ffd12ca89155f07ba4&with_networks=213",
  fatchTranding: "/trending/all/day?api_key=4208d8f49955b6ffd12ca89155f07ba4",
  fetchTopRated:
    "/movie/top_rated?api_key=4208d8f49955b6ffd12ca89155f07ba4&language=en-US",
  fetchHorror:
    "/discover/movie?api_key=4208d8f49955b6ffd12ca89155f07ba4&with_genres=27",
  fetchComedy:
    "/discover/movie?api_key=4208d8f49955b6ffd12ca89155f07ba4&with_genres=35",
  fetchRomance:
    "/discover/movie?api_key=4208d8f49955b6ffd12ca89155f07ba4&with_genres=10749",
  fetchScifi:
    "/discover/movie?api_key=4208d8f49955b6ffd12ca89155f07ba4&with_genres=878",
};

export default request;
