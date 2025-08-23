import { Flame } from "lucide-react";
import { Star } from "lucide-react";
import { BookHeart } from "lucide-react";

import MainCard from "./MainCard";
import { Hot, Week } from "@/lib/data/dummyData";
import OtherMeme from "./OtherMeme";
import { useState } from "react";

export default function ForYou() {
  const [general, setGeneral] = useState<IMemePost | null>(null);
  const [hot, setHot] = useState<IMemePost | null>(null);
  const [top, setTop] = useState<IMemePost | null>(null);

  // function to get data form firebase

  async function getMemes() {
    // let postRef = collection(db, "Post");
    // let q = query(postRef, orderBy("CreatedAt", "desc"), limit(5));
    // let res = await getDocs(q);
    // setLast(res.docs[res.docs.length - 1]);
    // let data = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    // setPost(data);
    // setLoadmore(false);
  }

  return (
    <div className="flex flex-col gap-20 mx-8 overflow-hidden">
      {/* two main part the hot right now and best of the week */}
      <div className="flex flex-col md:flex-row md:gap-40">
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

        {/* The other meme you may want to know context */}
      </div>

      <div className="">
        <div className="justify-center flex">
          <p className="text-3xl font-heading  flex items-center gap-2 bg-green-300 px-2 justify-center">
            More for you
            <BookHeart color="green" size={30} />
          </p>
        </div>

        <OtherMeme />
      </div>
    </div>
  );
}
