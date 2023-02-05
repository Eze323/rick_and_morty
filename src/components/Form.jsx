import React, { useState } from 'react';
import styled from 'styled-components';

const LoginBox=styled.div`
      background-color: limegreen;
      width: 30%;
      text-align: center;
      margin: 0 auto;
      margin-top: 15%;
      padding: 20px 50px;
      border-radius: 20px;
     
     & .form input {
    width: 200px;
    border: 0; 
    border-bottom: 5px solid white; 
    font-size: 18px; 
    background: #ffffff00; 
    color: white; 
    padding: 5px 10px;
}

`;



// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs) {
  let errors={};

 if (!regexEmail.test(inputs.email)) {
    errors.email = 'Debe ser un correo electrónico';
 }
 if (!inputs.password) {
    errors.password = 'Se requiere un nombre';
 }

  return errors;
}

export default function Form () {
  const [inputs, setInputs] = useState({
    email:'',
    password:''
    
  });

  const [errors, setErrors] = useState({
    email:'',
    password:''
  });

 const handleChange=(evento)=>{
    setErrors(
      validate({
         ...inputs,
         [evento.target.name]: evento.target.value,
  
      })
   );
    setInputs({
      ...inputs,
      [evento.target.name]: evento.target.value,
   
    })
    
  }

  function handleSubmit(event){
    event.preventDefault();
  let errorArray = Object.values(errors);
    if (errorArray.length === 0) {
      alert("Datos completos");
      setInputs();
      setErrors(validate);
    } else {
        alert("Debe llenar todos los campos");
      }
    }
  

  return (<LoginBox>
    <h2>Inicio de Sesión</h2>
      <form onSubmit={handleSubmit}>

      <label htmlFor="email">Correo Electrónico:</label>
      <input
        type="text"
        name="email"
        placeholder="Escribe tu email..."
        value={inputs.email}
        onChange={handleChange}
        className={errors.email && 'warning'}
      />
            {!errors.email? null : <p className='danger'>{errors.email}</p>}
    <br/>
            <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        placeholder="Escribe tu password..."
        value={inputs.password}
        onChange={handleChange}
        className={errors.password && 'warning'}
      />
      {!errors.password ? null : <p className='danger'>{errors.password}</p>}
    <br/>    
      <button type="submit">Login</button>
    </form>
  </LoginBox>
  )//termina el return
}

