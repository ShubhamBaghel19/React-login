import {getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDBVFR9gd-IV7-oqqeTidVgoRKr9xa1bFs",
  authDomain: "react-authentication-4e656.firebaseapp.com",
  projectId: "react-authentication-4e656",
  storageBucket: "react-authentication-4e656.appspot.com",
  messagingSenderId: "117752863388",
  appId: "1:117752863388:web:30a59c15ba87410a3beb59",
  measurementId: "G-309XG4486C"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;