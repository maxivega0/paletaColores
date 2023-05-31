import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Card from 'react-bootstrap/Card';

const ItemColor = ({colores}) => {
    return (
      colores.map((color, indiceColor) => (
        <Card style={{ width: '18rem' }} color={color} key={indiceColor}>
          <Card.Body>
            <Card.Title>{color}</Card.Title>
            <Card.Img variant="top" src="holder.js/100px180" />
          </Card.Body>
          <Card.Footer>
            <Button variant="primary">Borrar</Button>
          </Card.Footer>
        </Card>
      ))
    );
    
};

export default ItemColor;