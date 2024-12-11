import Navigation from "../components/Navigation";

const Page = () => {
  return (
    <>
      <Navigation />
      <div className="flex flex-col space-y-5 items-center align-center justify-center w-full bg-slate-100 py-24">
        <h1 className="text-3xl md:text-5xl">Learn, Make, Pass</h1>
        <p className="text-center text-md md:text-lg">
          Master whatever you're learning with interactive <br /> flashcards and
          tests, all powered with AI.
        </p>
      </div>

      <div className="py-8">
        <h2 className="text-xl text-center md:text-3xl">Create</h2>
      </div>
    </>
  );
};

export default Page;
