import Hero from "@/components/Hero";
import Video from "@/components/Video";
import { Feather } from "lucide-react";

export default function About() {
  return (
    <>
      <div>
        <div className=" mx-4  flex flex-col md:flex-row md:items-center md:mx-10 md:gap-15 overflow-y-hidden overflow-x-hidden justify-center">
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
          </div>

          {/* the video */}
          <div className="h-80 overflow-hidden w-100 rounded-2xl md:h-180 md:w-180">
            <Video />
          </div>
        </div>
        <Hero />
      </div>
    </>
  );
}
