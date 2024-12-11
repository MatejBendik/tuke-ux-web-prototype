import { BrainCircuit, Moon } from "lucide-react";
import { Button } from "./ui/button";

import Link from "next/link";

const Navigation = () => {
  return (
    <div className="flex justify-between h-16 shrink-0 items-center gap-2 border-b px-4">
      <Button className="flex flex-row space-x-2" variant="outline">
        <BrainCircuit className="w-8 h-8" />
        <a href="/" className="text-lg">
          LrnWithAI
        </a>
      </Button>

      <div className="flex items-center space-x-2">
        <Button variant="outline" size="icon">
          <Moon />
        </Button>
        <Button variant="outline" asChild>
          <Link href="/login">Log in</Link>
        </Button>
        <Button className="bg-violet-600 hover:bg-violet-500" asChild>
          <Link href="/register">Register</Link>
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
