import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Card from 'react-bootstrap/Card';

const ItemColor = () => {
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Nombre del color</Card.Title>
      <Card.Img variant="top" src="holder.js/100px180" />
        <Button variant="primary">Borrar</Button>
      </Card.Body>
    </Card>
    );
};

export default ItemColor;