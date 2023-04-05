import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7Qf2wCyf2qT94Q2PbBU9-GajK4uRe9fw",
  authDomain: "dota-project-897ab.firebaseapp.com",
  projectId: "dota-project-897ab",
  storageBucket: "dota-project-897ab.appspot.com",
  messagingSenderId: "23475874840",
  appId: "1:23475874840:web:6184f297571b06d719676d",
  measurementId: "G-C9HGK5YWBF",
};

firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
