import React from "react";

function PopupWithForm (props) {
  return (
    <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        
        <button 
          className="popup__close-button opacity" 
          type="button"
          onClick={props.onClose}
        >
        </button>
        
        <form 
          className="popup__form" 
          name={props.name} 
          action="#"
          noValidate
          onSubmit={props.onSubmit}
        >

          <h2 className="popup__title">{props.title}</h2>
          {props.children}

          <button 
            className="popup__button" 
            type="submit"
          >
              {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;