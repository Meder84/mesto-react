import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  return(
    <PopupWithForm
      name='popup_type_edit'
      title='Редактировать профиль'
      buttonText='Сохранить'
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        className="popup__input popup__input_name" 
        type="text" 
        id="name-input" 
        name="name"
        required
        minLength="2"
        maxLength="40"
        autoComplete="off" 
        placeholder="Имя" />
      <span 
        className="error" 
        id="name-input-error">
      </span>
      <input
        className="popup__input popup__input_job" 
        type="text" 
        id="job-input"
        name="about" 
        required
        minLength="2"
        maxLength="200"
        autoComplete="off" 
        placeholder="Профессия" />
      <span 
        className="error" 
        id="job-input-error">
      </span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;
