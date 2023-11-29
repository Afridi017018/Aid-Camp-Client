import React, { createContext, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase/firebase.config'
import { useState } from 'react';
import useAxios from '../hooks/useAxios';
// import useAxios from '../../hooks/useAxios';




export const AuthContext = createContext()

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
// const axios = useAxios();

const AuthProvider = ({ children }) => {
    const axios = useAxios();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userInfo, setUserInfo] = useState(null)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = async (name, photo) => {
        setLoading(true);
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })

        await signOut(auth);

    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }

    const signInGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }


    const getUserInfo = async (email) => {
        const data = await axios.get(`/api/user/get-user-info?email=${email}`)
        // console.log(data.data.data.name)
        setLoading(true);
        updateProfile(auth.currentUser, {
            displayName: data.data.data.name,
        })
        setLoading(false);
        setUserInfo(data.data.data);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {


            setUser(currentUser);
            setLoading(false);

            const loggedUser = { email: currentUser?.email || user?.email };

            if (currentUser) {
                getUserInfo(currentUser?.email);
                axios.post('/api/verification/access-token', loggedUser)
            }
            else {
                setUserInfo(null)
            }



        });
        return () => {
            unSubscribe();
        }
    }, [])



    const logOut = async () => {
        setLoading(true);
        await axios.post(`/api/verification/logout`,{user:user.email});
        await signOut(auth)

    }

    const authInfo = {
        createUser,
        updateUser,
        signIn,
        signInGoogle,
        user,
        logOut,
        loading,
        setLoading,
        userInfo,
        setUserInfo,
        getUserInfo

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;