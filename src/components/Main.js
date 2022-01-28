import React, {useState, useEffect} from "react";
import api from "../utils/api";
import Card from "./Card";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUser().then((data) => {
      setUserName(data);
      setUserDescription(data);
      setUserAvatar(data);
    })
    .catch((err) => alert(err))
  }, [])

  useEffect(() => {
    api.getCards().then((data) => {
      setCards(data)
    })
    .catch((err) => alert(err))
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <button 
          className="profile__avatar-button"
          type="button"
          onClick={onEditAvatar}
        >              
        </button>
        <img 
          className="profile__avatar" 
          src={userAvatar.avatar} 
          alt="аватар." 
        />
        
        <div className="profile__info">
          <h1 className="profile__name">{userName.name}</h1>
          <button 
            className="profile__edit-button opacity" 
            type="button"
            onClick={onEditProfile}
          >
          </button>
          <p className="profile__job">{userDescription.about}</p>
        </div>
        <button 
          className="profile__add-button opacity" 
          type="button"
          onClick={onAddPlace}
        >
        </button>
      </section>

      <section className="elements content__elements">
        <ul className="card-list-section">
          {
            cards.map((card) => 
            <Card 
              key = {card._id}
              card = {card}
              onCardClick = {onCardClick}
            />)
          }
        </ul>
      </section>
    </main>
  )
}

export default Main;