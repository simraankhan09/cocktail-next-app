import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AppContextProvider } from "./context/AppContext";

export const metadata: Metadata = {
  title: "TheCocktailDB",
  description:
    "An open, crowd-sourced database of drinks and cocktails from around the world.",
};

const roboto = localFont({
  src: [
    {
      path: "./fonts/Roboto-200.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Roboto-300.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Roboto-400.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Roboto-600.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
}
