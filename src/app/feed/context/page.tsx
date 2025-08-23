"use client";

import { useEffect, useState } from "react";
import MainCard from "@/components/feed/foryou/MainCard";
import { Hot } from "@/lib/data/dummyData";

// TikTok embed component
function TikTokEmbed({ url }: { url: string }) {
  const [html, setHtml] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;

    const fetchTikTok = async () => {
      try {
        const res = await fetch(
          `https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`
        );
        if (!res.ok) throw new Error("Failed to load TikTok video");
        const data = await res.json();
        setHtml(data.html);

        // Only load TikTok embed script once
        if (
          !document.querySelector(
            'script[src="https://www.tiktok.com/embed.js"]'
          )
        ) {
          const script = document.createElement("script");
          script.src = "https://www.tiktok.com/embed.js";
          script.async = true;
          document.body.appendChild(script);
        }
      } catch (err) {
        console.error(err);
        setError(true);
      }
    };

    fetchTikTok();
  }, [url]);

  if (error) return <p className="text-red-500">Failed to load TikTok video</p>;
  if (!html) return <p className="text-gray-500">Loading TikTok video...</p>;

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// Main page
export default function ContextPage() {
  return (
    <div className="w-full flex flex-col justify-center items-center px-4 md:px-90">
      <p className="text-2xl font-primary flex items-center gap-2 bg-green-300 px-2 justify-center rounded-sm">
        Read full context and watch videos
      </p>

      {/* Main content */}
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
          <p>{Hot.longDesc}</p>
        </div>
      </div>

      {/* TikTok section */}
      <p className="bg-green-300 justify-start text-left mt-4 font-secondary text-2xl  px-2 md:px-0">
        TikTok videos:
      </p>

      <div className="mt-6 flex flex-col items-center gap-5 w-full md:w-2/3">
        {Hot.video1 && <TikTokEmbed url={Hot.video1} />}
        {Hot.video2 && <TikTokEmbed url={Hot.video2} />}
      </div>
    </div>
  );
}
