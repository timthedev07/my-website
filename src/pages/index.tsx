import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <header className="h-screen">
        <div className="flex w-full justify-center items-center">
          <div className="justify-evenly flex mt-20 items-center border border-slate-400/40 rounded-xl bg-slate-700/10 flex-col sm:flex-row sm:w-[95%] sm:px-5 sm:py-6 md:py-10 md:px-0 md:gap-4 md:w-10/12">
            <div className="max-w-sm">
              <h3 className="">Reach me at</h3>
              <section className="flex justify-around items-center">
                <div className="bg-blue-200 w-52 flex justify-center items-center h-12 rounded-xl">
                  HI
                </div>
                <div className="bg-blue-200 w-52 flex justify-center items-center h-12 rounded-xl">
                  HI
                </div>
                <div className="bg-blue-200 w-52 flex justify-center items-center h-12 rounded-xl">
                  HI
                </div>
              </section>
            </div>
            <div className="bg-teal-200 w-52 flex justify-center items-center h-36 rounded-xl">
              Bye
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
