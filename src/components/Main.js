import React, {useState, useEffect, useContext} from "react";
import api from "../utils/api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  const currentUser = useContext(CurrentUserContext);

  const [cards, setCards] = useState([]);

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
          src={currentUser.avatar} 
          alt="аватар." 
        />
        
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button 
            className="profile__edit-button opacity" 
            type="button"
            onClick={onEditProfile}
          >
          </button>
          <p className="profile__job">{currentUser.about}</p>
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
            cards.map((card) => (
              <Card 
              key = {card._id}
              card = {card}
              onCardClick = {onCardClick}
            />))
          }
        </ul>
      </section>
    </main>
  )
}

export default Main;