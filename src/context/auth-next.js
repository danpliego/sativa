import React, { createContext, useState, useEffect } from "react";
import firebase from "gatsby-plugin-firebase";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  const sendSignInLinkToEmail = (email) => {
    return firebase
      .auth()
      .sendSignInLinkToEmail(email, {
        url: "http://localhost:3000/confirm",
        handleCodeInApp: true,
      })
      .then(() => {
        return true;
      });
  };

  const signInWithEmailLink = (email, code) => {
    return firebase
      .auth()
      .signInWithEmailLink(email, code)
      .then((result) => {
        setUser(result.user);
        return true;
      });
  };

  const logout = () => {
    return firebase.auth().signOut.then(() => {
      setUser(null);
    });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setUser(user)
      setIsAuthenticating(false)
    })

    return () => unsubscribe();
  }, [])

  const values = {
    user,
    isAuthenticating,
    sendSignInLinkToEmail,
    signInWithEmailLink,
    logout,
  }

  return (
    <AuthContext.Provider value={values}>
      {!isAuthenticating && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
