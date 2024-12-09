'use client'

import { useRouter } from 'next/navigation';
import { CirclePlus, ChevronDown, Filter } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Cards from "@/components/ui/cards";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function Home() {
  const router = useRouter();

  const testsCardsHeader = (
    <div className="flex justify-between">
      <div className="flex gap-1 items-center">
        <p>Recent</p>
        <Dialog>
          <DialogTrigger>
            <CirclePlus size={20} />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                <div className="text-center">
                  <strong className="font-bold text-2xl">Create Your Class</strong>
                  <p className="font-thin my-3">Details of your class</p>
                </div>
              </DialogTitle>
              <DialogDescription className="border rounded-xl text-left p-3 flex flex-col gap-5">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    defaultValue="My First Class"
                    className="border"
                    disabled
                  />
                </div>
                <div>
                  <Label htmlFor="name">Subject</Label>
                  <Input
                    id="name"
                    defaultValue="IOT"
                    className="border"
                    disabled
                  />
                </div>
                <div>
                  <Label htmlFor="name">Class Time</Label>
                  <Input
                    id="name"
                    defaultValue="Pon 7:30"
                    className="border"
                    disabled
                  />
                </div>
                <div>
                  <Label htmlFor="name">Year</Label>
                  <Input
                    id="name"
                    defaultValue="2024/25"
                    className="border"
                    disabled
                  />
                </div>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex gap-2 w-full">
              <DialogClose asChild className="w-full">
                <Button type="button" variant="secondary" >
                  Cancel
                </Button>
              </DialogClose>
              <DialogClose asChild className="w-full">
                <Button type="button" variant="default" onClick={() => router.push('/classes/newClassExample')}>
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
        <p>Recent</p>
        <Dialog>
          <DialogTrigger>
            <CirclePlus size={20} />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                <div className="text-center">
                  <strong className="font-bold text-2xl">Create Your Class</strong>
                  <p className="font-thin my-3">Details of your class</p>
                </div>
              </DialogTitle>
              <DialogDescription className="border rounded-xl text-left p-3 flex flex-col gap-5">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    defaultValue="My First Class"
                    className="border"
                    disabled
                  />
                </div>
                <div>
                  <Label htmlFor="name">Subject</Label>
                  <Input
                    id="name"
                    defaultValue="IOT"
                    className="border"
                    disabled
                  />
                </div>
                <div>
                  <Label htmlFor="name">Class Time</Label>
                  <Input
                    id="name"
                    defaultValue="Pon 7:30"
                    className="border"
                    disabled
                  />
                </div>
                <div>
                  <Label htmlFor="name">Year</Label>
                  <Input
                    id="name"
                    defaultValue="2024/25"
                    className="border"
                    disabled
                  />
                </div>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex gap-2 w-full">
              <DialogClose asChild className="w-full">
                <Button type="button" variant="secondary" >
                  Cancel
                </Button>
              </DialogClose>
              <DialogClose asChild className="w-full">
                <Button type="button" variant="default" onClick={() => router.push('/classes/newClassExample')}>
                  Ok
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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

  const classesCardsHeader = (
    <div className="flex justify-between">
      <div className="flex gap-1 items-center">
        <p>Recent</p>
        <Dialog>
          <DialogTrigger>
            <CirclePlus size={20} />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                <div className="text-center">
                  <strong className="font-bold text-2xl">Create Your Class</strong>
                  <p className="font-thin my-3">Details of your class</p>
                </div>
              </DialogTitle>
              <DialogDescription className="border rounded-xl text-left p-3 flex flex-col gap-5">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    defaultValue="My First Class"
                    className="border"
                    disabled
                  />
                </div>
                <div>
                  <Label htmlFor="name">Subject</Label>
                  <Input
                    id="name"
                    defaultValue="IOT"
                    className="border"
                    disabled
                  />
                </div>
                <div>
                  <Label htmlFor="name">Class Time</Label>
                  <Input
                    id="name"
                    defaultValue="Pon 7:30"
                    className="border"
                    disabled
                  />
                </div>
                <div>
                  <Label htmlFor="name">Year</Label>
                  <Input
                    id="name"
                    defaultValue="2024/25"
                    className="border"
                    disabled
                  />
                </div>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex gap-2 w-full">
              <DialogClose asChild className="w-full">
                <Button type="button" variant="secondary" >
                  Cancel
                </Button>
              </DialogClose>
              <DialogClose asChild className="w-full">
                <Button type="button" variant="default" onClick={() => router.push('/classes/newClassExample')}>
                  Ok
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );

  const classesCards = [
    {
      id: 1,
      title: `IOT`,
      image: `/class_cover.jpg`,
      description1: `Ing. Miroslav Biňas, PhD.`,
      description2: `Pon 7:30`,
    },
    {
      id: 2,
      title: `OOP`,
      image: `/class_cover.jpg`,
      description1: `Ing. Filip Gurbáľ, PhD.`,
      description2: `Pon 10:50`,
    },
    {
      id: 3,
      title: `MAT 2`,
      image: `/class_cover.jpg`,
      description1: `RNDr. Juraj Valiska, PhD.`,
      description2: `Str 9:10`,
    }
  ];

  return (
    <div>
      <Cards
        title="Tests"
        cardsHeader={testsCardsHeader}
        cards={testsCards}
        navigateTo=""
        pagination={false}
      />

      <Cards
        title="FlashCards"
        cardsHeader={flashCardssHeader}
        cards={flashCardsCards}
        navigateTo=""
        pagination={false}
      />

      <Cards
        title="Classes"
        cardsHeader={classesCardsHeader}
        cards={classesCards}
        navigateTo="/classes/classExample"
        pagination={false}
      />
    </div>
  );
}
