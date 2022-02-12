import React, {useRef} from "react";
import PopupWithForm from "./PopupWithForm";


function AddPlacePopup(props) {
  const inputNameRef = useRef('');
  const inputLinkRef = useRef('');

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onAddPlace({
      name: inputNameRef.current.value,
      link: inputLinkRef.current.value
    })
    inputNameRef.current.value = '';
    inputLinkRef.current.value = '';
  }

  return(
    <PopupWithForm
      name='popup_type_add'
      title='Новое место'
      buttonText='Создать'
      isOpen = {props.isOpen}
      onClose = {props.onClose}
      onSubmit = {handleSubmit}
    >
      <input
        className="popup__input popup__input_description" 
        type="text" 
        name="name"
        id="description-input"
        required
        minLength="2"
        maxLength="30"
        autoComplete="off" 
        placeholder="Название" 
        ref={inputNameRef}
      />
      <span 
        className="error" 
        id="description-input-error">
      </span>
      <input
        className="popup__input popup__input_url" 
        type="url" 
        name="link"
        id="url-input" 
        required
        autoComplete="off" 
        placeholder="Ссылка на картинку" 
        ref={inputLinkRef}
      />
      <span 
        className="error" 
        id="url-input-error">
      </span>
    </PopupWithForm>
  )
}

export default AddPlacePopup;