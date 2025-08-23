import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";

export default function MainCard({
  data,
  line,
}: {
  data: IMemePost | null;
  line: string;
}) {
  return (
    <>
      <div className="mt-6 overflow-x-hidden">
        <img
          src={data?.imageUrl}
          alt=""
          className="rounded-xl w-full h-90 md:h-120"
        />

        {/* heading */}

        <div className="w-full flex justify-center items-center mt-2 font-secondaryh text-2xl text-center">
          <p>{data?.heading}</p>
        </div>

        {/* description  */}

        <div
          className={`mt-3 font-secondary text-xl px-2 md:px-0 text-left ${line}`}
        >
          <p>{data?.shortDesc}</p>
        </div>

        <Link href={"/feed/context"}>
          <div className={` `}>
            <p className="font-heading flex gap-2 cursor-pointer mt-2 bg-green-300 w-38 rounded-xs text-xl">
              See full context{" "}
              <SquareArrowOutUpRight className="hover:scale-110 transition-all" />
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}
