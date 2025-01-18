import React, { use, useEffect, useState } from "react";
import Spinner from "./Spinner";
import axios from "axios";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  const [tag, setTag] = useState("India");

  const { loading, gif, fetchData } = useGif(tag);

  function clickHandler() {
    fetchData();
  }

  function changeHandler(event) {
    setTag(event.target.value);
  }

  return (
    <div className="w-11/12 md:w-1/2 bg-blue-400 rounded-2xl border-2 border-gray-500 aspect-auto flex flex-col gap-4 py-4 items-center">
      <h1 className="uppercase underline font-bold text-2xl text-center">
        RANDOM {tag} GIF
      </h1>
      {loading ? <Spinner /> : <img src={gif} />}

      <input
        type="text"
        className="w-4/5 text-center border border-gray-300 px-3 py-2 text-lg rounded-md"
        onChange={changeHandler}
        value={tag}
      />

      <button
        onClick={clickHandler}
        className="uppercase w-4/5 py-2 bg-white opacity-70 rounded-lg font-semibold text-center hover:bg-white my-2 hover:opacity-100 transition-all duration-200"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
