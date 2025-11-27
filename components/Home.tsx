import Image from "next/image";
import { H1bg } from "./H1bg";
import Link from "next/link";
import img from "../public/es.png";

export function Home() {
  return (
    <main className=" bg-cover bg-center overflow-hidden bg-no-repeat bg-[url('/lines2.png')]">
      <div className="container px-5 h-screen  m-auto">
        <H1bg
          text="FRONT-END"
          className="top-[20%] xl:top-[15%] left-[5%] md:left-auto md:right-[10%] opacity-100 "
        />

        <div className="h-full content-end grid  md:grid-cols-[1fr_1.5fr]">
          <div>
            <ImageHome className=" opacity-50 drop-shadow-[0_0_10px_#888888] md:drop-shadow-[0_0_50px_#888888]" />
            <ImageHome className=" brightness-0 opacity-100 " />
          </div>
          <div className="static z-10 flex flex-col items-center  md:items-end gap-15 pb-20 lg:pb-30">
            <p className=" font-bold text-base lg:text-2xl 2xl:text-3xl ">
              I build fast, elegant, and user-focused websites using React,
              Next.js, and TypeScript
            </p>

            <button className="h-max md::h-max px-4 py-3 2xl:px-6 2xl:py-3 text-sm lg:text-base cursor-pointer  hover:text-white hover:bg-transparent rounded  transition bg-red-950  shadow-[0_0_10px_#ffc0c046]">
              <Link href="/about">See More info</Link>
            </button>
          </div>
        </div>

        <div
          className="hidden md:block absolute w-[35vw] h-1 top-[32%] right-[10%] lg:right-[18%]
    bg-linear-to-r from-red-800 via-red-600 to-red-900 
    blur-[1px] rounded-full rotate-150 shadow-[0_0_25px_rgba(255,0,0,0.5)]"
        ></div>
        <H1bg
          text="DEVELOPER"
          className="top-[30%] right-[5%] lg:right-[20%] opacity-100  "
        />
      </div>
    </main>
  );
}

function ImageHome({ className }: { className?: string }) {
  return (
    <Image
      src={img}
      alt="Lilit Bareghamyan"
      className={
        `absolute bottom-0 w-[360px] md:w-[400px] lg:w-[500px] 2xl:w-[550px] object-contain ` +
        className
      }
      width={600}
      height={600}
    />
  );
}
