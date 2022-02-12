import React, {useRef} from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {

 const refAvatar= useRef('');

 function handleSubmit(evt) {
   evt.preventDefault();

   props.onUpdateAvatar({
    avatar: refAvatar.current.value,
   });
   refAvatar.current.value = '';
 }

  return(
    <PopupWithForm
      name='popup_type_avatar'
      title='Обновить аватар'
      buttonText='Сохранить'
      isOpen = {props.isOpen}
      onClose = {props.onClose}
      onSubmit = {handleSubmit}
    >
      <input
        className="popup__input popup__input_url" 
        type="url" 
        name="avatar"
        id="avatar-input" 
        required
        autoComplete="off" 
        placeholder="Ссылка на картинку" 
        ref={refAvatar}
      />
      <span 
        className="error" 
        id="avatar-input-error">
      </span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;