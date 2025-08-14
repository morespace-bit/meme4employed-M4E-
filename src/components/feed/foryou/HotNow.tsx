import { Hot } from "@/lib/data/dummyData";
import { SquareArrowOutUpRight } from "lucide-react";

export default function HotNow() {
  return (
    <>
      <div className="mt-6">
        <img src={Hot.imageUrl} alt="" className="rounded-xl" />

        {/* heading */}

        <div className="w-full flex justify-center items-center mt-2 font-secondaryh text-2xl">
          <p>{Hot.heading}</p>
        </div>

        {/* description  */}

        <div className="mt-3 font-secondary text-xl px-4">
          <p>{Hot.longDes}</p>
        </div>

        <div className="px-4">
          <p className="font-heading flex gap-2 cursor-pointer mt-2 bg-green-300 w-32 rounded-xs">
            See full context <SquareArrowOutUpRight />
          </p>
        </div>
      </div>
    </>
  );
}
