import Image from "next/image";
import Link from "next/link";
import img from "../public/es.png";

export function About() {
  return (
    <main className="py-30">
      <div className=" container px-5 m-auto relative grid items-center justify-items-center md:grid-cols-[1fr_1.5fr] gap-5 md:gap-0 ">
        <div className="relative w-full h-80 lg:h-120 2xl:h-150">
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
           Ես պատրաստում եմ նորաոճ և հասանելի վեբկայքեր, որոնք ոչ միայն գեղեցիկ են, այլ նաև հարմար օգտագործման համար։ Իմ նպատակը պարզ է՝ ստեղծել վեբ լուծումներ, որոնք արագ են, մտածված և խոսում են ձեր բիզնեսի կամ գաղափարի փոխարեն։
          </p><br />
          <ul className="mt-4 list-disc pl-5 space-y-2 text-base lg:text-lg 2xl:text-xl">
            <li>Պորտֆոլիո վեբ կայքեր (անձնական և պրոֆեսիոնալ)</li>
            <li>
              Թվային հրավիրատոմսեր տարբեր առիթների համար՝ ծնունդ, հարսանիք,
              կնունք և այլ միջոցառումներ
            </li>
            <li>
              Փոքր բիզնեսների համար ճանաչողական և ներկայացուցչական վեբ կայքեր
            </li>
            <li>Ժամանակակից, հարմար և արագ աշխատող դիզայններ</li>
          </ul>
          <div className="mt-4 xl:mt-10 flex gap-4 justify-between md:justify-start">
            <button className="px-4 xl:px-6 py-2 xl:py-4 cursor-pointer  hover:text-white rounded  transition bg-red-950">
              <Link href="/contact"> Կապ ինձ հետ </Link>
            </button>
            <button className="px-4 xl:px-6 py-2 xl:py-4 cursor-pointer  rounded transition bg-red-950 hover:text-white">
              <Link href="/FullStackJS.pdf" download="Lilit_Bareghamyan_CV.pdf">
                Տեսնել CV
              </Link>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
