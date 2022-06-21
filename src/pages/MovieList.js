import React, { useState, useEffect } from "react";
import ScrollToTop from "../components/ScrollToTop";
import TitleCard from "../components/TitleCard";
import MovieDataService from '../services/MovieServices';
import { GiFloatingGhost } from 'react-icons/gi';
import { GiFloatingPlatforms } from 'react-icons/gi';


function MovieList(props) {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const [seed, setSeed] = useState(0);

    useEffect(() => {
        getMovies();
    }, [seed]);


    const getMovies = async () => {
        const data = await MovieDataService.getAllMovies();
        console.log(data.docs);
        setMovies(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoading(false);
    };




    return (
        <div>
            <ScrollToTop />

            {/* {seed && <div className="text-red-400 text-sm pb-5 font-bold text-center"> {seed} </div>} */}

            {loading && <div className="text-6xl w-16 my-20 text-black text-center mx-auto"><div className="animate-bounce"><GiFloatingGhost /></div><div><GiFloatingPlatforms /></div></div>}

            {movies.map((doc) => {
                return (
                    <TitleCard keyid={doc.id} title={doc.title} year={doc.year} lang={doc.language} genre={doc.genre} path={doc.posterpath} icon={props.icon} getMovieId={props.getMovieId} setSeed={setSeed} />
                )
            })}


        </div>

    )
}

export default MovieList;

