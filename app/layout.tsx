import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import NavHeader from "@/components/nav-header";

export const metadata: Metadata = {
  title: "LrnwithAI ",
  description:
    "Generated tests with AI for better learning. Learn, make, pass.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full">
            <NavHeader />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
