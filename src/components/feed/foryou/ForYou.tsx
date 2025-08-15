import { Flame } from "lucide-react";
import { Star } from "lucide-react";
import MainCard from "./MainCard";
import { Hot, Week } from "@/lib/data/dummyData";

export default function ForYou() {
  return (
    <div className="flex flex-col md:flex-row md:gap-40 px-8">
      {/* Hot right now - main focus */}
      <div className="md:w-2/3 flex flex-col items-center">
        <p className="text-2xl font-primary flex items-center gap-2 bg-green-300 px-2">
          Hot right now <Flame size={30} color="green" />
        </p>
        <MainCard data={Hot} line=" " />
      </div>

      {/* Best of week - smaller */}
      <div className="md:w-1/3 md:flex flex-col items-center mt-8 md:mt-0 hidden">
        <p className="text-2xl font-primary flex items-center gap-2 bg-green-300 px-2">
          Best of week <Star size={30} color="green" />
        </p>
        <MainCard data={Week} line="line-clamp-3" />
      </div>
    </div>
  );
}
