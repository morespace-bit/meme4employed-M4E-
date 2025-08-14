import { Flame } from "lucide-react";
import HotNow from "./HotNow";

export default function ForYou() {
  return (
    <>
      <div className="px-8">
        <p className="text-2xl font-primary flex items-center gap-2">
          Hot right now <Flame size={30} color="green" />
        </p>

        <HotNow />
      </div>
    </>
  );
}
