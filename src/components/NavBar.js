import React from 'react'
import { NavLink } from 'react-router-dom';

function NavBar() {



    return (
        <div className='min-w-[355px] max-w-[1440px]'>

            <ul className='text-xs sm:text-sm lg:text-lg text-white font-sansserif mb-12 flex flex-auto justify-center space-x-3 sm:space-x-4 lg:space-x-16'>
                <li>

                    <NavLink to="/" className={({ isActive }) => isActive ? ('text-yellow-500 font-bold') : ('')}>
                        <button
                            className='bg-gray-700 hover:bg-yellow-500 hover:text-yellow-900 hover:shadow-xl hover:font-bold py-2 px-3 sm:px-6  rounded-3xl'>

                            Movie List

                        </button>
                    </NavLink>

                </li>

                <li>
                    <NavLink to="/addmovie" className={({ isActive }) => isActive ? ('text-yellow-500') : ('')}>
                        <button
                            className='bg-gray-700 hover:bg-yellow-500 hover:text-yellow-900 hover:shadow-xl hover:font-bold py-2 px-3 sm:px-6 rounded-3xl'>

                            Add Movie

                        </button>
                    </NavLink>

                </li>

                <li>
                    <NavLink to="/editmovie" className={({ isActive }) => isActive ? ('text-yellow-500') : ('')}>
                        <button
                            className='bg-gray-700 hover:bg-yellow-500 hover:text-yellow-900 hover:shadow-xl hover:font-bold py-2 px-3 sm:px-6 rounded-3xl'>

                            Edit Movie

                        </button>
                    </NavLink>
                </li>

            </ul>
        </div >
    )
}


export default NavBar;