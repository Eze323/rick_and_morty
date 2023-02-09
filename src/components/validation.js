// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(userData) {
  let errors={};

  if(userData.username.length===0){
    errors.username+='* no puede estar vacio'
 }
 if(userData.username.length>35){
    errors.username+='* maximo de caracteres: 35'
 }
 if (!regexEmail.test(userData.username)) {
    errors.username += '* Debe ser un correo electrónico';
 }
 
 if (!userData.password) {
    errors.password = 'Se requiere una clave';
 }
  return errors;
}