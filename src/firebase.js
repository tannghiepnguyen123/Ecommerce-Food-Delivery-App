import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBdi8lJunkpyv4l5or7bOm4uKNsLbZTcg0",
    authDomain: "food-delivery-app-d53e1.firebaseapp.com",
    projectId: "food-delivery-app-d53e1",
    storageBucket: "food-delivery-app-d53e1.appspot.com",
    messagingSenderId: "759283054534",
    appId: "1:759283054534:web:caf8dbb14c9bc5e570a4c7",
};

const app = initializeApp(firebaseConfig);

export default app

export const auth = getAuth(app)