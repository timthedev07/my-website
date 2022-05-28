import { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import { useEffect } from "react";
import { useNavContext } from "../../components/nav/Navbar";
import Editor from "rich-markdown-editor";

const BlogAdmin: NextPage = () => {
  const { setNavTransparent } = useNavContext();

  useEffect(() => {
    setNavTransparent(false);
  }, [setNavTransparent]);

  return (
    <>
      <Editor defaultValue="Hello world!" />
    </>
  );
};

export const isAdminEmail = (email: string) => {
  return process.env.WHITELISTED_ADMIN_EMAILS.indexOf(email) > -1;
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session || !session.user?.email) {
    return {
      redirect: {
        destination: `/auth/signin?redirect=${encodeURIComponent(
          "/blog/admin"
        )}`,
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
    props: {},
  };
};

export default BlogAdmin;
