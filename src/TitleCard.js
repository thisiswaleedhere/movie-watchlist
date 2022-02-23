import React from "react";

function TitleCard(props) {
    return (
        <div className="flex justify-center items-center mb-5">
            <div>
                <div className="w-20 mx-16">
                    <img src="images/Marcus-Rashford.png" alt="Movie Poster" />
                </div>
            </div>
            <div className="ml-12 w-96">
                <div className="grid justify-items-stretch grid-cols-4 gap-4 font-sansserif">
                    <div className="col-span-4 text-2xl font-bold">{props.title}</div>
                    <div>{props.year}</div>
                    <div>{props.lang}</div>
                    <div>{props.genre}</div>
                    {/* <div>Netflix</div> */}

                </div>
            </div>
            <div className="mx-16 px-10 font-mono text-2xl text-gray-400 hover:text-red-600 hover:font-black hover:cursor-pointer">X</div>
        </div>
    )
}

export default TitleCard;