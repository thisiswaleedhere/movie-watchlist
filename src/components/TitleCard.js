import React from "react";
import { RiDeleteBin6Line } from 'react-icons/ri';

function TitleCard(props) {
    return (
        <div className="flex justify-center items-center mx-auto mb-3 bg-gray-100 hover:bg-white rounded-xl px-4 max-w-96 max-h-28 sm:max-h-32 sm:max-w-3xl">

            <div className="w-2/6 flex justify-evenly">
                <div className="text-gray-400 px-2 sm:pl-8 hover:text-red-700 hover:text-lg text-md sm:hover:text-2xl sm:text-xl place-self-center"><RiDeleteBin6Line /></div>
                <img src="images/Marcus-Rashford.png" alt="Movie Poster" className="mx-auto max-h-28 border-l-4 pr-3 sm:pr-0 border-yellow-400" />
            </div>

            <div className="w-4/6 pl-2">
                <div className="grid justify-items-stretch grid-cols-4 font-sansserif">
                    <div className="col-span-4 text-lg sm:text-2xl font-bold">{props.title}</div>
                    <div className="col-span-1 text-md">{props.year}</div>
                    <div className="col-span-3">{props.lang}</div>
                    <div className="pt-1 col-span-4 flex space-x-2 overflow-x-auto scroll-auto scrollbar">{props.genre.map((genre) => <div className="bg-yellow-200 px-1">{genre}</div>)}</div>
                </div>
            </div>

            {/* <div className="mx-16 px-10 font-mono text-md text-gray-400 hover:text-red-600 hover:font-black hover:cursor-pointer">Remove</div> */}
        </div>
    )
}

export default TitleCard;