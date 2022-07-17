import React, { useState, useEffect } from "react";
import MovieDataService from '../services/MovieServices';
import { useUserAuth } from "../context/AuthContext";

function EditWidget({ id, setMovieId }) {

    const [seed, setSeed] = React.useState(1);

    const [warn, setWarn] = useState('');
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [language, setLanguage] = useState('');
    const [taginput, setTaginput] = useState('');
    const [genre, setGenre] = useState([]);
    const [posterpath, setPosterpath] = useState('');
    const [message, setMessage] = useState('');

    const { user: { uid } } = useUserAuth();


    const onKeyDown = (e) => {

        const trimmedInput = taginput.trim();

        if (e.key === "," && trimmedInput.length && !genre.includes(trimmedInput)) {
            e.preventDefault();
            setGenre(prevState => [...prevState, trimmedInput]);
            setTaginput('');
            console.log(genre);
        }
    }

    const newMovie = {
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
    }, [message]);


    useEffect(() => {
        if (warn) {
            setTimeout(() => {
                setWarn('');

            }, 4000)
        }
    }, [warn]);



    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(newMovie);

        if (title === "" || year === "" || language === "" || genre === []) {
            setWarn("All fields are mandatory");
            return;
        }


        try {
            await MovieDataService.updateMovie(id, newMovie, uid);
            setMovieId('');

        } catch (error) {
            console.error(error.message);
        }

        setTitle('');
        setYear('');
        setLanguage('');
        setGenre([]);
        console.log("Submitted")
        setMessage('Movie updated successfully');

    };



    function handleCancel(event) {
        event.preventDefault();
        setTitle('');
        setYear('');
        setLanguage('');
        setGenre([]);
        setPosterpath('');
        setMovieId('');
        setSeed(Math.random());
    }


    const filterfunction = (e) => {
        e.preventDefault();
        console.log('x clicked');
        setGenre([]);
    }



    const editHandler = async (id) => {
        try {
            const docSnap = await MovieDataService.getMovie(id, uid);
            console.log("the record is :", docSnap.data());
            setTitle(docSnap.data().title);
            setYear(docSnap.data().year);
            setLanguage(docSnap.data().language);
            setGenre(docSnap.data().genre);
            setPosterpath(docSnap.data().posterpath);

        } catch (error) {

        }
    }




    useEffect(() => {

        if (id !== undefined && id !== "") {
            editHandler(id);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);


    return (

        <div className="min-w-[355px] max-w-[1920px]">
            <div className="text-sm max-w-xl mx-auto text-white rounded-lg bg-green-800 text-center">{message}</div>
            <div className="bg-gray-100 max-w-xl min-w-max mx-6 sm:mx-auto mt-4 p-5 rounded-3xl text-center shadow-xl mb-12" key={seed}>

                <form className="flex-column align-middle w-full mb-0 font-sansserif" onSubmit={handleSubmit}>
                    <div className="mb-1 text-gray-700 font-sansserif text-lg">Edit Movie Info</div>
                    <div className="text-sm text-red-500">{warn}</div>

                    <div>

                        <div className="mt-3">

                            <input
                                className="w-full rounded-full bg-gray-50 shadow-xl border-0 appearance-none  text-gray-800 p-1 sm:p-2 md:p-3 indent-2 focus:ring-0 focus:border-yellow-400 focus:border-2 "
                                id="movie-title"
                                type="text"
                                placeholder="Movie Title"
                                name="movieTitle"
                                value={title}
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
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                            />





                            <input
                                className="mt-3 flex-1 rounded-full bg-gray-50 shadow-xl border-0 appearance-none  text-gray-800 p-1 sm:p-2 md:p-3 indent-2 focus:ring-0 focus:border-yellow-400 focus:border-2 "
                                id="movie-language"
                                type="text"
                                placeholder="Language"
                                name="movieLanguage"
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                            />


                        </div>

                        <div className="mt-3">


                            <input
                                className="w-full rounded-full bg-gray-50 shadow-xl border-0 appearance-none  text-gray-800 p-1 sm:p-2 md:p-3 indent-2 focus:ring-0 focus:border-yellow-400 focus:border-2 "
                                id="movie-genre"
                                type="text"
                                placeholder="Genre"
                                name="movieGenre"
                                value={taginput}
                                onChange={(e) => setTaginput(e.target.value)}
                                onKeyDown={onKeyDown}
                            />

                            {taginput && <div className="text-xs ml-10 sm:ml-0 text-orange-400 -translate-y-5">  (Enter comma [,] after each genre) </div>}

                            <div className="flex justify-between pr-3 align-middle">
                                <div className="pl-2 flex space-x-2">
                                    {genre.map((genretag) =>
                                        <div className="mt-2 px-1 rounded-lg text-xs sm:text-sm bg-yellow-100">{genretag}
                                        </div>
                                    )}
                                </div>
                                {id && <button className="text-red-300 hover:text-red-400 font-bold pt-2" onClick={filterfunction}>X</button>}
                            </div>

                        </div>

                        <div className="hidden">{posterpath}</div>




                        <button
                            className="mt-5 w-full py-1 sm:py-2 md:py-3 hover:bg-yellow-500 hover:tracking-wider transition-0.5s bg-yellow-400 shadow-xl px-5 rounded-full text-mono font-bold hover:shadow-xl">
                            Edit Movie
                        </button>

                        <div className="pt-3 sm:pt-4 hover:underline mx-auto cursor-pointer" onClick={handleCancel}>
                            Cancel
                        </div>

                    </div>

                </form >
            </div >
        </div>

    );
}

export default EditWidget;