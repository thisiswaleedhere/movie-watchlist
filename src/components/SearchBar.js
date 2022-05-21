import React from "react";

function SearchBar() {
    return (

        <div className="center bg-gray-500 mx-16 py-8 mb-6 rounded-lg">
            <div className="justify-center flex pt-4 w-full mb-6 md:mb-0">
                <label htmlFor="search-movie-title" className="text-white font-sans text-lg">Search Movie Title:</label>
                <input
                    className="ml-14 block w-96 rounded appearance-none leading-5 text-gray-800  indent-1.5"
                    id="search-movie-title"
                    type="text"
                    placeholder="Enter Movie Title..."
                    name="searchMovieTitle"
                // onChange={handleChange}

                />
                <button
                    className="bg-blue-400 hover:bg-blue-700 ml-16 px-6 rounded-3xl hover:text-white">
                    Search
                </button>
            </div>

        </div>

    )
}

export default SearchBar;