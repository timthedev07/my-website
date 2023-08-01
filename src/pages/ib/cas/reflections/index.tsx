import { GetStaticProps, NextPage } from "next";
import { getAllMonths } from "../../../../lib/ib-cas/reflections-mdx";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface Props {
  latest: string;
}

const Nothing: NextPage<Props> = ({ latest }) => {
  const router = useRouter();

  useEffect(() => {
    router.push(`/ib/cas/experiences/${latest}`);
  }, []);

  return <></>;
};

export default Nothing;

export const getStaticProps: GetStaticProps = async () => {
  const latest = getAllMonths()[0];
  return {
    props: {
      latest,
    },
  };
};
