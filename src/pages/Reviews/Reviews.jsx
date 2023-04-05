import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BackBtn from "../../components/BackBtn/BackBtn";
import Nav from "../../components/Nav/Nav";
import { getAuth } from "firebase/auth";
import { db } from "../../firebase";
import { addDoc, collection } from "@firebase/firestore";
import { ClipLoader } from "react-spinners";
import "./Reviews.css";

const WriteReview = () => {
  const navigate = useNavigate();
  const [hero, setHero] = useState("");
  const [review, setReview] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = getAuth();
  const user = auth.currentUser;

  const submitHandle = async (event) => {
    event.preventDefault();
    setLoading(true);
    const result = await axios.get(
      `https://api.opendota.com/api/heroStats?localized_name=${hero}`
    );
    if (result.data.data.results[0] === undefined) {
      setError(
        `Sorry, '${hero}' doesn't seem to be on the list. Try again(but check your spelling :D)!`
      );
    } else {
      const name = result.data.data.results[0].localized_name;
      const img = result.data.data.results[0].img;
      const collectionRef = collection(db, "reviews");
      const payLoad = {
        hero: name,
        review: review,
        imgURL: img,
        userID: user.uid,
        userEmail: user.email,
        userName: user.displayName,
      };
      addDoc(collectionRef, payLoad)
        .then(() => navigate.push("/view"))
        .catch((event) => alert(event.message))
        .finally(() => setLoading(false));
    }
  };

  return (
    <div>
      <Nav />
      <div className="write">
        <BackBtn id={"write_back"} />
        <form>
          <h1>Write a Review of your Favourite Dota2 Hero!</h1>
          <div className="input-group">
            <label htmlFor="hero">Character</label>
            <input
              value={hero}
              onChange={(event) => setHero(event.target.value)}
              name="hero"
              className="hero"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="review">Review</label>
            <textarea
              value={review}
              onChange={(event) => setReview(event.target.value)}
              name="review"
              className="review"
              required
            ></textarea>
          </div>
          <div className="btn">
            <button onClick={submitHandle} type="submit">
              {loading ? <ClipLoader size={20} /> : "Submit"}
            </button>
          </div>
          <p>{error}</p>
        </form>
      </div>
    </div>
  );
};

export default WriteReview;
