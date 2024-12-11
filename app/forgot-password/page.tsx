import Navigation from "../../components/Navigation";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <Navigation />
      <div className="py-8">
        <h2 className="text-2xl text-center md:text-3xl pt-10">
          Forgot Password
        </h2>

        <form className="flex flex-row justify-center align-center pt-16">
          <div className="border rounded-xl text-left p-5 flex flex-col gap-5 mx-4 w-full sm:w-1/2 md:w-1/3">
            <div>
              <Label htmlFor="name">Email</Label>
              <Input
                id="email"
                defaultValue="jankohrasko@student.tuke.sk"
                className="border"
                disabled
              />
            </div>
            <div className="flex flex-row justify-center">
              <Button className="px-6" type="button" variant="default" asChild>
                <Link href="/login">Send</Link>
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Page;
