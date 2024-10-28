import localFont from "next/font/local";
import "./globals.css";
import { Tiny5, Permanent_Marker } from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const tiny5 = Tiny5({
  subsets: ['latin'],
  weight: '400'
})

const permanent_marker = Permanent_Marker({
  subsets: ['latin'],
  weight: '400'
})

export const metadata = {
  title: "$Toby",
  description: " Fully Backed by Turbo Whales 🚀🐸",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={permanent_marker.className}>
      <body
      // className="Tiny5"
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        // className={}
      >
        {children}
      </body>
    </html>
  );
}
