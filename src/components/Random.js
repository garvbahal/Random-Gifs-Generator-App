import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Random = () => {
  const { loading, gif, fetchData } = useGif();

  function clickHandler() {
    fetchData();
  }

  return (
    <div className="w-11/12 md:w-1/2  bg-[#4ade80] rounded-2xl border-2 border-gray-500 aspect-auto flex flex-col gap-4 py-4 items-center">
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
