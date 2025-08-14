"use client";

import ForYou from "@/components/feed/foryou/ForYou";
import { useView } from "@/lib/ViewContext";

export default function Feed() {
  const { view, setView } = useView();
  console.log(view);

  return (
    <>
      <div>{view == "foryou" && <ForYou />}</div>
    </>
  );
}
