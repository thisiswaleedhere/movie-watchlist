import React from "react";

function SearchCard(props) {

    const updateMovieList = (e) => {
        e.preventDefault();
        console.log('clicked');
        console.log(props.movieid);
        const addurl = `https://api.themoviedb.org/3/movie/${props.movieid}?api_key=${process.env.REACT_APP_API_KEY_TMDB}`;


        try {
            return (
                fetch(addurl).then(data => data.json()).then(items => console.log(items))
            )
        } catch (err) {
            console.error(err);
        }
    }



    return (

        <div className='border-l-2 border-yellow-500 hover:font-bold hover:opacity-90 hover:border-l-4 hover:cursor-grab active:cursor-grabbing' onClick={updateMovieList}>
            <img src={props.movieposter} alt='movieposter' className="-translate-x-1" />
            <div className="p-1 font-sansserif">
                <div>{props.movietitle}</div>
                <div>{props.year}</div>
            </div>
        </div>

    )

}

export default SearchCard;