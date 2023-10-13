import FormLogin from "../src/components/form-login";
import { Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../src/redux/store";
import { NextPage } from "next";
type Props = {
  products: Product[];
  product: Product | null;
};

type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

const Login: NextPage = () => {
  const { products, product }: Props = useSelector(
    (state: RootState) => state.products
  );

  const dispatch = useDispatch();

  return (
    <Container>
      <FormLogin />
    </Container>
  );
};

export default Login;
