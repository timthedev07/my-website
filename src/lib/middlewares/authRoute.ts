import { NextApiHandler } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

export const withAuth = (handler: NextApiHandler): NextApiHandler => {
  return async (req, res) => {
    const session = await getServerSession(req, res, authOptions);

    if (!session?.user) {
      res.status(401).send("Please sign in to continue");
      return;
    }

    handler(req, res);
  };
};
