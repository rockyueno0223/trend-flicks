import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer';

function App() {
  const [isDayMode, setIsDayMode] = useState(true);

  const [movies, setMovies] = useState([])
  const [tvShows, setTvShows] = useState([])
  const [searchInput, setSearchInput] = useState(null)

  useEffect(() => {
    if (isDayMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, [isDayMode]);

  useEffect(() => {
    fetchTrendMovies()
    fetchTrendTvShows()
  }, [])

  const fetchTrendMovies = async () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`
      }
    };

    try {
      const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setMovies(data.results)
    } catch (error) {
      console.error(error);
    }
  }

  const fetchTrendTvShows = async () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`
      }
    };

    try {
      const response = await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options)

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setTvShows(data.results)
    } catch (error) {
      console.error(error);
    }
  }

  const fetchMediasWithKeywords = async (inputValue) => {
    const query = inputValue.split(/\s+/).join('%20');
    const apiKey = process.env.REACT_APP_API_KEY;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    };

    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`, options);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      const movieArray = [];
      const tvShowsArray = [];
      data.results.forEach((media) => {
        if (media.media_type === 'movie') {
          movieArray.push(media);
        } else if (media.media_type === 'tv') {
          tvShowsArray.push(media);
        }
      });

      setMovies(movieArray)
      setTvShows(tvShowsArray)
      setSearchInput(inputValue)
    } catch (error) {
      console.error('Failed to fetch media:', error);
    }
  };

  const backgroundColor = isDayMode ? '#f0f0f0' : '#333333';
  const textColor = isDayMode ? '#333333' : '#f0f0f0';

  return (
    <div style={{ backgroundColor, color: textColor }} className='App min-h-screen'>
      <BrowserRouter>
        <Header
          isDayMode={isDayMode}
          setIsDayMode={setIsDayMode}
          onSearch={fetchMediasWithKeywords}
          fetchTrendMovies={fetchTrendMovies}
          fetchTrendTvShows={fetchTrendTvShows}
          setSearchInput={setSearchInput}
        />
        <Routes>
          <Route
            index
            element={<Home movies={movies} tvShows={tvShows} searchInput={searchInput} />}
          />
          <Route path='/about' element={<About/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
