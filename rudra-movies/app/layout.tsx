import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RUDRA MOVIES — Stories hit different",
  description: "A fresh universe for discovering cinema. Built for the curious.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
