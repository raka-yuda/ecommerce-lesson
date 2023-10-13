import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";

const CardProfile = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Profile</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">
          <Link href={"#"}>Card Link</Link>
        </Card.Link>
        <Card.Link href="#">
          <Link href={"#"}>Another Card Link</Link>
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default CardProfile;
