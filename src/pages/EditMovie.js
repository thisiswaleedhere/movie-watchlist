import EditWidget from "../components/EditWidget";
import MovieList from "./MovieList";


function EditMovie() {

    return (
        <>
            <div className="text-center text-lg font-sansserif">Select a movie to edit its details</div>
            <EditWidget />
            <MovieList />
        </>
    )
}
export default EditMovie;
