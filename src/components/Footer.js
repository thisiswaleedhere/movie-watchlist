import React from "react";
import { AiOutlineGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import { ReactComponent as TMDBLogo } from '../assets/tmdb-logo.svg';
import { ReactComponent as FirebaseLogo } from '../assets/firebase-logo.svg';

function FooterElement() {

    return (
        <footer>
            <div className="bg-gray-200 py-4 rounded-t-3xl mt-10 flex-column text-center w-full align-middle font-sansserif">
                <div className="font-sansserif font-extralight text-2xl sm:text-4xl lg:text-5xl text-black pt-3 sm:pt-6 pb-3">MOVIE WATCHLIST</div>
                <div className="font-sansserif max-w-2/3 px-3 md:max-w-2xl text-center text-xs mx-auto pb-5"> This web app helps you to keep track of your movie watchlist making it easier to add movies and its details from a big database, edit movie details to make changes to your entries, and delete the ones you have already watched. </div>
                <div className="text-sm mb-1">This app is powered by:</div>
                <div className="flex justify-center space-x-8 align-middle">
                    <div className="w-6 sm:w-10"><TMDBLogo /></div>
                    <div className="w-16 sm:w-24"><FirebaseLogo /></div>
                    {/*<div>Hosting</div>*/}
                </div>
                <hr className="h-0.5 w-2/3 mx-auto bg-yellow-400 mt-2 mb-2" />
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