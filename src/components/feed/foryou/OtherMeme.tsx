import { Hot } from "@/lib/data/dummyData";
import { SquareArrowOutUpRight } from "lucide-react";

export default function OtherMeme() {
  return (
    <>
      <div className="mt-5 flex p-4  flex-row rounded-xl gap-4 items-center">
        <img
          src={Hot.imageUrl}
          alt=""
          className="w-40 rounded-xl md:w-90 h-4- md:h-auto"
        />

        <div>
          <p className="font-secondaryh  md:text-2xl mb-4 text-2xl">
            {Hot.heading}
          </p>

          <p className="line-clamp-2 font-secondary md:text-1xl md:line-clamp-3 text-xl">
            {Hot.shortDes}
          </p>
          <p className="font-heading flex gap-2 cursor-pointer mt-2 bg-green-300 w-38 rounded-xs text-xl">
            See full context{" "}
            <SquareArrowOutUpRight className="hover:scale-110 transition-all" />
          </p>
        </div>
      </div>
    </>
  );
}
