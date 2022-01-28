import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  } 

  return(
    <article className="card">
      <button 
        className="card__delete-button opacity" 
        type="button">
      </button>
      <img 
        className="card__image" 
        src={props.card.link} 
        alt={props.card.name}
        onClick={handleClick}
      />
      <div className="card__footer">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-elements">
          <button className="card__like-button opacity" type="button"></button>
          <h3 className="card__like-counter">{props.card.likes.length}</h3>
        </div>
      </div>
    </article>
  )
}

export default Card;