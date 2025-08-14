"use client";

import Link from "next/link";
import { Feather } from "lucide-react";
import { useView } from "@/lib/ViewContext";
import { useState } from "react";

export default function FeedNavBar() {
  const { view, setView } = useView();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const getMenuClass = (menu: string) =>
    `cursor-pointer px-2 py-1 rounded-xs ${
      view === menu
        ? "bg-green-300 text-white font-bold"
        : "hover:bg-neutral-200"
    }`;

  return (
    <header className="w-full pt-15 px-8 flex flex-col justify-center items-center">
      {/* Logo */}
      <div className="font-cursive flex gap-1 justify-center items-center">
        <Feather color="green" size={50} />
        <span className="bg-green-300 text-3xl">MEMES4EMPLOYED</span>
      </div>

      <nav className="bg-white mx-4 my-8 px-5 py-5 rounded-xl flex justify-between items-center md:mx-80 md:py-4 md:justify-start md:gap-15 md:max-w-200 overflow-hidden w-full">
        {/* Logo */}
        <Link href={"/"}>
          <p className="font-heading text-2xl font-bold cursor-pointer">M4E</p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-row justify-evenly w-full font-secondary text-[18px] font-semibold text-text">
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

          <p
            className={getMenuClass("topweek")}
            onClick={() => setView("topweek")}
          >
            Top of the Week
          </p>

          <p className={getMenuClass("anime")} onClick={() => setView("anime")}>
            Anime Meme
          </p>
        </div>

        {/* Hamburger Button */}
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col w-full md:hidden mt-4 gap-2 bg-white rounded-lg p-4 shadow-lg">
          <p
            className={getMenuClass("foryou")}
            onClick={() => {
              setView("foryou");
              setIsOpen(false);
            }}
          >
            For You
          </p>
          <p
            className={getMenuClass("trending")}
            onClick={() => {
              setView("trending");
              setIsOpen(false);
            }}
          >
            Trending
          </p>

          <p
            className={getMenuClass("topweek")}
            onClick={() => setIsOpen(false)}
          >
            Top of the Week
          </p>

          <p
            className={getMenuClass("anime")}
            onClick={() => {
              setView("anime");
              setIsOpen(false);
            }}
          >
            Anime Meme
          </p>
        </div>
      )}
    </header>
  );
}
