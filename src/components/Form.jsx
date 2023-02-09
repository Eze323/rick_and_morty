import React, { useState } from 'react';
import styled from 'styled-components';
import { validate } from './validation';

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



export default function Form () {
  const [userData,setUserData]=React.useState({
    username:'',password:''
  });

  const [errors, setErrors] = useState({
    username:'',
    password:''
  });

 const handleInputChange=(evento)=>{
    setErrors(
      validate({
         ...userData,
         [evento.target.name]: evento.target.value,
  
      })
   );
    setUserData({
      ...userData,
      [evento.target.name]: evento.target.value,
   
    })
    
  }

  function handleSubmit(event){
    event.preventDefault();
  let errorArray = Object.values(errors);
    if (errorArray.length === 0) {
      alert("Datos completos");
      setUserData();
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
        value={userData.username}
        onChange={handleInputChange}
        className={errors.username && 'warning'}
      />
            {!errors.username? null : <p className='danger'>{errors.username}</p>}
    <br/>
            <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        placeholder="Escribe tu password..."
        value={userData.password}
        onChange={handleInputChange}
        className={errors.password && 'warning'}
      />
      {!errors.password ? null : <p className='danger'>{errors.password}</p>}
    <br/>    
      <button type="submit">Login</button>
    </form>
  </LoginBox>
  )//termina el return
}


