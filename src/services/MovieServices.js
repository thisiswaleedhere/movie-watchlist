import { db } from "../firebase";
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";


class MovieDataService {

    addMovie = (newMovie, uid) => {
        const movieCollectionRef = collection(db, `users/${uid}/movies`);
        return addDoc(movieCollectionRef, newMovie);
    };

    updateMovie = (id, updatedMovie, uid) => {
        const movieDoc = doc(db, `users/${uid}/movies`, id);
        return updateDoc(movieDoc, updatedMovie);
    };

    deleteMovie = (id, uid) => {
        const movieDoc = doc(db, `users/${uid}/movies`, id);
        return deleteDoc(movieDoc);
    };

    getAllMovies = (uid) => {
        const movieCollectionRef = collection(db, `users/${uid}/movies`);
        return getDocs(movieCollectionRef);
    };

    getMovie = (id, uid) => {
        const movieDoc = doc(db, `users/${uid}/movies`, id);
        return getDoc(movieDoc);
    };

}

export default new MovieDataService();

