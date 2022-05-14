import { NextPage, GetServerSideProps } from "next";
import { BuiltInProviderType } from "next-auth/providers";
import {
  ClientSafeProvider,
  getProviders,
  getSession,
  LiteralUnion,
  signIn,
} from "next-auth/react";
import { OAuthButton } from "react-auth-provider-buttons";

interface Props {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
}

const SignIn: NextPage<Props> = ({ providers }) => {
  return (
    <div className="w-screen h-[456px] flex flex-col justify-start items-center pt-36 gap-8">
      <h2>Sign In</h2>
      <div className="flex flex-col justify-center items-center min-w-[350px]">
        {providers &&
          Object.values(providers).map((each) => (
            <OAuthButton
              onClick={async () => {
                await signIn(each.id);
              }}
              provider={each.id as any}
              key={each.name}
            />
          ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const session = await getSession(ctx);
  const params = ctx.query;

  const callbackUrl = params?.callbackUrl || "/me";

  return {
    props: {
      providers: await getProviders(),
    },
    redirect:
      session && session.user
        ? {
            destination: callbackUrl,
            permanent: false,
          }
        : false,
  };
};

export default SignIn;
