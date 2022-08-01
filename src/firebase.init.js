// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2Jbz2w8a1cWoj_yPn4fw8bQB1tZFcqdo",
  authDomain: "janatha-garages1.firebaseapp.com",
  projectId: "janatha-garages1",
  storageBucket: "janatha-garages1.appspot.com",
  messagingSenderId: "687798916352",
  appId: "1:687798916352:web:324331618fed1e9e1c0fe5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;