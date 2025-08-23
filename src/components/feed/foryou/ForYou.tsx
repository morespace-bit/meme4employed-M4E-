import { Flame } from "lucide-react";
import { Star } from "lucide-react";
import { BookHeart } from "lucide-react";

import MainCard from "./MainCard";
// import { Hot, Week } from "@/lib/data/dummyData";
import OtherMeme from "./OtherMeme";
import { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "@/lib/firebase/firebase_config";

export default function ForYou() {
  const [general, setGeneral] = useState<IMemePost[] | null>(null);
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
    let generalRef = collection(db, "General Memes");
    let q = query(generalRef, orderBy("createdAt", "desc"));
    let res = await getDocs(q);
    let data1: IMemePost[] = res.docs.map((doc) => ({
      ...(doc.data() as Omit<IMemePost, "id">), // all fields except id
      id: doc.id,
    }));
    setGeneral(data1);
    console.log(data1);

    // now getting the hotmeme

    //    const profileRef = doc(db, "User", u_id);
    //   const res = await getDoc(profileRef);
    //   if (res.exists()) {
    //     setUserData(res.data());
    //   } else {
    //   }
    // }

    let hotRef = doc(db, "Hot", "meme");
    const res2 = await getDoc(hotRef);
    setHot(res2.data() as IMemePost);

    // now getting the top meme
    let topRef = doc(db, "Top", "meme");
    const res3 = await getDoc(topRef);
    setTop(res3.data() as IMemePost);
  }

  useEffect(() => {
    getMemes();
  }, []);

  return (
    <div className="flex flex-col gap-20 mx-8 overflow-hidden">
      {/* two main part the hot right now and best of the week */}
      <div className="flex flex-col md:flex-row md:gap-40">
        {/* Hot right now - main focus */}
        <div className="md:w-2/3 flex flex-col items-center">
          <p className="text-2xl font-primary flex items-center gap-2 bg-green-300 px-2">
            Hot right now <Flame size={30} color="green" />
          </p>
          <MainCard data={hot} line=" " type="hot" />
        </div>

        {/* Best of week - smaller */}
        <div className="md:w-1/3 md:flex flex-col items-center mt-8 md:mt-0 hidden">
          <p className="text-2xl font-primary flex items-center gap-2 bg-green-300 px-2">
            Best of week <Star size={30} color="green" />
          </p>
          <MainCard data={top} line="line-clamp-3" type="top" />
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
        {general?.map((g) => {
          return <OtherMeme data={g} />;
        })}
      </div>
    </div>
  );
}
