import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: number;
  name: string;
  email: string;
};

export default function GET(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ id: 1, name: "John Doe", email: "john007@mail.com" });
}
