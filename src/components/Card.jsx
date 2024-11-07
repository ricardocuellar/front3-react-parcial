import React from "react";

const Card = ({name, email}) => {
  return (
  <div>
    Hola, {name}

    Te has suscrito al Newsletter, tus noticias tech llegarán a: {email}
  </div>
  );
};


export default Card;