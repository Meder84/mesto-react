import React from "react";

function ImagePopup(props) {
  return (
    <div className={`popup popup_type_place ${props.card ? 'popup_opened' : ''}`}>
      <figure className="popup__container-place">
        <button 
          className="popup__close-button popup__close-button_place opacity" 
          type="button"
          onClick={props.close}
        >
        </button>
        <img 
          className="popup__image"  
          src={props.card ? props.card.link : '#'} 
          alt={props.card ? props.card.name : ''}
        />
        <figcaption 
          className="popup__caption">
          {props.card ? props.card.name : ''}
        </figcaption>
      </figure>
    </div>
  )
}

export default ImagePopup;