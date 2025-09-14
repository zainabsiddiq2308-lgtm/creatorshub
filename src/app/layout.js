import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import { Poppins } from "next/font/google";
import Footer from "./components/footer";

const poppins = Poppins({
  subsets: ["latin"],     // choose character set
  weight: ["400", "600"], // choose weights
  variable: "--font-poppins", // CSS variable for Tailwind
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "the creators ",
  description: "The Creators with Art is a creative hub where imagination and design come together. This platform is for creators and artists who want to share their ideas with the world through art, design, and innovation. Every creation tells a story, and we celebrate those stories that inspire and connect people everywhere.",
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  >
     
     <body
  className={`${geistSans.variable} ${geistMono.variable} antialiased`}
  cz-shortcut-listen="true"   // dono side consistent
>
<div className="relative z-50" >
  <Header/>
</div>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
