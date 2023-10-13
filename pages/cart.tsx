import CardCart from "../src/components/card-cart";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../src/redux/store";
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";

type Props = {
  cart: Product[];
  user: User | null;
  isLoggedIn: boolean;
};

type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

interface User {
  username: string;
  name: string;
}

const Cart = () => {
  const router = useRouter();
  const { user, isLoggedIn, cart }: Props = useSelector(
    (state: RootState) => state.user
  );

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn]);

  let listCart: string[] = [];

  cart.map((product) => {
    listCart = listCart.concat(product.title);
  });

  // console.log("cart: " + cart);
  // console.log("listcart: " + listCart);
  return (
    <Container>
      <CardCart listCart={listCart} />
    </Container>
  );
};

export default Cart;
