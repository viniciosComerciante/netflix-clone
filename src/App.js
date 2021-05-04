import React from "react";
import Tmdb from "./tmdb";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [movieList, setMovieList] = React.useState(null);
  const [featuredData, setFeaturedData] = React.useState(null);
  const [blackHeader, setBlackHeader] = React.useState(false);

  React.useEffect(() => {
    const loadList = async () => {
      //pegando o total
      const list = await Tmdb.getHomeList();
      setMovieList(list);

      //pegando o featured
      let originals = list.filter((item) => item.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo);
    };

    loadList();
  }, []);

  //useEffect adiciona o efeito de monitoramento do scroll

  React.useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader}></Header>

      {!movieList || !featuredData ? (
        <div className="loading">
          <img src="loading.png" alt="carregando" />
        </div>
      ) : (
        <>
          {featuredData && <FeaturedMovie data={featuredData} />}

          <section className="lists">
            {movieList &&
              movieList.map((item, index) => (
                <MovieRow
                  key={index}
                  sectionTitle={item.title}
                  items={item.items}
                ></MovieRow>
              ))}
          </section>

          <Footer></Footer>
        </>
      )}
    </div>
  );
}

export default App;
