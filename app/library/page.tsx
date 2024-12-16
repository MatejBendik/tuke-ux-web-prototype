'use client'

import { useRouter } from 'next/navigation';
import { CirclePlus, ChevronDown, Filter } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Cards from "@/components/ui/cards";
import { useState } from 'react';
import { Separator } from "@/components/ui/separator";

export default function Library() {

  const router = useRouter();
  const [withAIButton, setWithAIButton] = useState(false);

  const testsCardsHeader = (
    <div className="flex justify-between">
      <div className="flex gap-1 items-center">
        <p>Create</p>
        <Dialog>
          <DialogTrigger>
            <CirclePlus size={20} className="hover:cursor-pointer hover:scale-110 duration-300" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                <div className="text-center">
                  <strong className="font-bold text-2xl">
                    Create Test
                  </strong>
                </div>
              </DialogTitle>
              <DialogDescription className="flex flex-row gap-5 py-5">
                <div
                  className={`border rounded-md flex justify-center items-center align-center w-1/2 hover:cursor-pointer ${withAIButton ? "bg-slate-200" : "bg-white"
                    }`}
                >
                  <button
                    className="text-4xl py-24 w-full h-full"
                    onClick={() => {
                      setWithAIButton(!withAIButton);
                      console.log(withAIButton);
                    }}
                  >
                    With AI
                  </button>
                </div>
                <div className="border rounded-md flex justify-center items-center align-center w-1/2 hover:cursor-not-allowed">
                  <span className="text-4xl py-24">Manually</span>
                </div>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex gap-2 w-full">
              <DialogClose asChild className="w-full">
                <Button type="button" variant="secondary">
                  Cancel
                </Button>
              </DialogClose>
              <DialogClose asChild className="w-full">
                <Button
                  type="button"
                  variant="default"
                  onClick={() => router.push("/test/create")}
                >
                  Ok
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

      </div>
    </div>
  );

  const testsCards = [
    {
      id: 1,
      title: `Základy UI UX`,
      image: `/class_cover.jpg`,
      description1: `Matej Bendík`,
      description2: `10 questions`,
    },
    {
      id: 2,
      title: `Stavové automaty`,
      image: `/class_cover.jpg`,
      description1: `Miroslav Hanisko`,
      description2: `89 questions`,
    },
    {
      id: 3,
      title: `1. Zápočet ZSI`,
      image: `/class_cover.jpg`,
      description1: `Ing. Sergej Chodarev, PhD.`,
      description2: `24 questions • 30 min`,
    }
  ];

  const flashCardssHeader = (
    <div className="flex justify-between">
      <div className="flex gap-1 items-center">
        <p>Create</p>
        <CirclePlus size={20} className="hover:cursor-pointer hover:scale-110 duration-300" />
      </div>
    </div>
  );

  const flashCardsCards = [
    {
      id: 1,
      title: `Príprava na PRG`,
      image: `/class_cover.jpg`,
      description1: `Miroslav Hanisko`,
      description2: `40 terms`,
    },
    {
      id: 2,
      title: `Dôležite pojmy ZSI`,
      image: `/class_cover.jpg`,
      description1: `Ing. Sergej Chodarev, PhD.`,
      description2: `29 terms`,
    },
    {
      id: 3,
      title: `Dynamika Fyzika 1`,
      image: `/class_cover.jpg`,
      description1: `Matej Bendík`,
      description2: `137 terms`,
    }
  ];


  return (
    <div>
      <div className='p-4'>
        <h1 className='text-xl font-bold mb-8'> Your Library</h1>
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            <p>Recent</p>
          </div>

          <div className="flex gap-2 items-center">
            <div className="flex gap-1 items-center border rounded-md p-1">
              <p>Recent</p>
              <ChevronDown size={20} />
            </div>
            <div className="border rounded-md p-1">
              <Filter size={25} />
            </div>
          </div>
        </div>

        <Separator className="mt-2" />
      </div>

      <Cards
        title="Tests"
        cardsHeader={testsCardsHeader}
        cards={testsCards}
        navigateTo="/test/example-test"
        pagination={false}
      />

      <Cards
        title="FlashCards"
        cardsHeader={flashCardssHeader}
        cards={flashCardsCards}
        navigateTo=""
        pagination={false}
      />
    </div >
  );
}
