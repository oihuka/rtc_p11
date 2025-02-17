import { Link } from 'react-router-dom';

function MovieCard({ movie, onClick }) {
  return (
    <div className="movie-card" onClick={() => onClick(movie)}>
      <img 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        alt={movie.title}
        className="movie-poster"
      />
    </div>
  );
}

export default MovieCard;
