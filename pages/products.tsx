import { NextPage } from "next";
import CardProduct from "../src/components/card-product";
import { Container, Col, Row } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  fetchProducts,
  selectOneProduct,
} from "../src/redux/slices/product-slice";
import { RootState } from "../src/redux/store";
import Navbar from "../src/components/navbar";

type Props = {
  products: Product[];
  product: Product | null;
  cart: Product[];
};

type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

const Products: NextPage = () => {
  const { products, product, cart }: Props = useSelector(
    (state: RootState) => state.products
  );

  const dispatch = useDispatch();

  const handleClick = (product: Product) => {
    dispatch(selectOneProduct(product));
    dispatch(addProductToCart(product));
    // console.log(product);
    // console.log(cart);
  };

  const showProduct = (products: Product[]) => {
    const productsComponents: JSX.Element[] = [];

    products.map((product) => {
      productsComponents.push(
        <Col key={product.id} sm={12} md={3}>
          <CardProduct
            className={"w-100 p-3 my-3"}
            title={product.title}
            href={`/product/${product.id}`}
            imageProduct={product.image}
            description={product.description}
            onClick={() => handleClick(product)}
          />
        </Col>
      );
    });

    return productsComponents;
  };

  useEffect(() => {
    // dispatch(fetchProducts()).unwrap();
    products.length === 0 && dispatch(fetchProducts());
  }, [dispatch, products]);

  return (
    <>
      <Navbar />
      <Container>
        {/* <Row>{!products && showProduct(products)}</Row> */}
        {products.length !== 0 ? (
          <Row>{showProduct(products)}</Row>
        ) : (
          <h3>Sadly we haven't any product here</h3>
        )}
        {/* {!selectProducts && <p>Products is not available</p>} */}
      </Container>
    </>
  );
};

export default Products;
