import React, { useState, useEffect } from 'react';
import { fetchVideos } from './youtubeAPI.js';  // Votre fonction pour récupérer les vidéos
import VideoList from './vidioListe.js';  // Le composant qui affiche les vidéos

const App = () => {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState('');  // L'état pour le terme de recherche

  // Fonction de recherche
  const handleSearch = async () => {
    if (query.trim() !== '') {
      const fetchedVideos = await fetchVideos(query);
      setVideos(fetchedVideos);  // Met à jour l'état avec les vidéos récupérées
    }
  };

  // Charge les vidéos par défaut au démarrage
  useEffect(() => {
    const loadVideos = async () => {
      const fetchedVideos = await fetchVideos('React tutorials');
      setVideos(fetchedVideos);
    };
    loadVideos();
  }, []);

  return (
    <div>
      <h1>YouTube Videos</h1>
      
      {/* Zone de recherche */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for videos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}  // Met à jour l'état avec le terme de recherche
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>

      {/* Liste des vidéos */}
      <VideoList videos={videos} />
    </div>
  );
};

export default App;
