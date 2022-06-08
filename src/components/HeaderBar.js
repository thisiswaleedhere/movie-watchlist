import React from 'react'
import { VscSignOut } from 'react-icons/vsc'
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/AuthContext';

export default function HeaderBar() {

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
        <div className='flex justify-center mt-3'>
            <p className="text-center font-sansserif font-extralight text-7xl text-black py-6">MOVIE WATCHLIST</p> {user && <button onClick={handleLogOut}><VscSignOut /></button>}
        </div>
    );
}