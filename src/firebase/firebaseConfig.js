import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHWavgdPH1_qDuC5hcPXtIMwRRbz7gI44",
  authDomain: "tienda-w.firebaseapp.com",
  projectId: "tienda-w",
  storageBucket: "tienda-w.appspot.com",
  messagingSenderId: "786368576609",
  appId: "1:786368576609:web:1e06b7d60fa011f9d0fe20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);