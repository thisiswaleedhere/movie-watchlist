import React from "react";
import AddWidget from "../components/AddWidget";
import SearchBar from "../components/SearchBar";



function AddMovie() {

    return (
        <>
            <SearchBar />
            <hr className="mt-12 mb-8 w-2/3 max-w-3xl mx-auto bg-yellow-300 h-0.5" />
            <AddWidget />
        </>
    )
}

export default AddMovie;