import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import ItemColor from "./ItemColor";


const FormularioColores = () => {
    // const coloresDelLocalStorage = JSON.parse(localStorage.getItem("listaColores") || []);

    const [color, setColor] = useState("");
    // Array de tareas
    const [colores, setColores] = useState([]);

    useEffect(()=>{
        // Cuando el comopoennte se ha montado, actualiza el local storage
        localStorage.setItem("listaColores", JSON.stringify(colores))
        // console.log("Aqui deberia guardar en local storage");
      },[colores])


    const handleSubmit = (e) => {
        e.preventDefault();
        setColores([...colores, color]);
        //* Limpiar el imput
        setColor("");
      };

    return (
        <>
       
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="color">
          <Form.Control
            type="text"
            placeholder="Ingrese un color, ej: 'Red'"
            onChange={(e) => setColor(e.target.value)}
            value={color}
          />
          <Button variant="primary" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ItemColor></ItemColor>
      </>
    );
};

export default FormularioColores;