import React from 'react'

//Un componente donde se podra usar una caja, y que todo lo que se ponga en esa caja lo ejecutara en el div. Lo exportamos para poderlo usar en otras carpetas o archivos como page
export default function CajaChildren({ children }) {
    // Crea una caja con un borde negro y un padding
  return <div style={{ border: "1px solid black", padding: "10px" }}>{children}</div>;
}