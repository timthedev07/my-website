import { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import { useEffect } from "react";
import { useNavContext } from "../../components/nav/Navbar";
import { BLOG_CATEGORIES } from "../../types/blogCategories";
import { getBlogsWithMetadata } from "../../utils/blogsWithMeta";
import { BlogGroups } from "../../utils/groupBlogs";

interface Props {
  blogFileNamesWithMetadata: BlogGroups;
}

const BlogAdmin: NextPage<Props> = ({ blogFileNamesWithMetadata }) => {
  const { setNavTransparent } = useNavContext();

  useEffect(() => {
    setNavTransparent(false);
  }, [setNavTransparent]);

  return (
    <div>
      <h2>Blog Admin Dashboard</h2>
      {BLOG_CATEGORIES.map((category) => (
        <section key={category}>
          <h3>{category}</h3>
          <ul>
            {blogFileNamesWithMetadata[category].map((each) => (
              <li key={each.filename}>{each.filename}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
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

  const blogs = await getBlogsWithMetadata("github-rest");

  return {
    props: {
      blogFileNamesWithMetadata: blogs,
    },
  };
};

export default BlogAdmin;
