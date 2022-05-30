import { NextApiHandler } from "next";
import { getSession } from "next-auth/react";
import { isAdminEmail } from "../../pages/blog/admin";

export const withAuth = (
  handler: NextApiHandler,
  admin = false
): NextApiHandler => {
  return async (req, res) => {
    const session = await getSession({ req });

    if (!session?.user) {
      res.status(401).send("Please sign in to continue");
      return;
    }

    if (admin && (!session.user.email || !isAdminEmail(session.user.email))) {
      res.status(401).send("You don't have permission to access this endpoint");
      return;
    }

    handler(req, res);
  };
};
