"use client";
import Link from "next/link";

import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className="flex w-full justify-center items-center sticky overflow-x-hidden">
        <nav className="bg-white mx-4  my-4 px-5 py-5 rounded-xl flex justify-between items-center md:mx-80 md:py-4 md:justify-start md:gap-15 md:min-w-200  overflow-hidden w-full">
          {/* this is going to be logo */}

          <Link href={"/"}>
            {" "}
            <p className="font-heading text-2xl font-bold cursor-pointer">
              M4E
            </p>
          </Link>

          {/* the nav bar menus */}

          <div className=" flex-row justify-evenly hidden md:flex w-full font-secondary  text-[18px] font-semibold text-text">
            <p className="cursor-pointer hover:bg-neutral-200 px-2 py-1 rounded-xs">
              Services
            </p>
            <Link href={"/about"}>
              <p className="cursor-pointer hover:bg-neutral-200 px-2 py-1 rounded-xs">
                About
              </p>
            </Link>
            <p className="cursor-pointer hover:bg-neutral-200 px-2 py-1 rounded-xs">
              Contact
            </p>
            <p className="cursor-pointer hover:bg-neutral-200 px-2 py-1 rounded-xs">
              Talk to us
            </p>
            <p className="cursor-pointer hover:bg-neutral-200 px-2 py-1 rounded-xs">
              Resources
            </p>
            <p className="cursor-pointer hover:bg-neutral-200 px-2 py-1 rounded-xs">
              Cases
            </p>
          </div>

          {/* ham burger */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group h-8 w-8 rounded-lg  flex items-center justify-center md:hidden"
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
                className={`h-1 w-8 rounded-full bg-black  transition-transform duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </nav>
      </div>
    </>
  );
}
