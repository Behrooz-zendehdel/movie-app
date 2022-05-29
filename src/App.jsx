import { useEffect, useState } from "react";
import "./App.css";
import Movie from "./components/Movie";
const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=c503e6456bbe9c9ac676408b5a46768a&page=1";

const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=c503e6456bbe9c9ac676408b5a46768a&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  // searching
  const handleOnsubmit = (e) => {

    e.preventDefault();
    if(searchTerm){

      fetch(API_SEARCH + searchTerm)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
    }
      setSearchTerm('')
  };
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="header">
        <form onSubmit={handleOnsubmit}>
          <input
            type="text"
            placeholder="search ..."
            value={searchTerm}
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="movie-container">
        {movies.map((movie) => (
          <Movie {...movie} key={movie.id} />
        ))}
      </div>
    </>
  );
}

export default App;
