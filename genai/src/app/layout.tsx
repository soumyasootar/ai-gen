import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Generator",
  description: "Created by Soumya Swaroop Sootar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(GeistSans.variable,"font-sans")}>
        <GridPattern width={60} height={60} zIndex={-100} />
        {children}
        </body>
    </html>
  );
}
