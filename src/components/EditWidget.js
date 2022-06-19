import React from "react";

function EditWidget(props) {

    const [seed, setSeed] = React.useState(1);

    const [formData, setFormData] = React.useState(
        {
            movieTitle: "",
            movieYear: "",
            movieLanguage: "",
            movieGenre: []
        }
    )

    console.log(formData)

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log("Submitted")
    }


    function handleCancel(event) {
        event.preventDefault()
        setFormData({
            movieTitle: "",
            movieYear: "",
            movieLanguage: "",
            movieGenre: []
        })

        setSeed(Math.random());
    }

    return (
        <div className="bg-gray-100 max-w-xl min-w-max mx-6 sm:mx-auto mt-4 p-5 rounded-3xl text-center shadow-xl mb-12" key={seed}>

            <form className="flex-column align-middle w-full mb-0 font-sansserif" onSubmit={handleSubmit}>
                <div className="mb-1 text-gray-700 font-sansserif text-lg">Edit Movie Info</div>

                <div>

                    <div className="mt-3">

                        <input
                            className="w-full rounded-full bg-gray-50 shadow-xl border-0 appearance-none  text-gray-800 p-1 sm:p-2 md:p-3 indent-2 focus:ring-0 focus:border-yellow-400 focus:border-2 "
                            id="movie-title"
                            type="text"
                            placeholder="Movie Title"
                            name="movieTitle"
                            onChange={handleChange}

                        />
                    </div>

                    <div className="flex max-w-xl">


                        <input
                            className="mt-3 mr-2 max-w-max rounded-full max-w-32 bg-gray-50 shadow-xl border-0 appearance-none text-gray-800 p-1 sm:p-2 md:p-3 indent-2 focus:ring-0 focus:border-yellow-400 focus:border-2 "
                            id="movie-year"
                            type="number"
                            min="1900"
                            max="2023"
                            placeholder="Year"
                            name="movieYear"
                            onChange={handleChange}
                        />





                        <input
                            className="mt-3 flex-1 rounded-full bg-gray-50 shadow-xl border-0 appearance-none  text-gray-800 p-1 sm:p-2 md:p-3 indent-2 focus:ring-0 focus:border-yellow-400 focus:border-2 "
                            id="movie-language"
                            type="text"
                            placeholder="Language"
                            name="movieLanguage"
                            onChange={handleChange}
                        />


                    </div>

                    <div className="mt-3">


                        <input
                            className="w-full rounded-full bg-gray-50 shadow-xl border-0 appearance-none  text-gray-800 p-1 sm:p-2 md:p-3 indent-2 focus:ring-0 focus:border-yellow-400 focus:border-2 "
                            id="movie-genre"
                            type="text"
                            placeholder="Genre"
                            name="movieGenre"
                            onChange={handleChange}
                        />
                    </div>


                    {/* <div className="w-28 ml-4">
                    <label htmlFor="movie-image" className="text-white font-sans text-lg">Movie Image:</label>
                    <img src="images/Marcus-Rashford.png" alt="Movie Poster" id="movie-image" />
                    </div> */}

                    <button
                        className="mt-5 w-full py-1 sm:py-2 md:py-3 hover:bg-yellow-500 hover:tracking-wider transition-0.5s bg-yellow-400 shadow-xl px-5 rounded-full text-mono font-bold hover:shadow-xl">
                        Edit Movie
                    </button>

                    <div className="pt-3 sm:pt-4 hover:underline mx-auto cursor-pointer" onClick={handleCancel}>
                        Cancel
                    </div>

                </div>

            </form>
        </div>

    );
}

export default EditWidget;