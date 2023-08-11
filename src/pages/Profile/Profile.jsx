import "./Profile.css";
import React from "react";
import Nav from "../../components/Nav/Nav";
import pudge from "../../images/pudge.jpg";
import NATURE from "../../images/nature.jpeg";

import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <>
      <Nav />
      <div className="sm:flex flex-row">
        <div className="profile w-[100%] sm:h-[100vh] h-[30vh]">
          <div className="row1">
            <div className="card">
              <img
                src={pudge}
                id="img1"
                alt="pudge"
                className="sm:scale-125 scale-150 "
              />
              <Link
                className="profileBtn bg-transparent outline-none text-white px-[1rem] py-[1rem] "
                to="/search/heroes"
              >
                Search your Hero!
              </Link>
            </div>
          </div>
        </div>
        <div className="imagegenerate w-[100%] sm:h-[100vh] h-[30vh] ">
          <div className="row1">
            <div className="card">
              <img
                src={NATURE}
                id="img2"
                alt="nature prophet"
                className="sm:scale-110 scale-150"
              />
              <Link className="profileBtn" to="/generate_image">
                Generate unique image!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfilePage;
