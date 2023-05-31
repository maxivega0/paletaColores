// import { useState } from 'react'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioColores from "./components/FormularioColores";
import './App.css'

function App() {

  return (
    <>
    <Container>
      <h1 className='display-4 text-center'>Guardar colores</h1>
      <FormularioColores></FormularioColores>
    </Container>
    </>
  )
}

export default App
