import Navigation from "../components/Navigation";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  const cards = [
    {
      title: "Tests",
      description: "Master whatever",
      image: "/landing-1.jpg",
    },
    {
      title: "Flashcards",
      description: "Make studying easy",
      image: "/landing-2.jpg",
    },
    {
      title: "Classes",
      description: "Empower your students",
      image: "/landing-3.jpg",
    },
  ];

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
      <div className="flex flex-col justify-center items-center space-y-8 mb-20 text-center">
        <div className="flex flex-col lg:flex-row justify-center gap-6 text-center">
          {cards.map((card) => (
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle className="text-lg -my-2">{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  className="rounded-lg object-scale h-52"
                  src={card.image}
                />
              </CardContent>
              <CardFooter className="flex justify-center">
                {card.description}
              </CardFooter>
            </Card>
          ))}
        </div>
        <Button className="bg-violet-600 hover:bg-violet-500 w-fit" asChild>
          <Link href="/register">Create Account</Link>
        </Button>
      </div>
    </>
  );
};

export default Page;
