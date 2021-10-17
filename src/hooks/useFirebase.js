import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
            })
            .finally(()=>setIsLoading(false));
    }
    
useEffect(()=>{
    const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        }
        else{
            setUser({});
        }
        setIsLoading(false);
    });
    return () => unsubscribed;
},[])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(()=>setIsLoading(false));
    }
    const handleName = e => {
        setName(e.target.value);
    }
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleConfirmPassword = e => {
        setConfirmPassword(e.target.value);
        if(password===confirmPassword){

        }
        else{
            setError("Confirm password doesn't match")
        }
    }
    const handleSingIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const handleSignUp = () => {
        if (password.length < 6) {
            setError('password must be 6 characters');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })

    }

    return {
        user,
        error,
        isLoading,
        signInUsingGoogle,
        logOut,
        handleEmail,
        handleName,
        handlePassword,
        handleSingIn,
        handleSignUp,
        handleConfirmPassword
    }
}

export default useFirebase;