"use client"
import Link from "next/link";
import { useState } from "react";
import Footer from "./Footer";
import CV from "./CvSave";


export function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Կոնտակտի բեքենդի կապի համար նախատեսված state-երը (պահպանիր քո ունեցած տրամաբանությունը)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // ԱՅՍՏԵՂ ՏԵՂԱԴՐԻՐ ՔՈ ԲԵՔԵՆԴԻ ԿՈԴԸ (fetch կամ axios հարցումը)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-[#580000] selection:text-white">

      {/* Նավիգացիա */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">

          {/* Լոգո */}
          <a href="#" className="text-xl font-bold tracking-wider text-[#580000]">
            LILIT.B
          </a>

          {/* Դեսքթոփ Մենյու (Համակարգչի համար) */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#about" className="hover:text-[#580000] transition-colors">Իմ Մասին</a>
            <a href="#skills" className="hover:text-[#580000] transition-colors">Հմտություններ</a>
            <a href="#education" className="hover:text-[#580000] transition-colors">Կրթություն</a>
            <a href="#portfolio" className="hover:text-[#580000] transition-colors">Նախագծեր</a>
            <a href="#contact" className="hover:text-[#580000] transition-colors">Կապ</a>
          </div>

          {/* Hamburger Կոճակ (Հեռախոսի համար) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-[#580000] focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              // Փակելու կոճակ (X)
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Մենյուի կոճակ (Hamburger)
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Հեռախոսի Մենյուի Բաժին (բացվում է սեղմելիս) */}
        <div
          className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
            }`}
        >
          <div className="px-6 py-6 flex flex-col space-y-4 font-medium text-gray-700">
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-[#580000] py-2 border-b border-gray-50 transition-colors"
            >
              Իմ Մասին
            </a>
            <a
              href="#skills"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-[#580000] py-2 border-b border-gray-50 transition-colors"
            >
              Հմտություններ
            </a>
            <a
              href="#education"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-[#580000] py-2 border-b border-gray-50 transition-colors"
            >
              Կրթություն
            </a>
            <a
              href="#portfolio"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-[#580000] py-2 border-b border-gray-50 transition-colors"
            >
              Նախագծեր
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-[#580000] py-2 transition-colors"
            >
              Կապ
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Բաժին */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-32 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#580000] block">
            Front-end React Developer
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-950 leading-tight">
            Լիլիթ Բարեղամյան
          </h1>
          <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
            Ես ստեղծում եմ մինիմալիստական, էլեգանտ և հարմարավետ վեբ կայքեր։
            Մասնագիտացած եմ Front-end տիրույթում՝ կառուցելով արագ և արդյունավետ լուծումներ։
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a
              href="#portfolio"
              className="px-8 py-3.5 bg-[#580000] text-white font-medium rounded-lg hover:bg-[#400000] transition-all text-center shadow-lg shadow-[#580000]/10"
            >
              Իմ աշխատանքները
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 border border-gray-200 text-gray-800 font-medium rounded-lg hover:border-[#580000] hover:text-[#580000] transition-all text-center"
            >
              Կապնվել ինձ հետ
            </a>
            <a
              href="/Front-endDeveloperLilitBareghamyan.pdf"
              className="px-8 py-3.5 border border-gray-200 text-gray-800 font-medium rounded-lg hover:border-[#580000] hover:text-[#580000] transition-all text-center"
            >
              Ներբեռնել CV
            </a>
            
      
          </div>
        </div>

        {/* Անձնական նկարի հատված */}
        <div className="w-64 h-64 md:w-80 md:h-80 relative flex-shrink-0">
          <div className="absolute inset-0 rounded-full border-2 border-[#580000] transform translate-x-3 translate-y-3"></div>
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10">
            <img
              src="/es.png" /* Տեղադրիր քո իրական նկարի հղումը այստեղ */
              alt="Lilit Bareghamyan"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Իմ Մասին & Իմ Բիզնեսը (SiteUp) */}
      <section id="about" className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <h2 className="text-3xl font-bold text-gray-950">Իմ Մասին</h2>
              <div className="w-12 h-1 bg-[#580000] mt-3"></div>
            </div>
            <div className="md:col-span-8 space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Ես մոտիվացված Front-end ծրագրավորող եմ։ Սիրում եմ լուծել բարդ խնդիրներ,
                որոնք ինձ ստիպում են անընդհատ աճել ու զարգանալ։ Կենտրոնանում եմ մաքուր կոդի,
                էսթետիկ դիզայնի և ժամանակակից տեխնոլոգիաների կիրառման վրա։
              </p>

              {/* SiteUp.am Բիզնես Հատված */}
              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="p-2 bg-[#580000]/5 text-[#580000] rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  <h3 className="text-xl font-bold text-gray-950">Իմ Փոքր Բիզնեսը՝ SiteUp.am</h3>
                </div>
                <p className="text-base text-gray-600">
                  Որպես անկախ ծրագրավորող՝ ես հիմնել եմ իմ սեփական ստարտափը՝ <strong className="text-gray-900">SiteUp.am</strong>-ը,
                  որը զբաղվում է ժամանակակից, նրբաճաշակ և ինտերակտիվ թվային հրավիրատոմսերի պատրաստմամբ։
                </p>
                <p className="text-base text-gray-600">
                  Այս ճանապարհը հեշտ չէր․ բիզնեսի առաջին ինստագրամյան էջը բացելուց 3 ամիս անց այն արգելափակվեց,
                  սակայն ես չհանձնվեցի, ստեղծեցի նոր էջ և շարունակեցի զարգացնել իմ նախագիծը՝ ապացուցելով, որ
                  ցանկացած խոչընդոտ միայն ուժեղացնում է ինձ։
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="https://siteup-am.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#580000] hover:underline"
                  >
                    Այցելել SiteUp
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                  <a
                    href="https://www.instagram.com/siteup.amm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-[#580000]"
                  >
                    Ինստագրամյան էջը
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Տեխնիկական Հմտություններ */}
      <section id="skills" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-950">Մասնագիտական Հմտություններ</h2>
          <div className="w-12 h-1 bg-[#580000] mx-auto mt-3 mb-16"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "HTML5 / CSS3", "SASS / SCSS", "Tailwind CSS", "JavaScript (ES6+)",
              "TypeScript", "React.js", "Next.js", "Vite",
              "Zustand / Redux", "Node.js / Express", "MongoDB / Mongoose", "PostgreSQL / Prisma",
              "RESTful APIs", "Git & GitHub", "Figma", "Photoshop"
            ].map((skill, index) => (
              <div
                key={index}
                className="p-4 border border-gray-100 rounded-lg hover:border-[#580000] transition-all text-center font-medium text-gray-700 hover:text-[#580000] bg-white hover:shadow-sm"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Կրթություն և Փորձ */}
      <section id="education" className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">

            {/* Կրթություն */}
            <div>
              <h2 className="text-2xl font-bold text-gray-950 mb-8">Կրթություն</h2>
              <div className="space-y-8 border-l border-gray-200 pl-6 relative">

                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#580000] border-4 border-white"></div>
                  <span className="text-xs font-bold text-[#580000]">2022 - 2026</span>
                  <h3 className="font-bold text-gray-950 mt-1">Էջմիածնի Վարդգես Համազասպյանի անվան պետական քոլեջ</h3>
                  <p className="text-sm text-gray-500 mt-1">Ինֆորմացիոն Տեխնոլոգիաներ (ԻՏ) և Հաշվողական Տեխնիկայի Ավտոմատացված Համակարգերի Ծրագրային Ապահովում</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-gray-300 border-4 border-white hover:bg-[#580000] transition-colors"></div>
                  <span className="text-xs font-bold text-[#580000]">2024 - 2025</span>
                  <h3 className="font-bold text-gray-950 mt-1">R'Soft Company</h3>
                  <p className="text-sm text-gray-500 mt-1">3-ամսյա ինտենսիվ MERN Stack ծրագրավորման կուրս (React, Node, Express, MongoDB)</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-gray-300 border-4 border-white hover:bg-[#580000] transition-colors"></div>
                  <span className="text-xs font-bold text-[#580000]">2023 - 2024</span>
                  <h3 className="font-bold text-gray-950 mt-1">"Free Programming" Նախագիծ</h3>
                  <p className="text-sm text-gray-500 mt-1">7-ամսյա ծրագրավորման դասընթաց Սամի Հայրապետյանի գլխավորությամբ (HTML, CSS, JavaScript)</p>
                </div>
              </div>
            </div>

            {/* Փորձառություն */}
            <div>
              <h2 className="text-2xl font-bold text-gray-950 mb-8">Փորձ</h2>
              <div className="space-y-8 border-l border-gray-200 pl-6 relative">

                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#580000] border-4 border-white"></div>
                  <span className="text-xs font-bold text-[#580000]">2025 Հուլիս - Հոկտեմբեր</span>
                  <h3 className="font-bold text-gray-950 mt-1">Zenix AI</h3>
                  <p className="text-sm text-[#580000] font-medium">Frontend Developer Intern</p>
                  <p className="text-sm text-gray-500 mt-1">Աշխատանք React.js, Next.js և TypeScript տեխնոլոգիաներով իրական նախագծերի վրա։</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-gray-300 border-4 border-white hover:bg-[#580000] transition-colors"></div>
                  <span className="text-xs font-bold text-[#580000]">2022</span>
                  <h3 className="font-bold text-gray-950 mt-1">Armenia Workforce Development Activity</h3>
                  <p className="text-sm text-gray-500 mt-1">Վեբ ծրագրավորման հիմունքներ (HTML, CSS, JS)</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Իմ Նախագծերը */}
      <section id="portfolio" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-950">Իմ Նախագծերը</h2>
          <div className="w-12 h-1 bg-[#580000] mx-auto mt-3 mb-16"></div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* EPC.am (Քոլեջի Կայք) - Ցուցադրված է որպես հսկայական ձեռքբերում */}
            <div className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <span className="px-2.5 py-1 bg-[#580000]/10 text-[#580000] text-xs font-semibold rounded-full uppercase tracking-wider">
                    Պետական Կայք / Full-Stack
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-950 group-hover:text-[#580000] transition-colors">
                  EPC.am
                </h3>
                <p className="text-sm text-gray-500 line-clamp-3">
                  Էջմիածնի պետական քոլեջի պաշտոնական կայքը։ Ամբողջությամբ ստեղծված է իմ կողմից (և՛ ֆրոնտենդը, և՛ բեքենդը)՝ ներառելով հզոր ադմինիստրատիվ կառավարման համակարգ։
                </p>
              </div>
              <div className="p-6 pt-0 border-t border-gray-50 bg-gray-50/50 flex justify-between items-center">
                <Link
                  href="/projects/epc"
                  className="text-xs font-bold text-[#580000] hover:underline"
                >
                  Կարդալ ավելին & Մանրամասներ →
                </Link>
              </div>
            </div>

            {/* SiteUp.am */}
            <div className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="p-6 space-y-4">
                <span className="px-2.5 py-1 bg-[#580000]/10 text-[#580000] text-xs font-semibold rounded-full uppercase tracking-wider">
                  Իմ Բիզնեսը
                </span>
                <h3 className="text-xl font-bold text-gray-950 group-hover:text-[#580000] transition-colors">
                  SiteUp.am
                </h3>
                <p className="text-sm text-gray-500 line-clamp-3">
                  Իմ սեփական ստարտափը, որը զբաղվում է թվային ինտերակտիվ հրավիրատոմսերի պատրաստմամբ։ Էսթետիկ և ժամանակակից լուծումներ։
                </p>
              </div>
              <div className="p-6 pt-0 border-t border-gray-50 bg-gray-50/50 flex justify-between items-center">
                <Link
                  href="/projects/siteup"
                  className="text-xs font-bold text-[#580000] hover:underline"
                >
                  Կարդալ ավելին & Մանրամասներ →
                </Link>
              </div>
            </div>

            {/* Eyes Brand */}
            <div className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="p-6 space-y-4">
                <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full uppercase tracking-wider">
                  Landing Page
                </span>
                <h3 className="text-xl font-bold text-gray-950 group-hover:text-[#580000] transition-colors">
                  Eyes Brand
                </h3>
                <p className="text-sm text-gray-500 line-clamp-3">
                  Նորաձևության և բրենդավորման թեմատիկայով էսթետիկ, մինիմալիստական և գրավիչ վեբ էջ։
                </p>
              </div>
              <div className="p-6 pt-0 border-t border-gray-50 bg-gray-50/50 flex justify-between items-center">
                <Link
                  href="/projects/eyesbrand"
                  className="text-xs font-bold text-[#580000] hover:underline"
                >
                  Կարդալ ավելին & Մանրամասներ →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Կապի Բաժին */}
      <section id="contact" className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-950">Հետադարձ Կապ</h2>
          <div className="w-12 h-1 bg-[#580000] mx-auto mt-3 mb-16"></div>

          <div className="grid md:grid-cols-12 gap-12">

            {/* Կոնտակտային տվյալներ */}
            <div className="md:col-span-5 space-y-6">
              <h3 className="text-xl font-bold text-gray-950">Կապնվեք ինձ հետ</h3>
              <p className="text-gray-500 text-sm">
                Պատրաստ եմ քննարկել նոր նախագծեր, համագործակցություններ կամ աշխատանքային առաջարկներ։
              </p>

              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-center gap-3">
                  <span className="text-[#580000]">📍</span>
                  <span>Հայաստան, Վաղարշապատ / Երևան</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#580000]">📞</span>
                  <a href="tel:+37477760204" className="hover:text-[#580000] transition-colors">+374 77 76 02 04</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#580000]">✉️</span>
                  <a href="mailto:lilit.themes@gmail.com" className="hover:text-[#580000] transition-colors">lilit.themes@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Կապի Ֆորմա (Ֆրոնտենդային փոփոխություն՝ պահպանելով քո նախորդ բեքենդ տրամաբանությունը) */}
            <div className="md:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Անուն</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#580000] transition-colors text-sm"
                    placeholder="Ձեր անունը"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Էլ. հասցե</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#580000] transition-colors text-sm"
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Հաղորդագրություն</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#580000] transition-colors text-sm"
                    placeholder="Գրեք Ձեր հաղորդագրությունը այստեղ..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#580000] text-white font-semibold rounded-lg hover:bg-[#400000] transition-all text-sm shadow-lg shadow-[#580000]/10"
                >
                  Ուղարկել Հաղորդագրությունը
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}