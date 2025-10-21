import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import axios from "axios";
// import axios from "axios";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // create new user register
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sing in user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //signInWithGoogle
  const signInGoogle = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // state hold the user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      // if (currentUser?.email) {
      //   const userData = { email: currentUser?.email };
      //   axios
      //     .post(`https://career-hub-server-nu.vercel.app/jwt`, userData, {
      //       withCredentials: true,
      //     })
      //     .then((res) => {
      //       console.log(res?.data);
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      // }
      // jwt

      if (currentUser?.email) {
        const userData = { email: currentUser?.email };
        axios
          .post("https://career-hub-server-nu.vercel.app/jwt", userData, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }

      console.log(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    loading,
    setLoading,
    createUser,
    signInUser,
    user,
    signOutUser,
    signInGoogle,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
