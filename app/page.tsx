'use client'

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <header className="relative min-h-screen overflow-hidden bg-black text-white flex flex-col justify-center">
      {/* decorative blobs */}
      <div className="absolute -top-20 -right-40 w-72 sm:w-96 h-72 sm:h-96 rounded-full opacity-30 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 200\'><circle cx=\'100\' cy=\'100\' r=\'100\' fill=\'%23590000\'/></svg>')] blur-3xl transform rotate-12 animate-[float_8s_ease-in-out_infinite]" aria-hidden="true" />

      <div className="absolute -bottom-32 -left-40 w-60 sm:w-80 h-60 sm:h-80 rounded-full opacity-25 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 200\'><circle cx=\'100\' cy=\'100\' r=\'100\' fill=\'%23ffffff\'/></svg>')] blur-2xl transform -rotate-6 animate-[float_10s_ease-in-out_infinite]" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-20 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 text-center md:text-left"
        >
          <p className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-[rgba(89,0,0,0.9)]">
            Բարև
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Լիլիթ Բարեղամյան
            <span className="block text-base sm:text-lg font-medium text-gray-300 mt-2">
              Front-end developer · UI/UX enthusiast
            </span>
          </h1>

          <p className="text-gray-300 max-w-xl mx-auto md:mx-0">
            Ստեղծում եմ ժամանակակից, արագ ու գեղեցիկ վեբ ինտերֆեյսներ՝ ուշադրություն դարձնելով մանրուքներին, կատարողականությանը և մատչելիությանը։
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 items-center">
            <a
              href="#work"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl font-semibold text-white bg-[#590000] shadow-2xl hover:scale-105 transition-transform"
            >
              Տեսնել աշխատանքները
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-700 text-sm text-gray-200 hover:bg-white/10 transition"
            >
              Կապվել ինձ հետ
            </a>
          </div>

          <div className="mt-4 text-sm text-gray-400">
            Կոդը, նախագծերը և բլոգը հասանելի են այստեղ՝{' '}
            <a className="underline hover:text-white" href="https://lilitbareghamyan.vercel.app/">
              lilitbareghamyan.vercel.app
            </a>
          </div>
        </motion.div>

        {/* Image section */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center"
        >
          <div className="w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-3xl bg-gradient-to-br from-gray-900 to-black p-1 shadow-2xl">
            <div className="w-full h-full rounded-3xl bg-black flex items-center justify-center overflow-hidden relative">
              <img
                src="https://scontent.fevn4-2.fna.fbcdn.net/v/t39.30808-6/519685811_1141227137841403_8520830556761131481_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vN0C6cdDCZUQ7kNvwG9lLzS&_nc_oc=Adkt7vtGIIq5fSfSuunFH0tRVa5cYFu1BYESgp0HbaIjBGWEUc7MK2OL3N92WrBuYUo&_nc_zt=23&_nc_ht=scontent.fevn4-2.fna&_nc_gid=I-gqoWm71L-WaPvrAaL3uA&oh=00_Afg97V55T1V5RFJAk1ZOixVOpIMB3bgsUtNZ4HFXWXXAwA&oe=6918DDF2"
                alt="Լիլիթ Բարեղամյան"
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-4 left-4 bg-[rgba(89,0,0,0.95)] px-3 py-1 rounded-full text-xs font-semibold">
                Open to work
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0) }
          50% { transform: translateY(12px) }
          100% { transform: translateY(0) }
        }
      `}</style>
    </header>
  );
}
