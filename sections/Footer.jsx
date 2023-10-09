import Link from "next/link";
import React from "react";
import { Socials } from "@/public/assets/info";

const Footer = () => {
  return (
    <div className="bg-primary flex justify-between items-center py-4 px-8">
      <div className="logo">Musfikur Rahman</div>

      <div className="flex gap-3">
        {Socials.map((social, i) => (
          <div className="px-4 py-2 bg-BG rounded-full">
            <Link key={i} href={social.url}>
              {social.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
