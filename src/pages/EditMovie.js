import EditWidget from "../components/EditWidget";
import MovieList from "./MovieList";
import { BiEdit } from 'react-icons/bi';
import { useState } from "react";


function EditMovie() {

    const [movieId, setMovieId] = useState('');

    const getMovieIdHandler = (id) => {
        console.log("The ID of the movie to be edited:", id);
        setMovieId(id);
    };


    return (
        <>
            <div className="text-center text-lg font-sansserif min-w-[355px] max-w-[1440px] px-4">Click on the <div className="inline-flex text-gray-400 text-md px-1 align-middle sm:text-xl place-self-center"><BiEdit /></div> icon to edit movie details</div>
            <EditWidget id={movieId} setMovieId={setMovieId} />
            <MovieList icon="edit" getMovieId={getMovieIdHandler} />
        </>
    )
}
export default EditMovie;
