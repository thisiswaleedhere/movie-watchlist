import React, { useEffect, useState } from "react";
import SearchCard from "./SearchCard";
import { BiSearchAlt } from 'react-icons/bi'

function SearchBar(props) {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [view, setView] = useState(false);
    const [error, setError] = useState('');




    useEffect(() => {
        popularMovies().then(items => setMovies(items.results))
        setView(false);
    }, [])



    const popularMovies = () => {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=en-US&page=1`
        return (
            fetch(url).then(data => data.json())
        )
    }


    const displayErrorMessage = (e) => {
        e.preventDefault();
        setError('Please enter a movie title in the search field');
    }




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
        <div className="min-w-[355px] max-w-[1440px]">

            <div className="bg-gray-100 max-w-3xl mx-6 md:mx-auto p-5 rounded-3xl text-center shadow-xl min-w-max">
                <form className="flex-column align-middle w-full mb-0" onSubmit={query ? searchMovies : displayErrorMessage}>
                    <div className="mb-1"><label htmlFor="search-movie-title" className="text-gray-700 font-sansserif text-lg">Search Movie</label></div>
                    <div className="flex relative">
                        <input
                            className="w-full font-sansserif rounded-full bg-gray-50 shadow-xl border-0 appearance-none focus:ring-0 focus:border-yellow-400 focus:border-2  text-gray-800 p-1 sm:p-2 md:p-3 indent-2"
                            id="search-movie-title"
                            type="text"
                            placeholder="Enter Movie Title..."
                            name="searchMovieTitle"
                            onChange={(e) => {
                                setQuery(e.target.value);
                                setError('');
                            }}

                        />

                        <button
                            className="absolute top-1/2 right-1.5 -translate-y-1/2 py-1 sm:py-2 md:py-3 hover:bg-yellow-400 bg-yellow-300 px-5 rounded-full text-mono hover:shadow-lg hover:text-white">
                            <BiSearchAlt />
                        </button>
                    </div>
                    <div className="font-sansserif text-red-600 text-sm pt-2">{error}</div>

                </form>
            </div>

            <div className="">

                <div className="mx-auto mt-6 mb-4 font-sansserif">

                    <div className="text-center text-2xl mb-1" > {view ? "Search Results" : "Popular Movies"}</div >
                    <div className="text-center"> Click on a movie to add it to your watchlist</div>

                </div>

                <div className="mx-auto grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-2 px-4 max-w-6xl justify-items-center place-content-center">

                    {movies.map((movie) => (
                        <div key={movie.id} >
                            <SearchCard
                                movieid={movie.id}
                                movieposter={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                movietitle={movie.title}
                                year={'(' + movie.release_date.slice(0, 4) + ')'} />

                        </div>
                    ))}

                </div>

            </div>

        </div>

    )
}

export default SearchBar;