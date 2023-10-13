// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  product: Product | null;
};

type Product = {
  id: number | null;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

const path = "products";
const url = process.env.PRODUCT_API_BASE_URL + path;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {
    query: { id },
    method,
    body,
  } = req;

  const responseProducts = await fetch(
    `https://fakestoreapi.com/products/${id}`,
    method !== "GET"
      ? {
          method,
          body: JSON.stringify(body),
        }
      : {}
  );

  switch (method) {
    case "GET":
      if (responseProducts.ok) {
        const product = (await responseProducts.json()) ?? [];
        const responseProducts2 = await fetch(
          `https://fakestoreapi.com/products`
        );
        res.status(200).json({ product });
      } else {
        res.status(200).json({ product: null });
      }
      break;
    case "POST":
      if (responseProducts.ok) {
        const product = (await responseProducts.json()) ?? [];
        res.status(200).json({ product });
      } else {
        res.status(200).json({ product: null });
      }
      break;
    case "PUT":
      if (responseProducts.ok) {
        const product = (await responseProducts.json()) ?? [];
        res.status(200).json({ product });
      } else {
        res.status(200).json({ product: null });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
