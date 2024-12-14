"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import Link from "next/link";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Page() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  console.log(step);

  return (
    <div className="py-14">
      <div className="w-full flex flex-row justify-center mb-12">
        <h1 className="text-2xl">Create test with AI</h1>
      </div>
      {step === 1 ? (
        <div className="mx-4">
          <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
            <FileUpload onChange={handleFileUpload} />
          </div>
          <div className="w-full flex flex-row justify-center mt-8">
            {files.length > 0 && (
              <Button onClick={() => setStep(2)}>Continue</Button>
            )}
          </div>
        </div>
      ) : step === 2 ? (
        <form className="flex flex-row justify-center align-center">
          <div className="border rounded-xl text-left p-5 flex flex-col gap-5 mx-4 w-full sm:w-1/2 md:w-1/3">
            <div>
              <Label htmlFor="firstname">Test Name</Label>
              <Input
                id="testname"
                defaultValue="Základy UI UX"
                className="border"
              />
            </div>
            <div>
              <Label htmlFor="category">Category</Label>
              <Input id="category" defaultValue="UI-UX" className="border" />
            </div>
            <div className="flex flex-row justify-center">
              <Button
                onClick={() => setStep(3)}
                className="px-6"
                type="button"
                variant="default"
              >
                Generate
              </Button>
            </div>
          </div>
        </form>
      ) : (
        <div className="mx-4">
          <div className="w-full flex flex-row justify-center mx-auto">
            <div className="flex flex-col space-y-8">
              <h2 className="text-lg">
                Generating test about Základy UI UX...
              </h2>
              <div>
                <Image
                  width={500}
                  height={500}
                  src="/generating-test.gif"
                  alt="Generating test"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row justify-center mt-8">
            <Button asChild>
              <Link href="/test/example-test">Continue</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
