import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import MovieList from './components/MovieList';
import './App.css'

function App() {
  const [searchResults, setSearchResults] = useState(null);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  const handleResetSearch = () => {
    setSearchResults(null);
  };

  return (
    <Router>
      <Navbar onSearchResults={handleSearchResults} onReset={handleResetSearch} />
      <Routes>
        <Route path="/" element={searchResults ? <MovieList movies={searchResults} /> : <Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
