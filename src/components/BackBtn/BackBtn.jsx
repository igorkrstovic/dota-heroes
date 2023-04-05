import "./BackBtn.css";
import React from "react";
import { Link } from "react-router-dom";

export default function BackBtn({ id }) {
  return (
    <>
      <Link id={id} className="back" to="/profile">
        <i className="fas fa-long-arrow-alt-left"></i> Back
      </Link>
    </>
  );
}
