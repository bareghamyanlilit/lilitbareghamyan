import Image from "next/image";
import { H1bg } from "./H1bg";
import img from "../public/es.png";
import Link from "next/link";

export function Home() {
  return (
    <main className="w-full h-screen bg-cover bg-center bg-no-repeat bg-[url('https://gabubi.netlify.app/img/home/lines1.png')]">
      <H1bg text="FRONT-END" className="top-[15%] right-[10%] opacity-100 " />
      <div className="h-full content-end grid grid-cols-[1fr_1.5fr]">
        <Image
          src={img}
          alt="Lilit Bareghamyan"
          className="w-[550px] object-contain ml-30 opacity-100  drop-shadow-[0_0_20px_#888888]"
          width={600}
          height={600}
        />
        <Image
          src={img}
          alt="Lilit Bareghamyan"
          className="absolute bottom-0 w-[550px] object-contain ml-30 opacity-100   "
          width={600}
          height={600}
        />
        <div className="flex items-end justify-around pb-40">
          <p className="font-bold text-2xl  w-[600px] ">
            I build fast, elegant, and user-focused websites using React,
            Next.js, and TypeScript
          </p>

          <button className="h-max px-4 py-2 cursor-pointer  hover:text-white rounded  transition bg-red-950">
            <Link href="/contact">See More info</Link>
          </button>
        </div>
      </div>
      <div className=" absolute  w-[700px] h-1  top-[35%] right-[20%]  bg-red-950 rotate-150"></div>
      <H1bg text="DEVELOPER" className="top-[30%] right-[20%] opacity-100  " />
    </main>
  );
}
