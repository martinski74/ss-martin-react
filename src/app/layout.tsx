import type { Metadata } from "next";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./css/main.css";
import "./css/rest-part.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hotel Aqua",
  description: "Hotel Aqua is located in resort Kiten, one of the famous and tempting spots in the southern Black Sea coast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" crossOrigin="anonymous" />
      </head>
      <body>
        <Header />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
