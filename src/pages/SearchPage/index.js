import axios from '../../api/axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./SearchPage.css";
import { useDebounce } from '../../hooks/useDebounce';

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const query = useQuery();
  const searchTerm = query.get("q");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const fetchSearchMovie = async(searchTerm) => {
    try {
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      )
      console.log(request);
      setSearchResults(request.data.results);
    }
    catch(err){
      console.log(err);
    }
  };

  useEffect(() => {
    if(debouncedSearchTerm){
      fetchSearchMovie(debouncedSearchTerm)
    }
  }, [debouncedSearchTerm]);

  const renderSearchResults = () => {
    return searchResults.length > 0 ? (
      <section className='search-container'>
        {searchResults.map((movie) => {
          if(movie.backdrop_path !== null && movie.media_type !== "person"){
            const movieImageUrl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path
            return (
              <div onClick={() => {navigate(`/${movie.id}`)}} className='movie' key={movie.id}>
                <div className='movie__column-poster'>
                  <img src={movieImageUrl} alt="movie" className='movie__poster' />
                </div>
              </div>
            )
          }
        })}
      </section>
    ) : (
      <section className='no-results'>
        <div className='no-results__text'>
          <p>찾고자하는 검색"{debouncedSearchTerm}"에 맞는 영화가 없습니다.</p>
        </div>
      </section>
    )
  };

  return renderSearchResults();
}
