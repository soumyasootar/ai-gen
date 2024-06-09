import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";
import { TooltipProvider } from "@/components/ui/tooltip";
import { RecoilRoot } from 'recoil';
import RecoilRootWrapper from "@/components/recoil/RecoilRootWrapper";


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
    <RecoilRootWrapper>
      <html lang="en">
        <body className={cn(GeistSans.variable, "font-sans")}>
          <GridPattern width={60} height={60} className="z-[-100]" />
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </body>
      </html>
    </RecoilRootWrapper>
  );
}
