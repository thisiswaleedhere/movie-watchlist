import React, { useState, useEffect } from "react";
import MovieDataService from '../services/MovieServices';

function AddWidget() {

    const [seed, setSeed] = React.useState(1);
    const [tagseed, setTagseed] = useState(1);


    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [year, setYear] = useState(0);
    const [language, setLanguage] = useState('');
    const [taginput, setTaginput] = useState('');
    const [genre, setGenre] = useState([]);
    const [posterpath, setPosterpath] = useState('');
    const [message, setMessage] = useState('');


    const onKeyDown = (e) => {

        const trimmedInput = taginput.trim();

        if (e.key === "," && trimmedInput.length && !genre.includes(trimmedInput)) {
            e.preventDefault();
            setGenre(prevState => [...prevState, trimmedInput]);
            setTaginput('');
            setTagseed(Math.random());
            console.log(genre);
        }
    }




    const newMovie = {
        id,
        title,
        year,
        language,
        genre,
        posterpath
    }


    useEffect(() => {
        if (message) {
            setTimeout(() => {
                setMessage('');

            }, 2000)
        }
    }, [message])




    function handleSubmit(event) {
        event.preventDefault();
        setId(Math.floor(Math.random() * 1000000) + 999999);
        MovieDataService.addMovie(newMovie);
        console.log("Submitted")
        setSeed(Math.random());
        setMessage("Movie added successfully")
        setGenre([]);
    }


    function handleCancel(event) {
        event.preventDefault();
        setSeed(Math.random());
        setPosterpath('');
        setGenre([]);
    }


    return (
        <div className="min-w-[355px] max-w-[1440px]">
            <div className="text-sm max-w-xl mx-auto text-white rounded-lg bg-green-800 text-center">{message}</div>
            <div className="bg-gray-100 max-w-xl min-w-max mx-6 sm:mx-auto mt-8 p-5 rounded-3xl text-center shadow-xl mb-12" key={seed}>

                <form className="flex-column align-middle w-full mb-0 font-sansserif" onSubmit={handleSubmit}>
                    <div className="mb-1 text-gray-700 font-sansserif text-lg">Add Movie Manually</div>


                    <div>

                        <div className="mt-3">

                            <input
                                className="w-full rounded-full bg-gray-50 shadow-xl border-0 appearance-none  text-gray-800 p-1 sm:p-2 md:p-3 indent-2 focus:ring-0 focus:border-yellow-400 focus:border-2 "
                                id="movie-title"
                                type="text"
                                placeholder="Movie Title"
                                name="movieTitle"
                                onChange={(e) => setTitle(e.target.value)}

                            />
                        </div>

                        <div className="flex max-w-xl">


                            <input
                                className="mt-3 mr-2 max-w-max rounded-full max-w-32 bg-gray-50 shadow-xl border-0 appearance-none text-gray-800 p-1 sm:p-2 md:p-3 indent-2 focus:ring-0 focus:border-yellow-400 focus:border-2 "
                                id="movie-year"
                                type="number"
                                min="1900"
                                max="2023"
                                placeholder="Year"
                                name="movieYear"
                                onChange={(e) => setYear(e.target.value)}
                            />





                            <input
                                className="mt-3 flex-1 rounded-full bg-gray-50 shadow-xl border-0 appearance-none  text-gray-800 p-1 sm:p-2 md:p-3 indent-2 focus:ring-0 focus:border-yellow-400 focus:border-2 "
                                id="movie-language"
                                type="text"
                                placeholder="Language"
                                name="movieLanguage"
                                onChange={(e) => setLanguage(e.target.value)}
                            />


                        </div>

                        <div className="mt-3" key={tagseed}>


                            <input
                                className="w-full rounded-full bg-gray-50 shadow-xl border-0 appearance-none  text-gray-800 p-1 sm:p-2 md:p-3 indent-2 focus:ring-0 focus:border-yellow-400 focus:border-2 "
                                id="movie-genre"
                                type="text"
                                placeholder="Genre"
                                name="movieGenre"
                                onChange={(e) => setTaginput(e.target.value)}
                                onKeyDown={onKeyDown}
                            />
                            {taginput && <div className="text-xs ml-10 sm:ml-0 text-orange-400 -translate-y-5">  (Enter comma [,] after each genre) </div>}
                            <div className="pl-2 flex space-x-2 ">{genre.map((genretag, index) => <div className="mt-2 px-1 rounded-lg text-xs sm:text-sm bg-yellow-100">{genretag}</div>)}</div>

                        </div>


                        <button
                            className="mt-5 w-full py-1 sm:py-2 md:py-3 hover:bg-yellow-500 hover:tracking-wider transition-0.5s bg-yellow-400 shadow-xl px-5 rounded-full text-mono font-bold hover:shadow-xl">
                            Add Movie
                        </button>

                        <div className="pt-4 hover:underline cursor-pointer" onClick={handleCancel}>
                            Cancel
                        </div>

                    </div>

                </form>
            </div>
        </div>

    );
}

export default AddWidget;