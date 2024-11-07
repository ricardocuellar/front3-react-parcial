import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import {formStyle, inputStyle, errorMessageStyle} from './styles/formStyle.module.css';

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [language, setLanguage] = useState('');
  const [formError, setFormError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const regexSpaces = /^\s+/;

  const onChangeName = (e) => setName(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangeLanguage = (e) => setLanguage(e.target.value);

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
    else if(language.length < 3){
      setFormError(true);
      setErrorMessage('Por favor chequea que la información sea correcta. El lenguaje de programación debe ser mayor o igual a 3 carácteres');
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
      <form onSubmit={onSubmitForm} className={formStyle}>
        <input type="text" className={inputStyle} name="name" id="name" placeholder='Ingresa tu nombre' onChange={onChangeName} />
        <input type="email" className={inputStyle} name="email" id="email" placeholder='Correo' onChange={onChangeEmail} />
        <input type="text" className={inputStyle} name="language" id="language" placeholder='Ingresa tu lenguaje programación favorito' onChange={onChangeLanguage} />
        <button type="submit">Enviar</button>
      </form>

      {formError ? <p className={errorMessageStyle}>{errorMessage}</p> : ''}
      
      {success ? <Card name={name} email={email} language={language} /> : ''}
      
    </div>
  )
}

export default App
