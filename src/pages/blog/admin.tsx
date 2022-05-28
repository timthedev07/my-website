import { GetServerSideProps, NextPage } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";

interface Props {
  session: Session & {
    user: NonNullable<Session["user"]>;
  };
}

const BlogAdmin: NextPage<Props> = ({ session }) => {
  const { user } = session;

  return <div>manage shit</div>;
};

export const isAdminEmail = (email: string) => {
  return process.env.WHITELISTED_ADMIN_EMAILS.indexOf(email) > -1;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
}) => {
  const session = await getSession({ req });

  if (!session || !session.user?.email) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  if (!isAdminEmail(session.user.email)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      session: session as Props["session"],
    },
  };
};

export default BlogAdmin;
