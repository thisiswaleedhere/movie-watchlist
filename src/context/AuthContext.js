import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";

const userAuthContext = createContext();



export function UserAuthContextProvider({ children }) {

    const [user, setUser] = useState({});

    console.log(user);


    function signUp(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((cred) => {
                setDoc(doc(db, 'users', cred.user.uid), { email: cred.user.email })
            })
    }

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);

    }

    function logOut() {
        signOut(auth);
    }

    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return (
            signInWithPopup(auth, googleAuthProvider)
                .then((cred) => { setDoc(doc(db, 'users', cred.user.uid), { email: cred.user.email }) })
        )
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        };
    }, []);



    return (
        <userAuthContext.Provider value={{ user, logIn, logOut, signUp, googleSignIn }}>
            {children}
        </userAuthContext.Provider>
    );
}


//custom hook to use the context
export function useUserAuth() {
    return useContext(userAuthContext);
}