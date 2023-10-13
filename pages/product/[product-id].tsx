import CardProductDetail from "../../src/components/card-product-detail";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../src/redux/store";
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

const ProductDetail: NextPage = () => {
  const { products, product }: Props = useSelector(
    (state: RootState) => state.products
  );

  // const dispatch = useDispatch();
  // console.log(product);

  return (
    <Container>
      <CardProductDetail
        title={product?.title ?? "None"}
        imageProduct={product?.image ?? ""}
        description={product?.description ?? ""}
      />
    </Container>
  );
};

// export async function getServerSideProps() {
//   const res = await fetch(`https://fakestoreapi.com/products/1`);
//   // if (!products) {
//   //   return {
//   //     notFound: true,
//   //   };
//   // }
//   const product = res.ok ? await res.json() : {};
//   // console.log(product);
//   return {
//     props: { product }, // will be passed to the page component as props
//   };
// }

export default ProductDetail;
