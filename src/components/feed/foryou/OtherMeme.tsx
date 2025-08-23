import { Hot } from "@/lib/data/dummyData";
import Link from "next/link";

import { SquareArrowOutUpRight } from "lucide-react";

export default function OtherMeme({ data }: { data: IMemePost }) {
  return (
    <>
      <div className="mt-5 flex p-4  flex-row rounded-xl gap-4 items-center">
        <img
          src={data?.imageUrl}
          alt=""
          className="w-40 rounded-xl md:w-90 h-4- md:h-auto"
        />

        <div>
          <p className="font-secondaryh  md:text-2xl mb-4 text-2xl">
            {data?.heading}
          </p>

          <p className="line-clamp-2 font-secondary md:text-1xl md:line-clamp-3 text-xl">
            {data?.shortDesc}
          </p>
          <Link href={`feed/context/${data?.id}`}>
            <p className="font-heading flex gap-2 cursor-pointer mt-2 bg-green-300 w-38 rounded-xs text-xl">
              See full context{" "}
              <SquareArrowOutUpRight className="hover:scale-110 transition-all" />
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
