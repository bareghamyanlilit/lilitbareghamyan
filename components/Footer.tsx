import { links, socials } from "@/const/const";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-t-white sticky z-10 w-full bg-[#151515] text-white py-12 px-6 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left */}
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-wide">
            Lilit <span className="text-red-950">Bareghamyan</span>
          </h2>
          <p className="text-gray-300 max-w-sm">
            Front-End Developer • Creating beautiful, fast and modern websites.
          </p>
        </div>

        {/* Center Links */}
        <div className="flex flex-col gap-2 text-gray-300">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="hover:text-red-950 transition text-center md:text-start"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-5  justify-center">
          {socials.map((item) => (
            <a key={item.name} href={item.link} target="_blank">
              <div
                className="w-14 h-14 bg-white/4 backdrop-blur-lg rounded-2xl flex items-center justify-center 
                              hover:scale-110 hover:bg-red-600/20 transition-all duration-300"
              >
                <Image
                  src={item.path}
                  width={28}
                  height={28}
                  alt={item.name}
                  className="rounded-full object-contain"
                />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} All rights reserved • Created by{" "}
        <span className="text-red-950 font-semibold">Lilit Bareghamyan</span>
      </div>
    </footer>
  );
}
