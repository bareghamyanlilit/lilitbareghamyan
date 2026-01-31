import { works } from "@/const/const";
import Image from "next/image";
import Link from "next/link";

export default function Works() {
  return (
    <div className=" grid gap-8 justify-items-center py-20">
      <h1 className="font-bold text-white text-2xl text-center my-2">Աշխատանքներ</h1>
      <div className="container m-auto grid md:grid-cols-2 gap-4">
        {works.map((e) => (
          <div
            key={e.name}
            className="sm:h-[500px] grid gap-3 justify-items-center content-between p-4 bg-[#333333] w-[90%] m-auto rounded-2xl"
          >
            <h2 className="font-bold text-white text-2xl text-center my-2 ">
              {e.name}
            </h2>
            <Image
              className="object-cover rounded-2xl sm:h-[300px]"
              src={e.src}
              width={500}
              height={500}
              alt={e.name}
            />
            <Link
              href={e.link}
              className="text-base  px-3 py-2 rounded-2xl bg-[#121211] text-white w-max"
            >
              Տեսնել
            </Link>
          </div>
        ))}
      </div>
      <Link className="text-base text-center px-4 py-2 rounded-2xl bg-[#333333] text-white w-max" href="https://github.com/bareghamyanlilit">Ավելին</Link>
    </div>
  );
}
