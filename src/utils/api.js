class Api {
  constructor(config) {
    this._url = config.baseUrl;
    this._headers = config.headers;
}

  _errorHandler(res) {
    if (res.ok) {
      return res.json()
    } 
    return Promise.reject(`Произошла ошибка: ${res.status}`)
  }

  getUser() {
    return fetch( this._url + 'users/me', {
      headers: this._headers,
    })
    .then(this._errorHandler);
  }

  setUser(data) {
    return fetch( this._url + 'users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
    .then(this._errorHandler)
  }

  getCards() {
    return fetch( this._url + 'cards', {
      headers: this._headers,
    })
    .then(this._errorHandler);
  }

  addNewCard(data) {
    return fetch( this._url + 'cards', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then(this._errorHandler);
  }

  deleteCard(id) {
    return fetch( this._url + 'cards/' + id, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._errorHandler);
  }

  changeLikeCardStatus(id, condition) {
    return fetch( this._url + 'cards/likes/' + id, {
      method: condition ? 'PUT' : 'DELETE',
      headers: this._headers
    })
    .then(this._errorHandler);
  }
 
  userAvatarUpdate(data) {
    return fetch( this._url + 'users/me/avatar', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
    .then(this._errorHandler)
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-33/',
  headers: {
    authorization: '04054c0a-e5f0-43e0-9b89-7862898c59bd',
    'Content-Type': 'application/json;charset=utf-8',
  }
})

export default api;