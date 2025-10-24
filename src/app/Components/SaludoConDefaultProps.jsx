import React from 'react'

//Un componente con un saludo basico, donde solo se dara el nombre si se escribe, en caso de que no, se tomara un valor por defecto que seria "Invitado". Lo exportamos para poderlo usar en otras carpetas o archivos como page
export default function Saludo({ nombre = "Invitado" }) {
  return <h1>Hola, {nombre}!</h1>;
}





