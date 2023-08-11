import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { onAuthStateChanged, getAuth } from "@firebase/auth";
import HomePage from "./pages/Home/Home";
import ProfilePage from "../src/pages/Profile/Profile";
import HeroSearchPage from "../src/pages/HeroSearch/HeroSearch";
import GenerateImage from "../src/pages/GenerateImage/GenerateImage";

import "./App.css";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/search/heroes" element={<HeroSearchPage />} />
        <Route path="/generate_image" element={<GenerateImage />} />
      </Routes>
    </div>
  );
};

export default App;
