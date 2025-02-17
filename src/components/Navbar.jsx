import { useState, useEffect } from 'react';
import { FaHome, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Navbar({ onSearchResults, onReset }) {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=83ec59640d4c10237655793a5eecaeb1&language=es-ES&query=${searchTerm}`
      );
      onSearchResults(response.data.results);
    } catch (error) {
      console.error('Error en la búsqueda:', error);
    }
  };

  const handleReset = () => {
    navigate('/');
    setShowSearch(false);
    setSearchTerm('');
    onReset();
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-brand">
          <span className="nav-logo" onClick={handleReset}>MovieApp</span>
        </div>
        <div className="nav-actions">
          <FaHome 
            className="nav-icon" 
            onClick={handleReset}
            title="Inicio"
          />
          <div className="search-container">
            <FaSearch 
              className={`nav-icon ${showSearch ? 'active' : ''}`}
              onClick={() => setShowSearch(!showSearch)}
              title="Buscar"
            />
            <div className={`search-dropdown ${showSearch ? 'show' : ''}`}>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Títulos, personas, géneros"
                  autoFocus
                />
                <button type="submit">Buscar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
