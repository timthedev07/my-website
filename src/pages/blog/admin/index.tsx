import { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";
import { useNavContext } from "../../../components/nav/Navbar";
import { BLOG_CATEGORIES } from "../../../types/blogCategories";
import { MarkdownMetadata } from "../../../types/posts";
import { getBlogsWithMetadata } from "../../../utils/blogsWithMeta";
import { getHeadForPage } from "../../../utils/getHead";
import { BlogGroups } from "../../../utils/groupBlogs";

interface Props {
  blogFileNamesWithMetadata: BlogGroups;
}

const BlogAdmin: NextPage<Props> = ({ blogFileNamesWithMetadata }) => {
  const { setNavTransparent } = useNavContext();

  useEffect(() => {
    setNavTransparent(false);
  }, [setNavTransparent]);

  return (
    <>
      {getHeadForPage({
        title: "Blog Admin",
        description: "Admin Dashboard for My Blog",
        path: "/blog/admin",
      })}
      <div className="p-4">
        {BLOG_CATEGORIES.map((category) => (
          <section key={category} className="p-3 my-6 flex flex-col gap-2">
            <h2 className="text-neutral-100 font-semibold capitalize">
              {category}
            </h2>
            <hr className="h-[2px] bg-white/60 border-none" />
            <ul>
              {blogFileNamesWithMetadata[category].map((each) => {
                const metadata = JSON.parse(each.metadata) as MarkdownMetadata;
                return (
                  <Link
                    href={`/blog/admin/${category}/${each.filename}`}
                    key={each.filename}
                    passHref
                  >
                    <li>{metadata.title}</li>
                  </Link>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </>
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
