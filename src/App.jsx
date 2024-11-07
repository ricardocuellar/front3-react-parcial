import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [formError, setFormError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const regexSpaces = /^\s+/;

  const onChangeName = (e) => setName(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);


  const onSubmitForm = (e) => {
    e.preventDefault();
   

    if(name.length < 3){
      setFormError(true);
      setErrorMessage('Por favor chequea que la información sea correcta. El nombre debe ser mayor o igual a 3 carácteres');
    }
    else if(regexSpaces.test(name)){
      setFormError(true);
      setErrorMessage('Por favor chequea que la información sea correcta. El nombre no puede contener espacios al inicio');
    }
    else if(email.length < 6){
      setFormError(true);
      setErrorMessage('Por favor chequea que la información sea correcta. El email debe ser mayor o igua  a 6 carácteres');
    }
    else{
      name.trimEnd();
      email.trim();
      setFormError(false);
      setErrorMessage('');
      setSuccess(true);
    }

  }


  return (
    <div className="App">
      <h1>Newsletter Tech by Ricardo Cuéllar</h1>
      <form onSubmit={onSubmitForm}>
        <input type="text" name="name" id="name" placeholder='Ingresa tu nombre' onChange={onChangeName} />
        <input type="email" name="email" id="email" placeholder='Correo' onChange={onChangeEmail} />
        <button type="submit">Enviar</button>
      </form>

      {formError ? <p>{errorMessage}</p> : ''}
      
      {success ? <Card name={name} email={email} /> : ''}
      
    </div>
  )
}

export default App
