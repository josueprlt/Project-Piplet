import React from 'react';
import axios from 'axios';

function getCookie(name) {
  const cookies = document.cookie.split('; ');
  const value = cookies
      .find(c => c.startsWith(name))
      ?.split('=')[1];
  if (value === undefined) {
    return null;
  }
  return decodeURIComponent(value);
}


function setCookie(name, value, days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${date.toUTCString()};`;
}

function App() {
  
  function handlerData() {
    let user = {
      "userMail": "josue.perrault@gmail.com",
      "userPassword": "test56",
      "userDomaine": "Lecteur",
      "userName": "Josué",
      "userPseudonyme": "JPZ_games",
      "userDateOfBirth": "2004-01-24T23:00:00.000Z",
      "userGenre": "homme",
      "userFrench": 3.5,
      "interests": [true, false, false, false],
      "PersoVisible": [true, false],
      "ContentVisible": "public",
      "ProfilVisible": "Pseudonyme"
    }

    // Envoyer les données à Symfony
    axios.post('http://localhost:8000/api/register', user)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error(error);
    });
  }

  return (
    <div>
      <p>Hello World !</p>
      <button onClick={handlerData}>Envoyer les données</button>
    </div>
  )
}

export default App;
