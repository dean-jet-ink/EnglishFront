import type { NextApiRequest, NextApiResponse } from "next";

const getToken = (req: NextApiRequest, res: NextApiResponse) => {
  const token = req.cookies.token;

  res.status(200).json({ token });
};

export default getToken;
