import React, { useState } from "react";
import SearchCard from "./SearchCard";
import { BiSearchAlt } from 'react-icons/bi'

function SearchBar() {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [view, setView] = useState(false);


    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("change");

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY_TMDB}&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.results);
            setMovies(data.results);
            setView(true);
        }
        catch (err) {
            console.error(err);
        }

    }

    return (
        <>

            <div className="bg-gray-100 max-w-3xl min-w-max mx-6 sm:mx-auto p-5 rounded-3xl text-center shadow-xl">
                <form className="flex-column align-middle w-full mb-0" onSubmit={searchMovies}>
                    <div className="mb-1"><label htmlFor="search-movie-title" className="text-gray-700 font-sansserif text-lg">Search Movie</label></div>
                    <div className="flex relative">
                        <input
                            className="w-full font-sansserif rounded-full bg-gray-50 shadow-xl border-0 appearance-none focus:border-2 active:border-yellow-300  text-gray-800 p-1 sm:p-2 md:p-3 indent-2"
                            id="search-movie-title"
                            type="text"
                            placeholder="Enter Movie Title..."
                            name="searchMovieTitle"
                            onChange={(e) => setQuery(e.target.value)}

                        />

                        <button
                            className="absolute top-1/2 right-1.5 -translate-y-1/2 py-1 sm:py-2 md:py-3 bg-gray-300 hover:bg-yellow-400 px-5 rounded-full text-mono hover:shadow-lg hover:text-yellow-900">
                            <BiSearchAlt />
                        </button>
                    </div>
                </form>
            </div>

            {view && <div>

                <div className="mx-auto">

                    < div className="text-center text-2xl mb-1" > Search Results</div >
                    <div className="text-center"> Click on the movie to add it to your watchlist</div>

                </div>

                <div className="grid lg:grid-cols-4 grid-cols-2 gap-2">

                    {movies.map((movie) => (
                        <div key={movie.id}>
                            <SearchCard
                                movietitle={movie.title}
                                year={'(' + movie.release_date.slice(0, 4) + ')'} />

                        </div>
                    ))}

                </div>

            </div>}

        </>

    )
}

export default SearchBar;