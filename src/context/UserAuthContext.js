import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase"
import Login from "../component/Login";
const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {

  // const [user,setUser] = useState({})
  const [user, setUser] = useState({})

  function logIn(email, password) {
    console.log("Email", email)
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password, Login);
  }
  function logOut() {
    return signOut(auth);
  }

  function googleSignIn(){
    const googleAuthProvider=new GoogleAuthProvider();
    return signInWithPopup(auth,googleAuthProvider);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut,googleSignIn }}
    >
      {children}
    </userAuthContext.Provider>
  )
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
