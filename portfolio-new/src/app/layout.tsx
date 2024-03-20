import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Raja Waheed Portfolio",
  description: "I am a Full stack Nextjs web developer using multiple advance technologies like sanity,redux,react-icons,shadcn ui,radix ui,framer motion and many more. If you need any help in any of your project Contact me.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[rgb(36,36,36)] ${inter.className}`} >
        {children}</body>
    </html>
  );
}