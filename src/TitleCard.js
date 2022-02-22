import React from "react";

function TitleCard() {
    return (
        <div className="flex justify-around">
            <div>
                <div className="w-20">
                    <img src="images/Marcus-Rashford.png" alt="Movie Poster" />
                </div>
            </div>
            <div>
                <div className="grid justify-start grid-cols-4 gap-4 font-sansserif">
                    <div className="col-span-4 text-xl">Marcus Rashford - The Movie</div>
                    <div>2023</div>
                    <div>Documentary</div>
                    <div>English</div>
                    <div>Netflix</div>

                </div>
            </div>
            <div className="mr-0">1-x</div>
        </div>
    )
}

export default TitleCard;