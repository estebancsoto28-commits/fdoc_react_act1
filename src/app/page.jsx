"use client"
//Importamos los archivos de otras carpetas para poderlos hacer return en las funciones
import React from 'react'
import SaludoBasico from './Components/SaludoBasico'
import SaludoDesestructurado from './Components/SaludoDesestructurado'
import PerfilConObjeto from './Components/PerfilConObjeto'
import BotonConCallback from './Components/BotonConCallback'
import ContenedorRenderProp from './Components/ContenedorRenderProp'
import CajaChildren from './Components/CajaChildren'
import Saludo from './Components/SaludoConDefaultProps'


export default function page() {
  //Funcion que se le pone al evento onClick para que al presionar lance un mensaje personalizado
  const manejarClick = () => {
    alert('Haz dado click')
  }
  //Funcion que al ponersele al contenido enviara el mensaje adjunto 
const contenidoDinamico = <h1>Este es un componente dinamico</h1>;


  return (
    <div>
      <h1>-- Saludo Basico --</h1>
      <SaludoBasico nombre= 'Yeiner' entusiasta={true} />
      <h1>-- Saludo Desestructurado --</h1>
      <SaludoDesestructurado nombre='Brayan' edad={17}/>
      <h1>-- Perfil con Objeto --</h1>
      <PerfilConObjeto usuario={{nombre: 'Cardona', hobbies: [] }} />
      <h1>-- Boton con Callback --</h1>
      <BotonConCallback onClick={manejarClick} texto='Haz click Aqui'/>
      <h1>-- Contenedor RenderProp --</h1>
      <ContenedorRenderProp contenido={contenidoDinamico}/>
      <h1>-- Caja Children --</h1>
      <CajaChildren>
        <h1>Frutas buenas para la salud</h1>
        <ul>
          <li>Banano</li>
          <li>Manzana</li>
          <li>Pera</li>
        </ul>
      </CajaChildren>
      <h1>-- Saludo con DefaultProps --</h1>
      <Saludo />
    </div>
  )
}
