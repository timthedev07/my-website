import { NextApiHandler } from "next";
import { getSession } from "next-auth/react";

export const withAuth = (handler: NextApiHandler): NextApiHandler => {
  return async (req, res) => {
    const session = await getSession({ req });

    if (!session?.user) {
      res.status(401).send("Please sign in to continue");
      return;
    }

    handler(req, res);
  };
};
