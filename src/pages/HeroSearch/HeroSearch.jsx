import "./HeroSearch.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../../components/Nav/Nav";
import SearchForm from "../../components/SearchForm/SearchForm";
import HeroCard from "../../components/HeroCard/HeroCard";
import BackBtn from "../../components/BackBtn/BackBtn";

const HeroSearchPage = () => {
  const [hero, setHero] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const getHero = async () => {
    try {
      const result = await axios.get(
        `https://api.opendota.com/api/heroStats?localized_name=${search}`
      );
      const data = result.data;
      if (data.length === 0) {
        setError(
          `Sorry, couldn't find '${search}'. Check your spelling, or search another Dota2 hero!`
        );
      } else {
        setHero(data);
      }
    } catch (error) {
      console.error(error);
      setError(
        `Sorry, there was an error fetching data for '${search}'. Please try again later.`
      );
    }
  };

  useEffect(() => {
    if (search !== "") {
      getHero(search);
    }
  }, [search]);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    getHero();
    setSearch("");
    setError("");
  };

  const handleOnChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  return (
    <>
      <Nav />
      <div className="heroSearch">
        <BackBtn id="{hero_search_back}" />
        <SearchForm
          handleOnSubmit={handleOnSubmit}
          handleOnChange={handleOnChange}
          ph={"Search your favourite Dota2 Hero"}
        />
        <div className="cardContainer">
          {hero.length === 0 ? (
            <div></div>
          ) : error !== "" ? (
            <p>{error}</p>
          ) : (
            hero
              .filter((item) =>
                item.localized_name.toLowerCase().includes(search.toLowerCase())
              )
              .map((item) => <HeroCard key={item.id} hero={item} />)
          )}
        </div>
      </div>
    </>
  );
};

export default HeroSearchPage;
