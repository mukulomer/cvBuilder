import movieDetails from "./../../data/movieDetails";

export default function MovieDetails(props) {
  const getMovieDetails = (id) => {
    return movieDetails[id];
  };
  const data = getMovieDetails(props.match.params.id);
  return JSON.stringify(data);
}
