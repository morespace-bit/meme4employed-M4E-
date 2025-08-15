import MainCard from "@/components/feed/foryou/MainCard";
import { Hot } from "@/lib/data/dummyData";

async function TikTokEmbed({ url }: { url: string }) {
  const res = await fetch(
    `https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return <p className="text-red-500">Failed to load TikTok video.</p>;
  }

  const data = await res.json();

  return (
    <div dangerouslySetInnerHTML={{ __html: data.html }} className="w-80" />
  );
}

export default async function ContextPage() {
  return (
    <div className="w-full flex flex-col justify-center items-center px-90">
      <p className="text-2xl font-primary flex items-center gap-2 bg-green-300 px-2 justify-center rounded-sm">
        Read full context and watch videos
      </p>

      {/* The main content begins from here */}
      <div className="mt-6 overflow-x-hidden w-full">
        <img
          src={Hot.imageUrl}
          alt=""
          className="rounded-xl w-full h-64 md:h-96 object-cover"
        />

        <div className="w-full flex justify-center items-center mt-2 font-secondary text-2xl text-center">
          <p>{Hot.heading}</p>
        </div>

        <div className="mt-3 font-secondary text-xl px-2 md:px-0 text-left">
          <p>{Hot.longDes}</p>
        </div>
      </div>

      {/* TikTok video embed */}
      <div className="mt-6 flex justify-center items-center gap-5 flex-col">
        <TikTokEmbed url={Hot.video1 ?? ""} />

        <TikTokEmbed url={Hot.video2 ?? ""} />
      </div>
    </div>
  );
}
