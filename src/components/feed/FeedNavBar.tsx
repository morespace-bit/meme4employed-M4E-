"use client";

import Link from "next/link";
import { Feather } from "lucide-react";
import { useState } from "react";

export default function FeedNavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [view, setView] = useState<string>("foryou");

  // Helper to apply active class
  const getMenuClass = (menu: string) =>
    `cursor-pointer px-2 py-1 rounded-xs ${
      view === menu
        ? "bg-green-300 text-white font-bold"
        : "hover:bg-neutral-200"
    }`;

  return (
    <header className="w-full py-15 px-8 flex flex-col justify-center items-center">
      {/* main logo */}
      <div className="font-cursive flex gap-1 justify-center items-center">
        <Feather color="green" size={50} />
        <span className="bg-green-300 text-3xl">MEMES4EMPLOYED</span>
      </div>

      <nav className="bg-white mx-4 my-8 px-5 py-5 rounded-xl flex justify-between items-center md:mx-80 md:py-4 md:justify-start md:gap-15 md:max-w-200 overflow-hidden w-full">
        {/* Logo */}
        <Link href={"/"}>
          <p className="font-heading text-2xl font-bold cursor-pointer">M4E</p>
        </Link>

        {/* Nav menu */}
        <div className="flex-row justify-evenly hidden md:flex w-full font-secondary text-[18px] font-semibold text-text">
          <p
            className={getMenuClass("foryou")}
            onClick={() => setView("foryou")}
          >
            For You
          </p>
          <p
            className={getMenuClass("trending")}
            onClick={() => setView("trending")}
          >
            Trending
          </p>
          <Link href={"/about"}>
            <p
              className={getMenuClass("topweek")}
              onClick={() => setView("topweek")}
            >
              Top of the Week
            </p>
          </Link>
          <p className={getMenuClass("anime")} onClick={() => setView("anime")}>
            Anime Meme
          </p>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group h-8 w-8 rounded-lg flex items-center justify-center md:hidden"
        >
          <div className="grid justify-items-center gap-1.5 transition-all duration-300 ease-in-out">
            <span
              className={`h-1 w-8 rounded-full bg-black transition-transform duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            ></span>
            <span
              className={`h-1 w-8 rounded-full bg-black transition-transform duration-300 ease-in-out ${
                isOpen ? "scale-x-0" : ""
              }`}
            ></span>
            <span
              className={`h-1 w-8 rounded-full bg-black transition-transform duration-300 ease-in-out ${
                isOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </nav>
    </header>
  );
}
