import { FaTimes, FaStar, FaArrowLeft } from 'react-icons/fa';

function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div className="movie-modal-overlay" onClick={onClose}>
      <div className="movie-modal-content" onClick={e => e.stopPropagation()}>
        <div className="movie-modal-header">
          <button className="back-button" onClick={onClose}>
            <FaArrowLeft /> Volver
          </button>
          <button className="close-button" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        
        <div className="movie-modal-body">
          <div className="movie-modal-poster">
            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title} 
            />
          </div>
          
          <div className="movie-modal-info">
            <h2>{movie.title}</h2>
            <div className="movie-meta">
              <span className="year">{movie.release_date?.split('-')[0]}</span>
              <span className="rating">
                <FaStar /> {movie.vote_average?.toFixed(1)}
              </span>
              <span className="runtime">{movie.runtime} min</span>
            </div>
            
            <div className="movie-genres">
              {movie.genres?.map(genre => (
                <span key={genre.id} className="genre-tag">
                  {genre.name}
                </span>
              ))}
            </div>

            <div className="movie-overview">
              <h3>Sinopsis</h3>
              <p>{movie.overview}</p>
            </div>

            {movie.production_companies?.length > 0 && (
              <div className="movie-companies">
                <h3>Productoras</h3>
                <p>{movie.production_companies.map(company => company.name).join(', ')}</p>
              </div>
            )}

            {movie.release_date && (
              <div className="movie-release">
                <h3>Fecha de estreno</h3>
                <p>{new Date(movie.release_date).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
