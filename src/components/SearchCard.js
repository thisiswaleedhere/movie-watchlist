import React, { useEffect, useState } from "react";
import MovieDataService from '../services/MovieServices';
import { FaThumbsUp } from 'react-icons/fa';
import { useUserAuth } from "../context/AuthContext";


function SearchCard(props) {

    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [year, setYear] = useState(0);
    const [language, setLanguage] = useState('');
    const [genre, setGenre] = useState([]);
    const [posterpath, setPosterpath] = useState('');
    const [seed, setSeed] = useState(false);

    const { user: { uid } } = useUserAuth();

    const newMovie = {
        id,
        title,
        year,
        language,
        genre,
        posterpath
    };

    useEffect(() => {
        const seedTimer = setTimeout(() => {
            if (seed === true) {
                setSeed(false);
            }
        }, 4000);
        return () => clearTimeout(seedTimer)
    }, [seed]);



    useEffect(() => {
        const timer = setTimeout(() => {
            if (newMovie.id) {
                MovieDataService.addMovie(newMovie, uid);
                console.log('called');
                setSeed(true);

            }
        }, 500);
        return () => clearTimeout(timer)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [posterpath]);


    const updateMovieList = async (e) => {
        e.preventDefault();
        const addurl = `https://api.themoviedb.org/3/movie/${props.movieid}?api_key=${process.env.REACT_APP_API_KEY_TMDB}`;

        try {

            const res = await fetch(addurl)
            const items = await res.json()
            console.log(items);
            setId(items.id);
            setTitle(items.title);
            setYear(Number(items.release_date.slice(0, 4)));
            setLanguage(items.spoken_languages[0].english_name);
            setGenre(items.genres.map((item) => { return item.name }));
            setPosterpath(items.poster_path)

        } catch (err) {
            console.error(err);
        }


    }


    return (
        <div>

            <div className='border-l-2 border-yellow-500 hover:font-bold hover:opacity-90 hover:border-l-4 hover:cursor-grab active:cursor-grabbing' onClick={updateMovieList}>

                <img src={props.movieposter} alt='movieposter' className="-translate-x-1" />
                <div className="p-1 font-sansserif">
                    <div>{props.movietitle}</div>
                    <div>{props.year}</div>
                </div>

            </div>
            {seed && <div className="text-green-500 pl-1 space-x-2 text-xs md:text-sm flex"><FaThumbsUp /><div>Movie Added Successfully</div> </div>}
        </div>

    )

}

export default SearchCard;