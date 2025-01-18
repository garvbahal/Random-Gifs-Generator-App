import axios from "axios";
import React, { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const useGif = (tag) => {
  const [loading, setLoading] = useState(true);
  const [gif, setGif] = useState("");

  const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

  async function fetchData() {
    setLoading(true);
    const { data } = await axios.get(tag ? tagUrl : randomUrl);
    const imgSource = data.data.images.downsized_large.url;
    setGif(imgSource);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, gif, fetchData };
};

export default useGif;
