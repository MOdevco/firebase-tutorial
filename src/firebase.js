import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyB6UW9aJRvi0vZ4ZfsoPlFyG0Y5hPHzRSM",
  authDomain: "fir-a807c.firebaseapp.com",
  projectId: "fir-a807c",
  storageBucket: "fir-a807c.appspot.com",
  messagingSenderId: "970323497165",
  appId: "1:970323497165:web:9b73695d3290b8a4875984"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)