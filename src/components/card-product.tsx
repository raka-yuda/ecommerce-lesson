import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import classes from "./card-product.module.css";
import Link from "next/link";
import { MouseEventHandler } from "react";

interface Props {
  className: string;
  title: string;
  href: string;
  imageProduct: string;
  description: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const CardProduct = ({
  className,
  title,
  href,
  imageProduct,
  description,
  onClick,
}: Props) => {
  return (
    <Card
      className={`${classes["card-product"]} ${className}`}
      style={{ width: "18rem" }}
      onClick={onClick}
    >
      <Card.Img
        className={`${classes["img-product"]}`}
        variant="top"
        src={imageProduct}
      />
      <Card.Body>
        <Card.Title className={`${classes["text-title"]}`}>{title}</Card.Title>
        <Card.Text className={`${classes["text-description"]}`}>
          {description}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">
          <Link href={href}>Detail Product</Link>
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default CardProduct;
