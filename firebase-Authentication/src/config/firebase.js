import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCt4-XGOHXOQElGQWH2asyys1d_FGgYR1U",
  authDomain: "auth-basic-fd22d.firebaseapp.com",
  projectId: "auth-basic-fd22d",
  storageBucket: "auth-basic-fd22d.appspot.com",
  messagingSenderId: "239258780717",
  appId: "1:239258780717:web:519a626a17171c9104e4a4",
  measurementId: "G-FRYDL84P47",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
