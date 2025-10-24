import React from 'react'

//Este componente es un saludo basico que tiene prop desestructurados, nos dara el saludo con nombre y nos dira nuestra edad. Lo exportamos para poderlo usar en otras carpetas o archivos como page
export default function SaludoDesestructurado({nombre, edad}) {
  return (<h1>Hola, {nombre}. Tienes {edad} años.</h1>)
}