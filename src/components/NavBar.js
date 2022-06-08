import React from 'react'
import { useNavigate } from 'react-router-dom';

function NavBar() {

    const navigate = useNavigate();

    return (
        <div className='text-lg text-white font-sans space-x-16 text-center flex-auto mb-14'>

            <button onClick={() => navigate("/")}
                className='bg-[#383737] hover:bg-blue-700 py-2 px-6 rounded-3xl'>
                Movie List
            </button>


            <button onClick={() => navigate("/addmovie")}
                className='bg-[#383737] hover:bg-blue-700 py-2 px-6 rounded-3xl'>
                Add Movie
            </button>

            <button onClick={() => navigate("/editmovie")}
                className='bg-[#383737] hover:bg-blue-700 py-2 px-6 rounded-3xl'>
                Edit Movie
            </button>
        </div >
    )
}

export default NavBar;