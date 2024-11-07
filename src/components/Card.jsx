import React from "react";
import {successMessage} from '../styles/formStyle.module.css';


const Card = ({name, email, language}) => {
  return (
  <div className={successMessage}>
    Hola {name}, Te has suscrito al Newsletter, tus noticias tech sobre <strong>{language}</strong> llegarán a: {email}
  </div>
  );
};


export default Card;