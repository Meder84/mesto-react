import React, {useState, useEffect} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/api';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';

function App() {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);
  
  const [selectedCard, setselectedCard] = useState({name: '', link: ''});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUser().then((data) => {
      setCurrentUser(data);
    })
    .catch((err) => alert(err))
  }, [])

  useEffect(() => {
    api.getCards().then((data) => {
      setCards(data)
    })
    .catch((err) => alert(err))
  }, [])

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      const newCards = cards.map((c) => 
      c._id === card._id ? newCard : c);
     
      setCards(newCards);
    })
    .catch((err) => alert(err))
  }

  function handleCardDelete(card) {

    api.deleteCard(card._id).then(() => {
      setCards(cards.filter((el) => el !== card));
    })
    .catch((err) => alert(err))
  }
  


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

  function handleUpdateUser(data) {
    api.setUser(data).then((data) => {
      setCurrentUser(data)
      closeAllPopups()
    })
    .catch((err) => alert(err))
  }

  function handleUpdateAvatar(data) {
    api.userAvatarUpdate(data).then((data) => {
      setCurrentUser(data);
      closeAllPopups();
    })
    .catch((err) => alert(err))
  }

  function handleAddPlaceSubmit(data) {
    api.addNewCard(data).then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups()
    })
    .catch((err) => alert(err))
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
          <Header />
          <Main
            onEditProfile = {handleEditProfileClick}
            onAddPlace = {handleAddPlaceClick}
            onEditAvatar = {handleEditAvatarClick}
            onCardClick = {handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cards={cards}
          />
          <Footer />

          <EditProfilePopup 
            isOpen={isEditProfilePopupOpen} 
            onClose={closeAllPopups} 
            onUpdateUser={handleUpdateUser}            
          />

          <EditAvatarPopup 
            isOpen={isEditAvatarPopupOpen} 
            onClose={closeAllPopups} 
            onUpdateAvatar={handleUpdateAvatar}
          />
            
          <AddPlacePopup 
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />

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
