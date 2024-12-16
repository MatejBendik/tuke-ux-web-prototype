'use client'

import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Share2, Copy, EllipsisVertical, ChevronDown, Trash2, FilePenLine, CircleAlert, SquareMinus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NewClassExample = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="bg-stone-200 rounded-lg flex justify-between p-4">
        <div>
          <h1 className="text-2xl">IOT</h1>
          <strong>My First Class</strong>
          <p>Pon 7:30</p>
          <div className="flex gap-2">
            <p>lrnwithai.com/class/1...</p>
            <Share2 size={20} className="hover:cursor-pointer hover:scale-125 duration-300" />
            <Copy size={20} className="hover:cursor-pointer hover:scale-125 duration-300" />
          </div>
        </div>

        <div className="flex flex-col justify-center text-right">
          <Popover>
            <PopoverTrigger asChild>
              <EllipsisVertical className="me-0 ms-auto cursor-pointer hover:scale-125 duration-300" />
            </PopoverTrigger>
            <PopoverContent className="w-full">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Trash2 size={18} className="hover:cursor-pointer hover:scale-125 duration-300" />
                  <p className="text-sm">Delete</p>
                </div>
                <div className="flex items-center gap-2">
                  <FilePenLine size={18} className="hover:cursor-pointer hover:scale-125 duration-300" />
                  <p className="text-sm">Edit</p>
                </div>
                <div className="flex items-center gap-2">
                  <CircleAlert size={18} className="hover:cursor-pointer hover:scale-125 duration-300" />
                  <p className="text-sm">Report</p>
                </div>
                <div className="flex items-center gap-2">
                  <SquareMinus size={18} className="hover:cursor-pointer hover:scale-125 duration-300" />
                  <p className="text-sm">Remove all members</p>
                </div>
                <div className="flex items-center gap-2">
                  <SquareMinus size={18} className="hover:cursor-pointer hover:scale-125 duration-300" />
                  <p className="text-sm">Remove all content</p>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <strong>Ing. Miroslav Biňas, PhD.</strong>
          <p>2024 / 2025</p>
          <p>1 Member</p>
        </div>
      </div>

      <div>
        <div className="flex gap-3 text-xl">
          <p
            className={`${activeTab === 'dashboard' ? 'underline' : ''} cursor-pointer underline-offset-4 decoration-violet-600`}
            onClick={() => setActiveTab('dashboard')}>Dashboard</p>
          <p
            className={`${activeTab === 'members' ? 'underline' : ''} cursor-pointer underline-offset-4 decoration-violet-600`}
            onClick={() => setActiveTab('members')}>Members</p>
        </div>
        <Separator />
      </div>

      {activeTab === 'dashboard' &&
        <div className="bg-stone-200 rounded-lg p-4">
          <div className="w-full flex gap-5 justify-between">
            <Dialog>
              <DialogTrigger>
                <Button className="bg-violet-600"><Plus /> Add Post</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    <div className="text-center">
                      <strong className="font-bold text-2xl">Create Post</strong>
                    </div>
                  </DialogTitle>
                  <DialogDescription className="border rounded-xl text-left p-3 max-h-[530px] overflow-y-auto">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        defaultValue="T - System tech day"
                        className="border"
                        disabled
                      />
                    </div>
                    <div className="mt-4">
                      <Label htmlFor="name">Content</Label>
                      <div className="border rounded-xl p-4">
                        <p >
                          <strong>  Tech Day - Future Trends 2024 </strong> už <strong> 7. novembra </strong>v Aule Maxima Technická univerzita v košiciach!  Príď si vypočuť prednášky od top IT expertov ako Andreas Truls, Juraj Gazda, Michal Kováčik, Lýdia Delyová, Róbert Slezák, Teo Köerner, Marco Spoel, Filip Hudzík a Martin Džbor, ktorí ti ukážu budúcnosť technológií.
                          <br />
                          <br />
                          Okrem toho ťa čaká <strong> MARKETPLACE </strong> plný technologických noviniek, kde si môžeš vyskúšať napríklad Apple Vision Pro. Chýbať nebude ani gaming zóna, súťaže a množstvo zábavy. Miesta sa rýchlo míňajú, tak sa registruj <strong> hneď. </strong>
                        </p>
                        <Image
                          src="/tech_day.jpg"
                          width={600}
                          height={700}
                          alt="Tech day"
                          className="mx-auto"
                        />
                        <br />
                        <p>PS: <strong> Free </strong> jedlo pre každého !!!  Takže žiadny strach, dostatok energie pre celú noc. Všetkým prajeme vopred veľa štastia. </p>
                      </div>
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
                    <Button type="button" variant="default" onClick={() => router.push('/classes/class-example')}>
                      Ok
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>


            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-2/3 flex justify-between">
                  General information
                  <ChevronDown size={20} />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="md:w-[800px]">
                <div>
                  <Label htmlFor="info">Important !</Label>
                  <Input
                    id="info"
                    defaultValue="Final test is set to date: 12.2.2025"
                    className="border border-red-600"
                    disabled
                  />
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <div className="mt-4 bg-white rounded-lg p-3 h-20">
          </div>
        </div>
      }

      {activeTab === 'members' &&
        <div className="bg-stone-200 rounded-lg p-4">
          <div className="w-full flex gap-5 justify-between">
            <Dialog>
              <DialogTrigger>
                <Button className="bg-violet-600"><Plus />Add Member</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    <div className="text-center">
                      <strong className="font-bold text-2xl">Add Member</strong>
                    </div>
                  </DialogTitle>
                  <DialogDescription className="border rounded-xl text-left p-3 max-h-[530px] overflow-y-auto">
                    <div>
                      <Label htmlFor="name">E - mail</Label>
                      <Input
                        id="name"
                        defaultValue="miroslav.hanisko@student.tuke.sk"
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
                    <Button type="button" variant="default">
                      Ok
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-2/3 flex justify-between">
                  General information
                  <ChevronDown size={20} />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="md:w-[800px]">
                <div>
                  <Label htmlFor="info">Important !</Label>
                  <Input
                    id="info"
                    defaultValue="Final test is set to date: 12.2.2025"
                    className="border border-red-600"
                    disabled
                  />
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <div className="mt-4 bg-white rounded-lg p-3 flex flex-col gap-2">
            <div className="flex justify-between items-center border rounded-lg p-2">
              <div className="flex gap-2">
                <Avatar className=" w-10 h-10">
                  <AvatarImage src="/teacher_profile_picture.jpg" alt="Teacher profile picture" />
                  <AvatarFallback>MBi</AvatarFallback>
                </Avatar>

                <div>
                  <strong>Teacher | Owner</strong>
                  <p className="text-sm">Ing. Miroslav Biňas PhD.</p>
                </div>
              </div>
            </div>
          </div >
        </div >
      }
    </div >
  )
}

export default NewClassExample