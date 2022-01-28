import React, {useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
// import EditProfilePopup from './EditProfilePopup';

function App() {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);

  function handleEditProfileClick() {
    setisEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setisEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setisEditAvatarPopupOpen(false);
  }

  return (
    <div className="body body_theme_dark">
      <div className="page">
        <Header />
        <Main 
          onEditProfile = {handleEditProfileClick}
          onAddPlace = {handleAddPlaceClick}
          onEditAvatar = {handleEditAvatarClick}
        />
        <Footer />   
       
        <PopupWithForm
          name='popup_type_edit'
          title='Редактировать профиль'
          buttonText='Сохранить Test'
          isOpen = {isEditProfilePopupOpen}
          onClose = {closeAllPopups}
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
          
        <PopupWithForm
          name='popup_type_add'
          title='Новое место'
          buttonText='Создать'
          isOpen = {isAddPlacePopupOpen}
          onClose = {closeAllPopups}
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
            placeholder="Название" />
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
            placeholder="Ссылка на картинку" />
          <span 
            className="error" 
            id="url-input-error">
          </span>
        </PopupWithForm>

        <PopupWithForm
          name='popup_type_avatar'
          title='Обновить аватар'
          buttonText='Сохранить'
          isOpen = {isEditAvatarPopupOpen}
          onClose = {closeAllPopups}
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
        
        {/* 
        <div className="popup popup_type_delete">
          <div className="popup__container">
            <button 
              className="popup__close-button popup__close-button_delete opacity" 
              type="button">
            </button>
            <h2 className="popup__title popup__title_type_delete">Вы уверены?</h2>
            <form 
              className="popup__form" 
              name="popup-form-delete" 
              action="#"
              noValidate>
                <button 
                  className="popup__button" 
                  type="submit">Да
                </button>
            </form>
          
          </div>
        </div>

        <div className="popup popup_type_avatar">
          <div className="popup__container">
            <h2 className="popup__title">Обновить аватар</h2>
            <button 
              className="popup__close-button popup__close-button_avatar opacity" 
              type="button">
            </button>
            <form 
              className="popup__form" 
              name="avatar" 
              action="#"
              noValidate>
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
              <button 
                className="popup__button" 
                type="submit">
                  Сохранить
              </button>
            </form>
          </div>
        </div>

        <div className="popup popup_type_place">
          <figure className="popup__container-place">
            <button 
              className="popup__close-button popup__close-button_place opacity" 
              type="button">
            </button>
            <img 
              className="popup__image"  
              src="#" 
              alt="Красивые места мира" />
            <figcaption className="popup__caption">
            </figcaption>
          </figure>
        </div> */}
      </div>
    </div>
  )    
}

export default App;
