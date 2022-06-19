
import ScrollToTop from "../components/ScrollToTop";
import TitleCard from "../components/TitleCard";

function MovieList() {

    return (
        <>
            <ScrollToTop />
            <TitleCard title="Marcus Rashford - The Movie" year="2023" lang="English" genre={['Crime', 'Thriller']} />
            <TitleCard title="newererr namded xyzzz" year="1999" lang="English" genre={['Action']} />
            <TitleCard title="The Worst Person In The World" year="2003" lang="English" genre={['Biography', 'Crime', 'Thriller']} />
            <TitleCard title="kdjs" year="2021" lang="English" genre={['Biography', 'Thriller']} />
            <TitleCard title="Doctor Strange in the Multiverse of Madness" year="2023" lang="English" genre={['Biography', 'Crime', 'Thriller']} />


        </>

    )
}

export default MovieList;