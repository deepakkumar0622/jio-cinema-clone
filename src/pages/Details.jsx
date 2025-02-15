/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Shows from "../components/Shows/Shows";

const Details = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    try {
      const response = await fetch("http://localhost:3000/movies");
      const movieData = await response.json();
      setData(movieData);
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(data);
  return (
    <div>
      <Header />
      <Shows title="movies" data={data} />
    </div>
  );
};

export default Details;
