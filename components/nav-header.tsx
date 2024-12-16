"use client";

import { useState } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Breadcrumb, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Moon, Plus, FilePlus, Users } from "lucide-react";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const NavHeader = () => {
  const [withAIButton, setWithAIButton] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className="flex justify-between h-16 shrink-0 items-center gap-2 border-b px-4">
      <div className="flex gap-2 items-center">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbLink href="#">
            {pathname === "/"
              ? "Home"
              : pathname.charAt(1).toUpperCase() + pathname.slice(2)}
          </BreadcrumbLink>
        </Breadcrumb>
      </div>

      <div className="flex items-center space-x-3">
        <Button variant="outline" size="icon">
          <Moon />
        </Button>

        <Popover>
          <PopoverTrigger asChild>
            <Button className="bg-violet-600 hover:bg-violet-500">
              <Plus />
              Create
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full">
            <div className="flex flex-col space-y-2">
              {/* Create test button with dialog */}
              <Dialog>
                <DialogTrigger>
                  <Button variant="ghost">
                    <FilePlus size={18} />
                    Test
                  </Button>
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

              {/* Create class button with dialog */}
              <Dialog>
                <DialogTrigger>
                  <Button variant="ghost">
                    <Users size={18} />
                    Class
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      <div className="text-center">
                        <strong className="font-bold text-2xl">
                          Create Your Class
                        </strong>
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
                      <Button type="button" variant="secondary">
                        Cancel
                      </Button>
                    </DialogClose>
                    <DialogClose asChild className="w-full">
                      <Button
                        type="button"
                        variant="default"
                        onClick={() => router.push("/classes/new-class-example")}
                      >
                        Ok
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Button variant="ghost">
                <FilePlus size={18} />
                Flashcard Set
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        <Avatar>
          <AvatarImage
            src="teacher_profile_picture.jpg"
            alt="Teacher profile picture"
          />
          <AvatarFallback>MBi</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default NavHeader;
