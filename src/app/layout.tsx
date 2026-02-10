import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  authors: [],
  title: "Bonga Media Production",
  applicationName:"bonga-media-production-website",
  description: ", and graphic design services in Surabaya, Malang, and Madiun",
  keywords:"Professional photography, videography, funeral video, wedding video, umgidi video, umgcwabo video, wedding video, Professional photography in south africa, videography in south africa, funeral video in south africa, wedding video in south africa, umgidi video in south africa, umgcwabo video in south africa, wedding video in south africa, Professional photography in cape town, videography in cape town, funeral video in cape town, wedding video in cape town, umgidi video in cape town, umgcwabo video in cape town, wedding video in cape town,",
  twitter: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${poppins.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
