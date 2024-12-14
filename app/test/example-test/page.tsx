"use client";

import { useState } from "react";
import { EllipsisVertical, Trash2, FilePenLine } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Page = () => {
  const questions = [
    {
      id: 1,
      question: "Čo znamená UI?",
      answers: [
        "User Integration",
        "User Interface",
        "Universal Interaction",
        "Usability Improvement",
      ],
      correct: 1,
    },
    {
      id: 2,
      question: "Čo znamená UX?",
      answers: [
        "User Experience",
        "Usability Execution",
        "Universal Exploration",
        "User Extension",
      ],
      correct: 0,
    },
    {
      id: 3,
      question:
        "Ktorý z týchto nástrojov je najvhodnejší pre návrh wireframov?",
      answers: ["Microsoft Word", "Final Cut Pro", "AutoCAD", "Figma"],
      correct: 3,
    },
    {
      id: 4,
      question: "Čo je cieľom UX dizajnu?",
      answers: [
        "Zlepšiť spokojnosť používateľov",
        "Zvýšiť estetickosť dizajnu",
        "Minimalizovať počet funkcií",
        "Pridať čo najviac funkcionalít",
      ],
      correct: 0,
    },
    {
      id: 5,
      question: "Čo je wireframe?",
      answers: [
        "Skica rozloženia aplikácie alebo stránky",
        "Animácia používateľského rozhrania",
        "Hotová verzia dizajnu",
        "Marketingová stratégia",
      ],
      correct: 0,
    },
    {
      id: 6,
      question: "Čo zahŕňa UI dizajn?",
      answers: [
        "Vizualizáciu, tlačidlá a typografiu",
        "Písanie dokumentácie pre vývojárov",
        "Vývoj backendu",
        "Optimalizáciu databáz",
      ],
      correct: 0,
    },
    {
      id: 7,
      question: "Čo je používateľské testovanie?",
      answers: [
        "Analýza potreby nových funkcií",
        "Testovanie aplikácie reálnymi používateľmi",
        "Automatické generovanie návrhov",
        "Kontrola kódu dizajnu",
      ],
      correct: 1,
    },
    {
      id: 8,
      question: "Čo znamená „responsive design“?",
      answers: [
        "Dizajn, ktorý sa prispôsobí rôznym zariadeniam",
        "Dizajn zameraný len na desktop",
        "Používanie rovnakých fontov na každej stránke",
        "Automatické odpovede na otázky používateľov",
      ],
      correct: 0,
    },
    {
      id: 9,
      question: "Aký princíp platí pre pravidlo 80/20 v UX dizajne?",
      answers: [
        "80 % používateľov využíva 20 % funkcionalít",
        "80 % času sa venuje vývoju, 20 % testovaniu",
        "80 % dizajnu je estetika, 20 % funkcionalita",
        "80 % používateľov je spokojných bez zmien",
      ],
      correct: 0,
    },
    {
      id: 10,
      question: "Čo by mal dizajnér UI/UX pravidelne zbierať?",
      answers: [
        "Finančné údaje o projekte",
        "Spätnú väzbu od používateľov",
        "Štatistiky predaja",
        "Dáta o počte stránok na webe",
      ],
      correct: 1,
    },
  ];

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="bg-stone-200 rounded-lg flex justify-between p-3">
        <div className="space-y-1">
          <h1 className="text-2xl">Základy UI UX</h1>
          <p>UI UX</p>
          <div className="flex flex-row gap-2 align-center items-center">
            <p>Visible to</p>
            <Select>
              <SelectTrigger className="max-w-fit px-2 bg-gray-100 border border-[1px] border-black">
                <SelectValue placeholder="Everyone" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="everyone">Everyone</SelectItem>
                  <SelectItem value="users-with-pwd">
                    Users with Password
                  </SelectItem>
                  <SelectItem value="just-me">Just me</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col justify-center text-right">
          <Popover>
            <PopoverTrigger asChild>
              <EllipsisVertical className="me-0 ms-auto cursor-pointer" />
            </PopoverTrigger>
            <PopoverContent className="w-full">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <FilePenLine size={18} />
                  <p className="text-sm">Edit</p>
                </div>
                <div className="flex items-center gap-2">
                  <Trash2 size={18} />
                  <p className="text-sm">Delete</p>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <strong>Matej Bendík</strong>
          <p>{new Date().toDateString()}</p>
          <p>10 Questions</p>
        </div>
      </div>

      <div className="bg-stone-200 rounded-lg p-3 space-y-3">
        {questions.map((question) => (
          <div
            key={question.id}
            className="bg-white rounded-lg p-3 flex flex-col gap-2"
          >
            <h4 className="text-lg">Question {question.id}:</h4>
            <h5 className="text-md">{question.question}</h5>
            <h4 className="text-lg">Answers:</h4>
            <div className="flex flex-col space-y-2">
              {question.answers.map((answer, index) => (
                <div key={index}>
                  <Input
                    id={`answer${index}`}
                    defaultValue={answer}
                    className={`w-full ${
                      question.correct === index ? "bg-emerald-200" : ""
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
