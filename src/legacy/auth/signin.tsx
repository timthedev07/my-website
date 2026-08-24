"use client";

import { NextPage } from "next";
import {
  ClientSafeProvider,
  signIn,
} from "next-auth/react";
import { OAuthButton } from "react-auth-provider-buttons";

interface Props {
  providers: Record<string, ClientSafeProvider> | null;
}

const SignIn: NextPage<Props> = ({ providers }) => {
  return (
    <div className="m-auto w-[90%] h-[456px] flex flex-col justify-start items-center pt-36 gap-8">
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

export default SignIn;
