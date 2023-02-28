import React, { useState } from 'react';
import styled from 'styled-components';
import { validate } from './validation';



const LoginBox=styled.div`
display: flex;
flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
 background-color:#32cd3299;
 font-family: 'rym';
  font-size: 20px;
      width: 30%;
      text-align: center;
      margin: 0 auto;
      margin-top: 15%;
      padding: 20px 50px;
      border-radius: 20px;
      -webkit-box-shadow: 5px 5px 15px 5px #000000; 
      box-shadow: 5px 5px 15px 5px #000000; 
      & .form{
        font-family: 'rym-regular';
        font-size: 12px;
      }
      & .form label{
        width: 100%;
      } 
     & .form input {
      text-align: center;
    font-family: 'rym-regular';
    font-size: 12px;
    width: 200px;
    border: 0; 
    border-bottom: 5px solid white; 
    background: #ffffff00; 
    color: white; 
    padding: 5px 10px;
    border: 2px solid;
    width: 100%;
    border-radius: 15px;
}

.good{
  text-align: center;
  font-family: 'rym-regular';
  border-radius: 12px;
}
.warning {
  text-align: center;
  font-family: 'rym-regular';
  font-size: 15px;
  border: solid red 1px;
  border-radius: 15px;
}

.danger {
  font-family: 'rym-regular';
  font-size: 10px;
  color: red;
}
`;
const BotonEstilo=styled.button`
    font-family: 'rym-regular';
    padding: 5px;
    background-color: #a7d529ad;
    border-radius: 10px;
    width: 120px;
`



export default function Form ({login}) {
  const [userData,setUserData]=useState({
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
          login(userData);
         // let errorArray = Object.values(errors);
         // console.log(errorArray);

         // if (errorArray.length === 0) {
            //alert("Datos completos");
           // setUserData();
            //setErrors(validate);
            
         // } 
    }
  

  return (<LoginBox>
    <h2>Inicio de Sesión</h2>
      <form onSubmit={handleSubmit}>

      <label htmlFor="email">Correo Electrónico:</label><br/>
      <input
        type="text"
        name="username"
        placeholder="Escriba su username..."
        value={userData.username}
        onChange={handleInputChange}
        className={errors.username? 'warning': 'good'}

      />
      <br/>
      
      {!errors.username? null : <p className='danger'>{errors.username}</p>}
      
      <label htmlFor="password">Password:</label><br/>
      <input
        type="password"
        name="password"
        placeholder="Escribe tu password..."
        value={userData.password}
        onChange={handleInputChange}
        className={errors.password?'warning':'good'}
      />
      <br/>
      {!errors.password ? null : <p className='danger'>{errors.password}</p>}
    
      <BotonEstilo >Login</BotonEstilo>
    </form>
  </LoginBox>
  )//termina el return
}


