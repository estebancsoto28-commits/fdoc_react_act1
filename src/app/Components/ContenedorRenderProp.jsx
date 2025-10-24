import React from 'react'

 // El componente tiene una prop llamada contenido. esa prop puede ser cualquier elemento de React ya sea texto o otro componente que podremos llamar despues al momento de ejecutar. Lo exportamos para poderlo usar en otras carpetas o archivos como page
export default function ContenedorRenderProp({ contenido }) {
  return (
    <div>
      {contenido}
    </div>
  )
}
