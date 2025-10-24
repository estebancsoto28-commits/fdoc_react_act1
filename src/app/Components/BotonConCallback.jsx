import React from 'react'

//Este es un componente donde tendra un texto como "Nombre" o "Titulo" donde tendra un evento que al hacer click haga algo. Lo exportamos para poderlo usar en otras carpetas o archivos como page
export default function BotonConCallback({ onClick, texto}) {
  return (
    <div>
      <button onClick={onClick}>{texto}</button>
    </div>
  )
}
