import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "LrnWithAI",
  description: "Make learning fun with AI",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
