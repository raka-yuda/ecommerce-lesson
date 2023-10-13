// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const path = "products";
const url = process.env.PRODUCT_API_BASE_URL + path;

type Data = {
  products: Product[];
};

type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method, body } = req;
  const responseProducts = await fetch(
    url,
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
        const products = (await responseProducts.json()) ?? [];
        res.status(200).json({ products });
      } else {
        res.status(200).json({ products: [] });
      }
      break;
    case "POST":
      if (responseProducts.ok) {
        const products = (await responseProducts.json()) ?? [];
        res.status(200).json({ products });
      } else {
        res.status(200).json({ products: [] });
      }
      break;
    case "PUT":
      if (responseProducts.ok) {
        const products = (await responseProducts.json()) ?? [];
        res.status(200).json({ products });
      } else {
        res.status(200).json({ products: [] });
      }
      break;
    // case "DELETE":
    //   if (responseProducts.ok) {
    //     const products = (await responseProducts.json()) ?? [];
    //     res.status(200).json({ products });
    //   } else {
    //     res.status(200).json({ products: [] });
    //   }
    //   break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
