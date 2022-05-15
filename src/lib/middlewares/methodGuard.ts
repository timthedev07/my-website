import { NextApiHandler } from "next";

export type HTTPMethodType =
  | "PUT"
  | "DELETE"
  | "POST"
  | "GET"
  | "HEAD"
  | "CONNECT"
  | "TRADE"
  | "PATCH"
  | "OPTIONS";

export const withMethodGuard = (
  handler: NextApiHandler,
  method: HTTPMethodType
): NextApiHandler => {
  return async (req, res) => {
    if (!req.method || req.method.toUpperCase() !== method) {
      res.status(405).end();
      return;
    }

    handler(req, res);
  };
};
