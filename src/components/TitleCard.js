import React from "react";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiEdit } from 'react-icons/bi';
import MovieDataService from '../services/MovieServices';

function TitleCard(props) {

    // const [movies, setMovies] = useState([]);
    // const [seed, setSeed] = useState(1);

    const deleteHandler = async (id) => {
        await MovieDataService.deleteMovie(id);
        console.log('deletehandlerclicked');
        props.setSeed(Math.random());
        //  getMovies();
    };


    // const getMovies = async () => {
    //     const data = await MovieDataService.getAllMovies();
    //     console.log(data.docs);
    //     setMovies(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //     console.log(movies);
    // };


    return (
        <div className="flex justify-center items-center mx-auto mb-3 bg-gray-100 hover:bg-white rounded-xl px-4 max-w-96 max-h-28 sm:max-h-32 sm:max-w-3xl min-w-[355px]">

            <div className="w-2/6 flex justify-evenly">
                {(props.icon !== 'edit') ? <div className="text-gray-400 px-2 sm:pl-8 cursor-pointer hover:text-red-700 hover:text-lg text-md sm:hover:text-2xl sm:text-xl place-self-center" onClick={(e) => deleteHandler(props.keyid)}><RiDeleteBin6Line /></div> : <div className="text-gray-400 px-2 sm:pl-8 cursor-pointer hover:text-orange-400 hover:text-lg text-md sm:hover:text-2xl sm:text-xl place-self-center" onClick={(e) => props.getMovieId(props.keyid)}><BiEdit /></div>}
                <img src={props.path ? `https://image.tmdb.org/t/p/w500${props.path}` : "images/noimager.jpg"} alt="Movie Poster" className="mx-auto max-h-28 border-l-4 pr-3 sm:pr-0 border-yellow-400" />
            </div>

            <div className="w-4/6 pl-2">
                <div className="grid justify-items-stretch grid-cols-4 font-sansserif">
                    <div className="col-span-4 text-lg sm:text-2xl font-bold">{props.title}</div>
                    <div className="col-span-1 text-md">{props.year}</div>
                    <div className="col-span-3">{props.lang}</div>
                    <div className="pt-1 col-span-4 flex space-x-2 overflow-x-auto scroll-auto scrollbar">{props.genre.map((genre) => <div className="bg-yellow-200 max-h-8 px-1">{(genre === 'Science Fiction') ? 'Science‑fiction' : genre}</div>)}</div>
                </div>
            </div>

        </div>
    )
}

export default TitleCard;