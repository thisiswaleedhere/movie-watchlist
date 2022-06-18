import React from "react";
import { AiOutlineGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';

function FooterElement() {

    return (
        <footer>
            <div className="mt-12 bg-gray-200 py-4 rounded-t-3xl flex-column text-center w-full align-middle font-sansserif">
                <div className="font-sansserif font-extralight text-2xl sm:text-4xl md:text-3xl lg:text-5xl text-black pt-6 pb-3">MOVIE WATCHLIST</div>
                <div className="font-sansserif max-w-2/3 px-3 md:max-w-2xl text-center text-xs mx-auto pb-2"> This web app helps you to keep track of your movie watchlist making it easier to add movies and its details from a big database, edit movie details to make changes to your entries, and delete the ones you have already watched. </div>
                <div className="text-sm">This app is powered by:</div>
                <div className="flex justify-center space-x-4">
                    <div><img src={require("../../public/images/TMDBlogo.svg").default} alt='TMDB logo' /></div>
                    <div>Firebase Auth</div>
                    <div>Hosting</div>
                </div>
                <hr className="h-0.5 w-2/3 mx-auto bg-black mt-1 mb-2" />
                <div>Made by MW </div>
                <div className="flex justify-center space-x-4 mt-1">
                    <div><AiOutlineGithub /></div>
                    <div><CgWebsite /></div>
                </div>

            </div>
        </footer>
    )
}

export default FooterElement;