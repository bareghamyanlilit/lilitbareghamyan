import Image from "next/image";
import Link from "next/link";
import img from "../public/es.png";

export function About() {
  return (
    <main className="py-30 md:py-0">
      <div className=" container px-5 h-screen m-auto relative grid items-center justify-items-center md:grid-cols-[1fr_1.5fr] gap-5 md:gap-0 ">
        <div className="relative w-full h-80 lg:h-120 2xl:h-150">
          {/* Pseudo element using Tailwind */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  w-[80%] h-[80%] border-[5px] border-red-950 
                  rounded-[30%_20%_40%_60%] z-0 rotate-45"
          ></div>

          <Image
            src={img}
            alt="Lilit Bareghamyan"
            className="relative z-10 w-full h-full object-contain brightness-50 rounded-full"
            width={600}
            height={600}
          />
        </div>
        <div className="md:ml-8 self-center ">
          <h2 className="text-2xl md:text-4xl font-bold">Lilit Bareghamyan</h2>
          <h3 className="text-xl md:text-2xl">Front-End Developer</h3>
          <p className="mt-4 max-w-2xl text-base lg:text-lg 2xl:text-xl text-justify">
            I’m a passionate Front-End Developer who brings ideas to life
            through clean structure, modern aesthetics, and thoughtful user
            experience. Working with Next.js, React, and TypeScript, I create
            fast, intuitive, and visually refined interfaces that feel
            effortless to use. For me, front-end development is a blend of
            creativity and precision — crafting interactions that are both
            beautiful and meaningful. I’m driven by improvement, curiosity, and
            the desire to build digital experiences that leave a lasting
            impression.
          </p>
          <div className="mt-4 xl:mt-10 flex gap-4 justify-between md:justify-start">
            <button className="px-4 xl:px-6 py-2 xl:py-4 cursor-pointer  hover:text-white rounded  transition bg-red-950">
              <Link href="/contact">Contact Me</Link>
            </button>
            <button className="px-4 xl:px-6 py-2 xl:py-4 cursor-pointer  rounded transition bg-red-950 hover:text-white">
              <Link href="/FullStackJS.pdf" download="Lilit_Bareghamyan_CV.pdf">
                Download & view CV
              </Link>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
