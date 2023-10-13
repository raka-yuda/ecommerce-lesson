import { ListGroup } from "react-bootstrap";

interface Props {
  listCart: string[];
}

const CardCart = ({ listCart }: Props) => {
  // console.log(listCart);
  return (
    <ListGroup className={`my-5`}>
      {listCart &&
        listCart.map((product) => {
          return <ListGroup.Item>{product}</ListGroup.Item>;
        })}
    </ListGroup>
  );
};

export default CardCart;
