import React from 'react'

//Se crea un componente con un saludo basico con el nombre del usuario y si es entusiasta, lo saludara con un mensaje hablando sobre el clima y en el caso contrario, solo saludarlo con su nombre.Lo exportamos para poderlo usar en otras carpetas o archivos como page
export default function SaludoBasico(props) {
  //Condicional para decidir texto del saludo de acuerdo a la prop entusiasta
  const saludo = props.entusiasta ? `Hola, ${props.nombre}. Que buen clima hace hoy!` : `Hola, ${props.nombre}` 
  return (
    <div>{saludo}</div>
  )
}