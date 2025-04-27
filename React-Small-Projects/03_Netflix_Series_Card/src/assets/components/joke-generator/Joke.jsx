import "./Joke.css";
import "./GenerateBtn";
import { useState } from "react";
import GenerateBtn from "./GenerateBtn";

const Joke = () => {
  const [joke, setJoke] = useState("");
  const fetchApi = () => {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then((res) => res.json())
      .then((data) => setJoke(data.joke));
  };
  return (
    <>
      <h1>Joke generator</h1>
      <div className="joke-new">
        <h3>{joke}</h3>
        <GenerateBtn callApi={fetchApi} />
      </div>
    </>
  );
};

export default Joke;
