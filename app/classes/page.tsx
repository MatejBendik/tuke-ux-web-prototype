'use client'

import { useRouter } from 'next/navigation';
import { CirclePlus, ChevronDown, Filter } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Cards from "@/components/ui/cards";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const Classes = () => {
  const router = useRouter();

  const cards = [
    {
      id: 1,
      title: `IOT`,
      image: `/class_cover.jpg`,
      description1: `Pon 7:30`,
      description2: `21 Members`,
    },
    {
      id: 2,
      title: `IOT`,
      image: `/class_cover.jpg`,
      description1: `Pon 9:10`,
      description2: `20 Members`,
    },
    {
      id: 3,
      title: `IOT`,
      image: `/class_cover.jpg`,
      description1: `Pon 10:50`,
      description2: `22 Members`,
    },
    {
      id: 4,
      title: `IOT`,
      image: `/class_cover.jpg`,
      description1: `Ut 7:30`,
      description2: `8 Members`,
    },
    {
      id: 5,
      title: `ZAP`,
      image: `/class_cover.jpg`,
      description1: `Ut 9:10`,
      description2: `18 Members`,
    },
    {
      id: 6,
      title: `PVJC`,
      image: `/class_cover.jpg`,
      description1: `Pia 9:10`,
      description2: `18 Members`,
    },
    {
      id: 7,
      title: `PVJC`,
      image: `/class_cover.jpg`,
      description1: `Ut 10:50`,
      description2: `24 Members`,
    },
  ];

  const cardsHeader = (
    <div className="flex justify-between">
      <div className="flex gap-1 items-center">
        <p>Create</p>
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
                <Button type="button" variant="default" onClick={() => router.push('/classes/new-class-example')}>
                  Ok
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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
  );

  return (
    <Cards
      title="Your Classes"
      cardsHeader={cardsHeader}
      cards={cards}
      navigateTo="/classes/class-example"
      pagination
    />
  )
}

export default Classes