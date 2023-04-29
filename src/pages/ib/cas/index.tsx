import { NextPage } from "next";
import { useNavContext } from "../../../components/nav/Navbar";
import { useEffect } from "react";
import Link from "next/link";

const IBCASIndex: NextPage = () => {
  const { setNavTransparent } = useNavContext();

  useEffect(() => {
    setNavTransparent(false);
  }, [setNavTransparent]);

  return (
    <div className="p-12">
      <header className="flex justify-center items-center"></header>
      <main>
        <h1>Links</h1>
        <ol className="list-disc list-inside">
          <li>
            <Link href="/ib/cas/profile">IB CAS Profile</Link>
          </li>
          <li>
            <Link href="/ib/cas/experiences">IB CAS Experiences</Link>
          </li>
        </ol>
      </main>
    </div>
  );
};

export default IBCASIndex;
