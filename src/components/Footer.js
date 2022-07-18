import React from "react";
import { AiOutlineGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import { FiLogOut } from 'react-icons/fi';
import { ReactComponent as TMDBLogo } from '../assets/tmdb-logo.svg';
import { ReactComponent as FirebaseLogo } from '../assets/firebase-logo.svg';


import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/AuthContext';

function FooterElement() {

    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();

    const handleLogOut = async () => {
        try {
            await logOut();
            navigate('/login');


        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <footer className="min-w-[355px] max-w-[1920px] mx-auto">
            <div className="bottom-0 bg-gray-100 py-4 rounded-t-3xl mt-10 flex-column text-center w-full align-middle font-sansserif">
                {user && <div className="text-gray-600 hover:text-red-500 hover:underline text-sm cursor-pointer hover:font-bold w-24 mx-auto" onClick={handleLogOut}>Log out <FiLogOut className="inline ml-1" /></div>}
                <div className="font-sansserif font-bold text-3xl sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-400 pt-3 sm:pt-6 pb-3">WATCH ME</div>
                <div className="font-sansserif max-w-2/3 px-6 md:max-w-2xl text-center text-xs mx-auto pb-5"> This web app helps you to keep track of your movie watchlist making it easier to add movies and its details from a big database, edit movie details to make changes to your entries, and delete the ones you have already watched. </div>
                <div className="text-sm mb-2">This app is powered by:</div>
                <div className="flex justify-center pb-2 space-x-8 align-middle">
                    <div className="w-6 sm:w-10"><a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer"><TMDBLogo /></a></div>
                    <div className="w-16 sm:w-24"><a href="https://firebase.google.com/" target="_blank" rel="noreferrer"><FirebaseLogo /></a></div>
                </div>
                <hr className="h-0.5 w-2/3 mx-auto bg-yellow-400 mt-2 mb-2" />
                <div className="flex justify-between max-w-4xl mx-auto text-gray-700 px-8">
                    <div className="text-xs pt-1">Made by MW </div>
                    <div className="flex justify-center space-x-4 mt-1">
                        <div><a href="https://github.com/thisiswaleedhere" target="_blank" rel="noreferrer" ><AiOutlineGithub /></a></div>
                        <div><a href="https://waleed-dev-portfolio.vercel.app/" target="_blank" rel="noreferrer" ><CgWebsite /></a></div>
                    </div>
                </div>


            </div>
        </footer>
    )
}

export default FooterElement;