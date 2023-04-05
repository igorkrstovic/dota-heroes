import "./HeroCard.css";
import React from "react";

const HeroCard = ({ hero }) => {
  const heroImageUrl = `https://api.opendota.com${hero.img}`;
  const heroIconUrl = `https://api.opendota.com${hero.icon}`;

  return (
    <div className="heroCard" key={hero.id}>
      <img className="heroImg" src={heroImageUrl} alt={hero.localized_name} />
      <div className="heroText">
        <h1>{hero.localized_name}</h1>
        <p className="card-subtitle">{hero.roles[0].toUpperCase()}</p>
        <div className="grid justify-center mx-0">
          <p className="card-subtitle">
            Attack Type: {hero.attack_type.toUpperCase()}
          </p>
          <p className="card-subtitle">
            Primaty Attribute: {hero.primary_attr.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
};
export default HeroCard;
