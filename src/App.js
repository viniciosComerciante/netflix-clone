import React from 'react';
import Tmdb from './tmdb';
import './App.css';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';


function App() {

  const [movieList, setMovieList] = React.useState();
  const [featuredData, setFeaturedData] = React.useState(null);


  React.useEffect(()=>{

    const loadList = async ()=>{
      //pegando o total
      const list = await Tmdb.getHomeList();
      setMovieList(list);

      //pegando o featured
      let originals = list.filter(item => item.slug ==="originals");
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }
    
    loadList();
  }, [])


  return (
    <div className="page">

      {featuredData && 
        <FeaturedMovie data={featuredData}/>
      }

      <section className="lists">
        {movieList && movieList.map((item, index)=>(
          <MovieRow key={index} sectionTitle={item.title} items={item.items}></MovieRow>
        ))}
      </section>


    </div>
  );
}

export default App;
