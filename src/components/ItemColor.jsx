import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Card from 'react-bootstrap/Card';

const ItemColor = ({colores, borrarColor }) => {
    return (    
    <>
      {colores.map((color) => {
        return (
          <Card className="mx-2 my-2 col-12 col-md-3" style={{ width: "18rem" }} key={color}>
            <Card.Body style={{ background: color, height: "10rem" }}></Card.Body>
            <Card.Body className="d-flex justify-content-between">
              <Card.Title>{color}</Card.Title>
              <Button variant="danger" onClick={() => borrarColor(color)}>Borrar</Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
      
    );
    
};

export default ItemColor;