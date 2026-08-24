import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import SignIn from "../../../legacy/auth/signin";
import { authOptions } from "../../../lib/auth";

export default async function SignInPage() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/blog");
  return <SignIn providers={await getProviders()} />;
}
