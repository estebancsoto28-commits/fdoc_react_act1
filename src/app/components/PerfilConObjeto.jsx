import React from 'react'

//Un componente que mostrara el nombre de la persona y sus hobbies, para lograrlo se usa un prop desestructurado y arreglos. Lo exportamos para poderlo usar en otras carpetas o archivos como page
export default function PerfilConObjeto({ usuario }) {
    //condicional donde si la persona escribe mas de una letra, lo contara como hobbie y se dara en la ejecucion, en el caso contrario, lo tomara como que no tiene hobbies
    const hobbies = usuario.hobbies.length > 0 ? usuario.hobbies.join(", ") : "Sin hobbies"
  return (
    <div>
      <h2>Nombre: {usuario.nombre}</h2>
      <p>Hobbies: {hobbies}</p>
    </div>
  )
}