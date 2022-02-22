import React from 'react'

function NavBar() {
    return (
        <div className='text-lg text-white font-sans space-x-16 text-center flex-auto mb-14'>
            <button
                className='bg-[#383737] hover:bg-blue-700 py-2 px-6 rounded-3xl'>
                Movie List
            </button>
            <button
                className='bg-[#383737] hover:bg-blue-700 py-2 px-6 rounded-3xl'>
                Add Movie
            </button>
            <button
                className='bg-[#383737] hover:bg-blue-700 py-2 px-6 rounded-3xl'>
                Edit Movie
            </button>
        </div>
    )
}

export default NavBar;