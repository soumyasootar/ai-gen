import Output from "@/components/Home/Output";
import UserInput from "@/components/Home/UserInput";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative grid grid-cols-1 slg:grid-cols-2 gap-12  px-4 py-12 sm:py-16 sm:px-8 md:px-10 slg:p-16 lg:p-24">
      <div className="col-span-full group w-full flx flex-col items-center justify-center space-y-2 sm:space-y-4 mb-4 text-center">
        <Link href={"https://github.com/soumyasootar/ai-gen"} target="_blank" className="">
          <AnimatedGradientText className="px-6 py-2 rounded-full">
            <Star color="#eac406" className="w-6 h-6 fill-yellow-500 text-yellow-400" />
            <hr className="mx-2 h-4 w-[1px] bg-gray-300" />
            Star on Github
            <ChevronRight className="ml-1 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </AnimatedGradientText>
        </Link>
        <h1 className="font-extrabold text-4xl md:text-5xl slg:text-6xl lg:text-7xl text-center w-full lg:w-[90%] uppercase mx-auto pt-4">CRAFT PERFECT CAPTIONS OR BIO IN SECONDS</h1>
        <p className="text-sm sm:text-base  md:text-lg text-accent lg:w-[90%] sm:w-[50%] mx-auto">Just answer a few questions and we will generate a bio that captures who you are</p>
      </div>

      <UserInput/>
      <Output/>
    </main>
  );
}
