import { useEffect, useState } from "react";
import "./App.css";
import Anime from "./components/Anime";

function App() {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/anime")
      .then((res) => res.json())
      .then((data) => setAnime(data.data));
  }, []);

  const anim = anime.map((anime) => {
    console.log(anime);

    let animeName = anime.title_english || anime.title;
    let animeImage = anime.images.jpg.image_url;
    let rating = anime.score;
    console.log(animeName);
    console.log(animeImage);
    return <Anime AnimeTitle={animeName} Image={animeImage} rating={rating} />;
  });

  return (
    <div className="main">
      <h1>Top 20 Anime</h1>
      <div className="App">{anim}</div>
    </div>
  );
}

export default App;
