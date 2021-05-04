import React from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import "./style.css";

const MovieRow = ({ sectionTitle, items }) => {

  const [scrollX, setScrollX] = React.useState(0)

  const imgWidth = 150;



  function handleLeftArrow(){
    if(scrollX < 0){
      setScrollX((scroll)=> scroll + imgWidth)
    }
  }

  function handleRightArrow(){
       if(-scrollX < (items.results.length * imgWidth - window.innerWidth)){
      setScrollX((scroll)=> scroll - imgWidth
      )
    }
  
  }


  return (
    <div className="movieRow">
      <h2>{sectionTitle}</h2>

      <div className="movieRow-left" onClick={handleLeftArrow}>
        <MdNavigateBefore style={{fontSize: 50}}/>
      </div>

      <div className="movieRow-right" onClick={handleRightArrow} >
        <MdNavigateNext style={{fontSize: 50}}/>
      </div>

      <div className="movieRow-wrapper" >
        <div className="movieRow-list" style={{marginLeft: scrollX, width: items.results.length * imgWidth}}>
          {items.results.length > 0 &&
            items.results.map((item, index) => (
              <div className="movieRow-item" key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
