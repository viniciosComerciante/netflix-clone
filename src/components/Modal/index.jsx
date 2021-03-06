import React from "react";
import "./style.css";

const Modal = ({ closeModal, openModal, selectedFilm, setSelectedFilm}) => {
  
  let linkFragment = null;
  if(selectedFilm){
    if(selectedFilm.results.length >=1){
      linkFragment = selectedFilm.results[0].key
    }
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-container">
        <button className="btn-sair" onClick={closeModal}>X</button>
        <div className="modal-content">

          {linkFragment?  <iframe className="iframe"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${linkFragment}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            autoPlay="1"
          ></iframe>:
            <p>Não possuimos este conteudo</p>
          }
         
        </div>
      </div>
    </div>
  );
};

export default Modal;
