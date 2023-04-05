import "./Profile.css";
import React from "react";
import Nav from "../../components/Nav/Nav";
import pudge from "../../images/pudge.jpg";
import sniper from "../../images/Sniper.png";
import write1 from "../../images/write1.png";
import write2 from "../../images/write2.png";
import write3 from "../../images/write3.png";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <>
      <Nav />
      <div className="profile">
        <div className="row1">
          <div className="card">
            <img src={pudge} id="img1" alt="pudge" />
            <Link className="profileBtn" to="/search/heroes">
              Search your Hero!
            </Link>
          </div>
          {/* <div className="card">
            <img src={sniper} id="img2" alt="xmen" />
            <Link className="profileBtn" to="/search/player">
              Check the best Items!
            </Link>
          </div> */}

          {/* <div className="card">
            <img src={sniper} id="img2" alt="xmen" />
            <Link className="profileBtn" to="/write">
              Write Review
            </Link>
          </div> */}
          {/* <div className="card">
            <img src={pudge} id="img4" className="viewPic" alt="undraw" />
            <img src={pudge} id="img5" className="viewPic" alt="undraw" />
            <img src={sniper} id="img6" className="viewPic" alt="undraw" />
            <Link className="profileBtn" to="/view">
              My Reviews
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
};
export default ProfilePage;
