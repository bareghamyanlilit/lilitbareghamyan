import Image from "next/image";
import Link from "next/link";
import img from "../public/es.png";

export  function About() {
  return (
    <main>
      
      <div className="relative grid items-center justify-items-center grid-cols-[1fr_1.5fr] container m-auto  h-screen ">
        <Image
          src={img}
          alt="Lilit Bareghamyan"
          className="w-full object-contain brightness-50 h-150 rounded-full "
          width={600}
          height={600}
        />
        <div className="ml-8 self-center ">
          <h2 className="text-4xl font-bold">Lilit Bareghamyan</h2>
          <h3 className="text-2xl">Front-End Developer</h3>
          <p className="mt-4 max-w-2xl text-base">
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
          <div className="mt-4 flex gap-4">
            <button className="px-4 py-2 cursor-pointer  hover:text-white rounded  transition bg-red-950">
              <Link href="/contact">Contact Me</Link>
            </button>
            <button className="px-4 py-2 cursor-pointer  rounded transition bg-red-950 hover:text-white">
              <Link
                href="/FullStackJS.pdf"
                download="Lilit_Bareghamyan_CV.pdf">
                Download & view CV 
              </Link>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
