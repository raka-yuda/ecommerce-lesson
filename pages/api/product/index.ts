import { NextApiRequest, NextApiResponse } from "next";
import products from "../products";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = "http://localhost:3000/api/products";
  const responseProducts = await fetch(url);
  const jsonProducts = await responseProducts.json();
  res.status(200).json(jsonProducts);
}
