import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=` + import.meta.env.VITE_TMDB_API_KEY + `&language=es-ES`
        );
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar la película:', error);
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) return <div className="loading">Cargando...</div>;
  if (!movie) return <div className="error">No se pudo cargar la película</div>;

  return (
    <div className="movie-detail-container">
      <div className="movie-detail-content">
        <div className="movie-detail-poster">
          <img 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            alt={movie.title} 
          />
        </div>
        <div className="movie-detail-info">
          <h1>{movie.title}</h1>
          <div className="movie-meta">
            <span className="release-date">{movie.release_date.split('-')[0]}</span>
            <span className="rating">⭐ {movie.vote_average.toFixed(1)}</span>
          </div>
          <p className="overview">{movie.overview}</p>
          <div className="additional-info">
            <p><strong>Género:</strong> {movie.genres?.map(g => g.name).join(', ')}</p>
            <p><strong>Duración:</strong> {movie.runtime} minutos</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
