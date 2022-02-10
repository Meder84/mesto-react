import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {

 

  return(
    <PopupWithForm
      name='popup_type_avatar'
      title='Обновить аватар'
      buttonText='Сохранить'
      isOpen = {props.isOpen}
      onClose = {props.onClose}
      // onSubmit = {handleSubmit}
    >
      <input
        className="popup__input popup__input_url" 
        type="url" 
        name="avatar"
        id="avatar-input" 
        required
        autoComplete="off" 
        placeholder="Ссылка на картинку" />
      <span 
        className="error" 
        id="avatar-input-error">
      </span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;