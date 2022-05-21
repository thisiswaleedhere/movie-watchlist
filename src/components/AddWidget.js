import React from "react";

function AddWidget(props) {

    const [formData, setFormData] = React.useState(
        {
            movieTitle: "",
            movieYear: "",
            movieLanguage: "",
            movieGenre: ""
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

    return (
        <div className="center bg-gray-500 mx-16 py-8 mb-10 rounded-lg">

            <form className="flex justify-center font-sansserif" onSubmit={handleSubmit}>

                <div>

                    <div className="flex pt-4 w-full mb-6 md:mb-0">
                        <label htmlFor="movie-title" className="text-white font-sans text-lg">Title:</label>
                        <input
                            className="ml-14 block w-96 rounded appearance-none leading-5 text-gray-800  indent-1.5"
                            id="movie-title"
                            type="text"
                            placeholder="Title"
                            name="movieTitle"
                            onChange={handleChange}

                        />
                    </div>

                    <div className="mt-3">
                        <label htmlFor="movie-year" className="text-white font-sans text-lg">Year:</label>
                        <input
                            className="appearance-none inline ml-14 rounded leading-6 text-gray-800  indent-1.5"
                            id="movie-year"
                            type="number"
                            min="1900"
                            max="2023"
                            placeholder="Year"
                            name="movieYear"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mt-3">
                        <label htmlFor="movie-language" className="text-white font-sans text-lg">Language:</label>

                        <input
                            className="ml-3 rounded appearance-none leading-6 text-gray-800  indent-1.5"
                            id="movie-language"
                            type="text"
                            placeholder="Language"
                            name="movieLanguage"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mt-3">
                        <label htmlFor="movie-genre" className="text-white font-sans text-lg">Genre:</label>

                        <input
                            className="ml-10 rounded appearance-none leading-6 text-gray-800  indent-1.5"
                            id="movie-genre"
                            type="text"
                            placeholder="Genre"
                            name="movieGenre"
                            onChange={handleChange}
                        />
                    </div>

                </div>

                {/* <div className="w-28 ml-4">
                    <label htmlFor="movie-image" className="text-white font-sans text-lg">Movie Image:</label>
                    <img src="images/Marcus-Rashford.png" alt="Movie Poster" id="movie-image" />
                </div> */}

                <button
                    className="bg-blue-400 hover:bg-blue-700 my-20 ml-16 py-1 px-6 rounded-3xl hover:text-white">
                    {props.type} Movie
                </button>

            </form>
        </div>

    );
}

export default AddWidget;