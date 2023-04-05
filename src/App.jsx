import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { onAuthStateChanged, getAuth } from "@firebase/auth";
import HomePage from "./pages/Home/Home";
import ProfilePage from "../src/pages/Profile/Profile";
import HeroSearchPage from "../src/pages/HeroSearch/HeroSearch";

import "./App.css";

const firebaseConfig = {
  apiKey: "AIzaSyD7Qf2wCyf2qT94Q2PbBU9-GajK4uRe9fw",
  authDomain: "dota-project-897ab.firebaseapp.com",
  projectId: "dota-project-897ab",
  storageBucket: "dota-project-897ab.appspot.com",
  messagingSenderId: "23475874840",
  appId: "1:23475874840:web:6184f297571b06d719676d",
  measurementId: "G-C9HGK5YWBF",
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
      </Routes>
    </div>
  );
};

export default App;

// import React, { useEffect, useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import { onAuthStateChanged, getAuth } from "@firebase/auth";
// import HomePage from "../src/pages/Home";

// import "./App.css";

// const App = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const auth = getAuth();
//     onAuthStateChanged(auth, (user) => {
//       setUser(user);
//     });
//   }, []);

//   return (
//     <div className="app">
//       <Routes>
//         <Route exact path="/" element={<HomePage />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;
