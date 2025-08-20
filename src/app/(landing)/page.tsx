import Hero from "@/components/Landing/Hero";
import Video from "@/components/Landing/Video";
import { Feather } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div>
        <div className=" mx-4  flex flex-col md:flex-row md:items-center md:mx-10 md:gap-15 gap-8  overflow-x-hidden justify-center">
          {/* the left part */}
          <div className="w-190">
            <p className="font-cursive flex gap-1">
              {" "}
              <Feather color="green" />
              <span className="bg-green-300">MEMES4EMPLOYED</span>
            </p>

            <div className="font-heading text-8xl md:text-9xl font-bold text-text">
              <p>Join a place </p>
              <p>that shares</p>
              <span>Meme</span>{" "}
              <span className="font-cursive font-normal">
                {" "}
                <br className="md:hidden" />
                Cluture
              </span>
            </div>
            <Link href={"/feed"}>
              <div className="flex justify-start">
                <p className="bg-green-300 text-2xl  px-10 py-2 rounded-xl font-heading hover:scale-105 cursor-pointer md:mb-4">
                  Explore now
                </p>
              </div>
            </Link>
          </div>

          {/* the video */}
          <div className="h-80 overflow-hidden w-100 rounded-2xl md:h-180 md:w-180 md:mt-8">
            <Video />
          </div>
        </div>
        <Hero />
      </div>
    </>
  );
}
