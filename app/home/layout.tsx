import type { Metadata } from "next";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import NavHeader from "@/components/nav-header";

import "../globals.css";

export const metadata: Metadata = {
  title: "LrnWithAI",
  description: "Make learning fun with AI",
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <NavHeader />
          {children}
        </main>
      </SidebarProvider>
    </>
  );
}
