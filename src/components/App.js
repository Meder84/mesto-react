import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/api';

function App() {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setselectedCard] = useState({name: '', link: ''});
  const [currentUser, setcurrentUser] = useState({});

  useEffect(() => {
    api.getUser().then((data) => {
      setcurrentUser(data);
    })
    //.catch((err) => alert(err))
  }, [])


  function handleEditProfileClick() {
    setisEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setselectedCard(card)
  }

  function closeAllPopups() {
    setisEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setisEditAvatarPopupOpen(false);
    setselectedCard({name: '', link: ''});
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body body_theme_dark">
        <div className="page">
          <Switch>
            <Route exact path='/main'>
              <Header />
              <Main
                onEditProfile = {handleEditProfileClick}
                onAddPlace = {handleAddPlaceClick}
                onEditAvatar = {handleEditAvatarClick}
                onCardClick = {handleCardClick}
              />
              <Footer />
            </Route>
          </Switch>

          <PopupWithForm
            name='popup_type_edit'
            title='Редактировать профиль'
            buttonText='Сохранить'
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

          <ImagePopup
            card = {selectedCard}
            close = {closeAllPopups}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  )    
}

export default App;
