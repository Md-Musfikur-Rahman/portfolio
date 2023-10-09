import Link from "next/link";
import React from "react";

const Navbar = () => {
  const menuItems = [
    {
      item: "about",
      page: "about",
    },
    {
      item: "work",
      page: "work",
    },
    {
      item: "contact",
      page: "contact",
    },
  ];
  return (
    <div className="bg-gradient-to-b from-BG to-secondary">
      <div className="navContainer flex justify-between items-center py-3">
        <Link href="/">
          <p className="logo font-bold text-5xl ">Musfikur Rahman</p>
        </Link>

        <div className="flex gap-5">
          <div>
            {menuItems.map((item, i) => (
              <Link key={i} href={`/${item.page}`}>
                <button className="text-lg mr-3 capitalize py-2 px-4 rounded-xl bg-accent text-BG">
                  {item.item}
                </button>
              </Link>
            ))}
          </div>
          <button className="text-lg capitalize py-2 px-4 rounded-xl bg-primary text-BG">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
