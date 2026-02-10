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
  icons:"image/bmp-logo.jpg",
  title: "Bonga Media Production",
  applicationName:"bonga-media-production-website",
  description: "Bonga Media Production – established in 2010 in Gugulethu, Cape Town by Bonga Silimela. Expert video and photography for weddings, funerals, imigidi, graduations, parties & local events. Capturing your special moments with passion and professionalism.",
  keywords:"video production Cape Town, event photographer Gugulethu, wedding videographer Cape Town, funeral video coverage Cape Town, imigidi photography, graduation photos Cape Town, party videography Western Cape, local event filming Gugulethu,Professional photography, videography, funeral video, wedding video, umgidi video, umgcwabo video, wedding video, Professional photography in south africa, videography in south africa, funeral video in south africa, wedding video in south africa, umgidi video in south africa, umgcwabo video in south africa, wedding video in south africa, Professional photography in cape town, videography in cape town, funeral video in cape town, wedding video in cape town, umgidi video in cape town, umgcwabo video in cape town, wedding video in cape town,",
  openGraph: {
    title: "Bonga Media Production – Capturing Life's Moments in Cape Town Since 2010",
    description: "Professional video & photo services for weddings, funerals, imigidi, graduations, parties and more. Based in the heart of Gugulethu by visionary founder Bonga Silimela. Book your event coverage today!",
    type: "website",
    url: "https://www.bongamediaproductions.co.za/",
    images: "image/bmp-logo.jpg",
    siteName: "Bonga Media Production"
  },
  twitter: {
    card:"summary_large_image",
    title: "Bonga Media Production | Weddings, Funerals & Events Videography – Cape Town",
    description: "Gugulethu-based since 2010. Bonga Silimela's dream team delivering cinematic video and stunning photos for your local celebrations and ceremonies.",
    images: "image/bmp-logo.jpg"
  },
  robots: "index, follow",
  other: {
    'googlebot': 'index, follow',
    'geo.region': 'ZA-WC',
    'geo.placename': 'Gugulethu, Cape Town',
    'geo.position': '-33.979;18.570',
    'ICBM': '-33.979, 18.570'
  },
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
