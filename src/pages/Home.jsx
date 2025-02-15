import { useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import { Channel } from "../components/Channels/Channel";
import Feature from "../components/Feature/Feature";
import Header from "../components/Header/Header";
import Shows from "../components/Shows/Shows";
import Tags from "../components/tags/Tags";

const Home = () => {
  const [data, setData] = useState([]);
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [ratedMovies, setRatedMovies] = useState([]);
  const [hollywood, setHollywood] = useState([]);
  const [actions, setActions] = useState([]);
  const [korean, setKorean] = useState([]);
  const [japanese, setJapanese] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/movies");
        const movieData = await response.json();
        setData(movieData);

        const featMovies = movieData.filter((movie) => {
          return movie.featured === true;
        });
        setFeaturedMovies(featMovies);
        console.log(featMovies);

        const topRated = movieData.filter((movie) => {
          return movie.imdb >= 8.5;
        });
        setRatedMovies(topRated);
        console.log(topRated);

        const actionMovies = movieData.filter((movie) => {
          return movie.genre.includes("Action");
        });
        setActions(actionMovies);
        console.log(actionMovies);

        const hollywoodMovies = movieData.filter((movie) => {
          return movie.language === "English";
        });
        console.log(hollywoodMovies);
        setHollywood(hollywoodMovies);

        const koreanMovies = movieData.filter((movie) => {
          return movie.language === "Korean";
        });
        console.log(koreanMovies);
        setKorean(koreanMovies);

        const japaneseMovies = movieData.filter((movie) => {
          return movie.language === "Japanese";
        });
        console.log(japaneseMovies);
        setJapanese(japaneseMovies);
      } catch (error) {
        console.log("Error", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Header data={data} />
      <Tags />
      <Banner />
      <Channel />
      <Feature movie={featuredMovies} />
      <Shows title="Top Rated Movies" data={ratedMovies} />
      <Shows title="Action Movies" data={actions} />
      <Shows title="Hollywood Movies" data={hollywood} />
      <Shows title="Korean Movies" data={korean} />
      <Shows title="Japanese Movies" data={japanese} />
    </div>
  );
};

export default Home;
