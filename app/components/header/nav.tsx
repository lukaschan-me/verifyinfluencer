"use client";

import { useState } from "react";
import Link from "next/link";

const navs = [
  { title: "Leaderboard", link: "/leaderboard" },
  { title: "Products", link: "/products" },
  { title: "Monetization", link: "/monetization" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
  { title: "Admin", link: "/admin" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="py-2 px-4 bg-gray-800 text-white rounded"
        >
          Menu
        </button>
        {isOpen && (
          <div className="flex flex-col mt-2 space-y-2">
            {navs.map((nav, idx) => (
              <Link href={nav.link} key={idx}>
                <p className="py-2 px-4 bg-gray-200 rounded">{nav.title}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="hidden md:flex md:flex-row md:space-x-8">
        {navs.map((nav, idx) => (
          <Link href={nav.link} key={idx}>
            <p className="py-2 md:py-0">{nav.title}</p>
          </Link>
        ))}
      </div>
      <div className="mt-4 md:mt-0 md:ml-auto space-x-2">Sign Out</div>
    </div>
  );
}
