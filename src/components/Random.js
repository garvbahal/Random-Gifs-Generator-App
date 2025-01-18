import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    const imgSource = data.data.images.downsized_large.url;

    setGif(imgSource);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler() {
    fetchData();
  }

  return (
    <div className="w-1/2 bg-[#4ade80] rounded-2xl border-2 border-gray-500 aspect-auto flex flex-col gap-4 py-4 items-center">
      <h1 className="uppercase underline font-bold text-2xl text-center">
        A RANDOM GIF
      </h1>
      {loading ? <Spinner /> : <img src={gif} />}
      <button
        onClick={clickHandler}
        className="uppercase w-4/5 py-2 bg-white opacity-70 rounded-lg font-semibold text-center hover:bg-white my-2 hover:opacity-100 transition-all duration-200"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
